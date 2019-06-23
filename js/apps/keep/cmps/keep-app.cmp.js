import noteList from './note-list.cmp.js'
import keepService from '../services/keep-service.js'
import utilService from '../../../services/utils.service.js'

export default {
    template: `
    <section class="homepage-container">
        <h1> Miss Keep </h1>
        <input @change="sendNote" v-model="newNote.text" placeholder="Note Text" type="text">
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
                audio: '',
            }

    }
},
    created() {
        this.notes = keepService.query()
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
            }
        },
    },
    components: {
        noteList,
    }
}
