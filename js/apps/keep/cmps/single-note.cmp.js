' use strict'

import keepService from '../services/keep-service.js'
import storageService from '../../../services/storage.service.js'
import eventBus, {UPDATE_NOTES} from '../../../event-bus.js'
import todosCmp from './todos.cmp.js'

export default {
    props:['note'],
    template: `
    <section v-if="note.text || note.todos || note.link || note.image"
            class="note-container">
            <div class="pin-edit-btns">
                <button @click="startEditing" class="edit-btn">
                    <i class="far fa-edit"></i>
                </button>
                <button v-if="note.isPinned" @click.stop="pinUnpin">
                    <i class="fas fa-unlink"></i>
                </button>
                <button v-if="!note.isPinned" @click.stop="pinUnpin">
                    <i class="fas fa-thumbtack"></i>
                </button>
            </div>
        <p class="note-text" v-if="note.type === 'text'">{{note.text}}</p>
        <todos-cmp v-if="note.type === 'todos'" :todos="getTodos"></todos-cmp>
        <img v-if="note.image" class="note-img" :src="note.image"/>
        <input v-show="isEdited" ref="editInput" v-model="note[note.type]" type="text" @keyup.enter="saveAndStopEdit"/>

        <div class="type">
            <i class="fas fa-font" v-if="note.type === 'text'"></i>
            <i class="fab fa-youtube" v-if="note.type === 'youtube'"></i>
            <i class="far fa-image" v-if="note.type === 'image'"></i>
            <i class="fas fa-list" v-if="note.type === 'todos'"></i>
        </div>

        <div class="edit-tool-container" v-if="isEdited">
            <button @click.stop="deleteNote">
                <i class="fas fa-trash-alt"></i>
            </button>
                <button @click.stop="saveAndStopEdit">
                    <i class="far fa-save"></i>
                </button>
            </div>
    </section>
    `,
    data(){
        return{
            isEdited: false,
            todos: [],
        }
    },
    created(){

    },
    computed:{
        getTodos(){
                this.todos = keepService.createTodos(this.note.todos, this.note.id);
                return this.todos
        }
    },
    methods:{
        startEditing(){
            this.isEdited = !this.isEdited;
        },
        saveAndStopEdit(){
            let noteIndex = keepService.getNoteIndex(this.note.id);
            let currNotes = storageService.load('notes');
            currNotes[noteIndex] = this.note;
            storageService.store('notes', currNotes)
            this.isEdited = false;
        },
        deleteNote(){
            keepService.deleteNoteByid(this.note.id);
            eventBus.$emit(UPDATE_NOTES, this.note);
        },
        pinUnpin(){
            keepService.pinUnpinNoteById(this.note.id);
            eventBus.$emit(UPDATE_NOTES, this.note);
        }
    },
    components:{
        todosCmp
    },

}