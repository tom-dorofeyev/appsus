' use strict'

export default {
    props:['note'],
    template: `
    <section v-if="note.text || note.todos || note.link || note.audio || note.image" class="note-container">
        {{note.text}}<br>
        {{note.image}}<br>
        {{note.todos}}<br>
        {{note.link}}<br>
        {{note.audio}}<br>
    </section>
    `,
    created(){
    }
}