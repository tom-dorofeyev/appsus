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
        title: 'this is a title2',
        text: 'bluh bluh ',
        image: '',
        todos:'',
        link:'',
        youtube:'',
        audio:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177828078&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        type: 'audio',
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

function getNoteIndex(id) {
    let notes = query()
    return notes.findIndex(notes => notes.id === id);
}

function add(newNote) {
        notesDB.unshift(newNote)
        storageService.store(NOTES_KEY, notesDB);
        return notesDB
}

export default {
    query,
    add,
    getNoteIndex,
    deleteNoteByid
}