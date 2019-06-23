' use strict'

export default {
    props:['note'],
    template: `
    <section class="note-container">
        Id:{{note.id}} <br>
       Title: {{note.title}}<br>
        Text: {{note.text}}<br>
        {{note.image}}<br>
        {{note.todos}}<br>
        {{note.link}}<br>
        {{note.audio}}<br>
    </section>
    `,
    created(){
        console.log(this.note)
    }
}