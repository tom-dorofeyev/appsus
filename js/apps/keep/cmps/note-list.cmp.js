import singleNote from './single-note.cmp.js'

export default {
    props: ['noteList'],
    template: `
    <section class="note-list-container flex column">
        <div class="pinned-container flex">
            <single-note v-for="currNote in noteList" v-if="currNote.isPinned" :key="currNote.id" :note="currNote"></single-note>
        </div>
        <div class="not-pinned-container flex">
            <single-note v-for="currNote in noteList" v-if="!currNote.isPinned" :key="currNote.id" :note="currNote"></single-note>
        </div>
    </section>
    `,
    components:{
        singleNote,
    }
}