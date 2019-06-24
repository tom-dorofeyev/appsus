import noteList from './note-list.cmp.js'
import keepService from '../services/keep-service.js'
import utilService from '../../../services/utils.service.js'
import eventBus, {UPDATE_NOTES} from '../../../event-bus.js'

export default {
    template: `
    <section class="homepage-container">
        <h1> Miss Keep </h1>
        <div class="input-container flex">
            <input @change="sendNote" v-if="newNote.type === 'text'"
                    v-model="newNote.text" placeholder="Whats on your mind..." type="text">
            <input @change="sendNote" v-if="newNote.type === 'image'"
                    v-model="newNote.image" placeholder="Enter Image URL" type="text">
            <input @change="sendNote" v-if="newNote.type === 'youtube'"
                    v-model="newNote.youtube" placeholder="Enter youtube video URL" type="text">
            <input @change="sendNote" v-if="newNote.type === 'todos'"
                    v-model="newNote.todos" placeholder="Enter comma seperated list..." type="text">

            <div class="type-selection">
                <i class="fas fa-font" id="text" @click="selectType"
                :class="{seen: newNote.text, 'opacity-low': !newNote.text}"></i>
                <i class="fab fa-youtube" id="youtube" @click="selectType"
                :class="{seen: newNote.youtube, 'opacity-low': !newNote.youtube}"></i>
                <i class="far fa-image" id="image" @click="selectType"
                :class="{seen: newNote.image, 'opacity-low': !newNote.image}"></i>
                <i class="fas fa-list" id="todos" @click="selectType"
                :class="{seen: newNote.todos, 'opacity-low': !newNote.todos}"></i>
            </div>
        </div>
        <note-list :noteList="notes"></note-list>
    </section>
    `,
    data() {
        return {
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
    }
}
