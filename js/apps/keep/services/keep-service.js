'use strict'

import utilService from '../../../services/utils.service.js'
import storageService from '../../../services/storage.service.js'

const NOTES_KEY = 'notes';

let notesDB = 
[{
        id: utilService.makeId(),
        title: 'this is a title1',
        text: 'bluh bluh  puki muki',
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
        todos:'',
        link:'',
        youtube:'https://www.youtube.com/embed/ftSUchAdVTE',
        audio:'',
        type: 'youtube',
    },
    {
        id: utilService.makeId(),
        title: 'this is a title4',
        text: 'bluh bluh  puki muki',
        image: 'https://data.whicdn.com/images/331262485/large.jpg?t=1559857573',
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