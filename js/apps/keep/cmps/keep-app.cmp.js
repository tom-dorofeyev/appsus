'use strict'
import noteList from './note-list.cmp.js'
import keepService from '../services/keep-service.js'
import utilService from '../../../services/utils.service.js'
import eventBus, {UPDATE_NOTES} from '../../../event-bus.js'
import appNav from '../../../pages/app-nav.cmp.js'

export default {
    template: `
    <section class="notes-container">
        <img @click="toggleNav" class="apps-icon" src="img/apps.png">
        <transition name="fade">
                <app-nav v-if="isNavOpen"></app-nav>
        </transition>
        <h1 class="notes-header"> Miss Keep </h1>
        <div class="input-container flex">
            <transition name="fade">
                <input @change="sendNote" v-if="newNote.type === 'text'"
                        v-model="newNote.text" placeholder="Whats on your mind..." type="text">
                <input @change="sendNote" v-if="newNote.type === 'image'"
                        v-model="newNote.image" placeholder="Enter Image URL" type="text">
                <input @change="sendNote" v-if="newNote.type === 'youtube'"
                        v-model="newNote.youtube" placeholder="Enter youtube video URL" type="text">
                <input @change="sendNote" v-if="newNote.type === 'todos'"
                        v-model="newNote.todos" placeholder="Enter comma seperated list..." type="text">
            </transition>

            <div class="type-selection">
                <i class="fas fa-font" id="text" @click="selectType"
                :class="{seen: newNote.type === 'text', 'opacity-low': !newNote.type === 'text'}"></i>
                <i class="far fa-image" id="image" @click="selectType"
                :class="{seen: newNote.type === 'image', 'opacity-low': !newNote.type === 'image'}"></i>
                <i class="fas fa-list" id="todos" @click="selectType"
                :class="{seen: newNote.type === 'todos', 'opacity-low': !newNote.type === 'todos'}"></i>
            </div>
        </div>
        <note-list :noteList="notes"></note-list>
    </section>
    `,
    data() {
        return {
            isNavOpen: false,
            notes: [],
            newNote: {
                id: utilService.makeId(),
                title: '',
                text: '',
                image: '',
                todos: '',
                link: '',
                youtube:'',
                audio: '',
                type: 'text',
                isPinned: false,
            }

    }
    },
    created() {
        this.notes = keepService.query(),
        eventBus.$on(UPDATE_NOTES, ()=>this.notes = keepService.query())
    },
    methods: {
        sendNote() {
            this.newNote.id = utilService.makeId()
            keepService.add(this.newNote)
            this.notes = keepService.query()
            this.resetNewNote()
        },
        toggleNav(){
            this.isNavOpen = !this.isNavOpen
        },
        resetNewNote() {
            this.newNote = {
                id: utilService.makeId(),
                title: '',
                text: '',
                image: '',
                todos: '',
                link: '',
                audio: '',
                type: '',
            }
        },
        selectType(ev){
            this.newNote.type = ev.target.id
        },
    },
    components: {
        noteList,
        appNav,
    }
}
