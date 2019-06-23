import noteList from './note-list.cmp.js'
import keepService from '../services/keep-service.js'

export default {
    template: `
    <section class="homepage-container">
        <router-link to="/">Home</router-link>
        <h1> Miss Keep </h1>
        <note-list :noteList="notes"></note-list>
    </section>
    `,
    data() {
        return {
            notes: [],
        }
    },
    created() {
        this.notes = keepService.query()
    },
    components: {
        noteList
    }
}