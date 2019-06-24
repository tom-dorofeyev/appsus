import noteList from './note-list.cmp.js'
import keepService from '../services/keep-service.js'
import utilService from '../../../services/utils.service.js'
import eventBus, {UPDATE_NOTES} from '../../../event-bus.js'

export default {
    template: `
    <section class="homepage-container">
        <h1> Miss Keep </h1>
        <input @change="sendNote" v-if="newNote.type === 'text'"
                v-model="newNote.text" placeholder="Whats on your mind..." type="text">
        <input @change="sendNote" v-if="newNote.type === 'image'"
                v-model="newNote.image" placeholder="Enter Image URL" type="text">
        <input @change="sendNote" v-if="newNote.type === 'youtube'"
                v-model="newNote.youtube" placeholder="Enter youtube video URL" type="text">

                <i class="fas fa-font" id="text" @click="selectType"></i>
                <i class="fab fa-youtube" id="youtube" @click="selectType"></i>
                <i class="far fa-image" id="image" @click="selectType"></i>
                <i class="fas fa-list" id="todos" @click="selectType"></i>

        <!-- <select v-model="newNote.type">
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="youtube">YouTube</option>
                <option value="todo">Todo</option>
              </select> -->
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
        }
    },
    components: {
        noteList,
    }
}
