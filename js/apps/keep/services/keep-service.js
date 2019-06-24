'use strict'

import utilService from '../../../services/utils.service.js'
import storageService from '../../../services/storage.service.js'

const NOTES_KEY = 'notes';

let notesDB = 
[{
        id: utilService.makeId(),
        title: 'this is a title1',
        text: 'we love puki',
        image: '',
        todos:'',
        link:'',
        youtube:'',
        audio:'',
        type: 'text',
    },
    {
        id: utilService.makeId(),
        title: 'this is a title3',
        text: 'puki muki',
        image: '',
        todos:'Build awesome vue project, Make yaron proud, Cry after code review',
        link:'',
        youtube:'',
        audio:'',
        type: 'todos',
        isPinned: true
    },
    {
        id: utilService.makeId(),
        title: 'this is a title4',
        text: '',
        image: 'https://i.redd.it/oyov9xsfx98y.jpg',
        todos:'',
        link:'',
        youtube:'',
        audio:'',
        type: 'image',
    },
    {
        id: utilService.makeId(),
        title: 'this is a title4',
        text: '',
        image: 'https://cdn.cosmicjs.com/827f8900-6288-11e7-ab3d-9ddd8313526f-96da6390-e18a-11e6-a19e-716cc90a0c51-Vue.js_Logo.svg',
        todos:'',
        link:'',
        youtube:'',
        audio:'',
        type: 'image',
    },
];

function query(){
    let notes = storageService.load(NOTES_KEY);
    if (!notes) {
        notes = notesDB;
        storageService.store(NOTES_KEY, notes);
    }
    return notes
}

function deleteNoteByid(id){
    const index = getNoteIndex(id)
    let notes = query()
    notes.splice(index, 1);
    storageService.store(NOTES_KEY, notes);
}

function createTodos(todos, id){
    let currTodos;
    let notes = query()
    let noteIndex = getNoteIndex(id);
    if(todos[0].text){
        currTodos = todos;
    } else {
        let newTodos = todos.split(',');
        currTodos = newTodos.map(todoStr => {
            return {
                id:utilService.makeId(),
                text:todoStr,
                isDone: false,
            }
        })
    }
    notes[noteIndex].todos = currTodos;
    storageService.store(NOTES_KEY, notes)
    return currTodos;
}

function updateTodoStatus(todo){
    console.log('got to service ', todo)
    let notes = query();
    notes.forEach(note => {
        if(note.todos){
            note.todos.forEach(currTodo =>{
                if(currTodo.id === todo.id){
                    currTodo.isDone = !currTodo.isDone;
                }
            })
        }
    })
    storageService.store(NOTES_KEY, notes);
}

function pinUnpinNoteById(id){
    const index = getNoteIndex(id);
    let notes = query();
    notes[index].isPinned = !notes[index].isPinned
    storageService.store(NOTES_KEY, notes);
}

function getNoteIndex(id) {
    let notes = query()
    return notes.findIndex(notes => notes.id === id);
}

function add(newNote) {
        let notes = query()
        notes.unshift(newNote)
        storageService.store(NOTES_KEY, notes);
        return notes
}

export default {
    query,
    add,
    getNoteIndex,
    deleteNoteByid,
    pinUnpinNoteById,
    createTodos,
    updateTodoStatus
}