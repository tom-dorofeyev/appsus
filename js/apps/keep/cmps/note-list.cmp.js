import singleNote from './single-note.cmp.js'

export default {
    props: ['noteList'],
    template: `
    <section class="note-list-container flex column">
        <h4 v-if="checkForPinned">pinned</h4>
        <div class="pinned-container">
            <single-note v-for="currNote in noteList" v-if="currNote.isPinned" :key="currNote.id" :note="currNote"></single-note>
        </div>
        <h4 v-if="checkForPinned">Not Pinned</h4>
        <div class="not-pinned-container">
            <single-note v-for="currNote in noteList" v-if="!currNote.isPinned" :key="currNote.id" :note="currNote"></single-note>
        </div>
    </section>
    `,
    components:{
        singleNote,
    },
    computed:{
        checkForPinned(){
            return this.noteList.some(note =>{
                return note.isPinned
            })
        },
    },
    methods:{
        
    }
}