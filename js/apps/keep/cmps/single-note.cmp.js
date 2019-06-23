' use strict'

export default {
    props:['note'],
    template: `
    <section v-if="note.text || note.todos || note.link || note.audio || note.image" class="note-container">
        {{note.text}}<br>
        {{note.todos}}<br>
        TYPE: {{note.type}}
        <!-- <iframe  v-if="note.audio" width="260" height="160" scrolling="no" frameborder="no" allow="autoplay" src="note.audio"></iframe> -->
        <iframe v-if="note.youtube" width="260" height="160" v-bind:src="note.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img v-if="note.image" class="note-img" v-bind:src="note.image"/>
    </section>
    `,
    created(){
    }
}