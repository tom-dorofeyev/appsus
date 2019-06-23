' use strict'

import keepService from '../services/keep-service.js'
import storageService from '../../../services/storage.service.js'

export default {
    props:['note'],
    template: `
    <section v-if="note.text || note.todos || note.link || note.audio || note.image"
            class="note-container"
            @click="startEditing">
        {{note.text}}<br>
        {{note.todos}}<br>
        TYPE: {{note.type}}
        <!-- <iframe  v-if="note.audio" width="260" height="160" scrolling="no" frameborder="no" allow="autoplay" src="note.audio"></iframe> -->
        <iframe v-if="note.youtube" width="260" height="160" :src="note.youtube"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
        <img v-if="note.image" class="note-img" :src="note.image"/>
        <input v-if="isEdited" v-model="note[note.type]" type="text">
        <button v-if="isEdited" @click.stop="saveAndStopEdit">Save</button>
    </section>
    `,
    data(){
        return{
            isEdited: false,
        }
    },
    created(){
        
    },
    methods:{
        startEditing(){
            this.isEdited = true;
        },
        saveAndStopEdit(){
            let noteIndex = keepService.getNoteIndex(this.note.id);
            let currNotes = storageService.load('notes');
            currNotes[noteIndex] = this.note;
            storageService.store('notes', currNotes)
            this.isEdited = false;
        },
    },

}