import singleNote from './single-note.cmp.js'

export default {
    props: ['noteList'],
    template: `
    <section class="note-list-container flex">
        <single-note v-for="currNote in noteList" :key="currNote.id" :note="currNote"></single-note>
    </section>
    `,
    components:{
        singleNote,
    }
}