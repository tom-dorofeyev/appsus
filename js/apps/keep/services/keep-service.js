'use strict'

import utilService from '../../../services/utils.service.js'
import storageService from '../../../services/storage.service.js'

const NOTES_KEY = 'notes';

let notesDB = [{

        id: utilService.makeId(),
        title: 'this is a title1',
        text: 'bluh bluh  puki muki',
        image: '',
        todos:'',
        link:'',
        audio:''
    },
    {
        id: utilService.makeId(),
        title: 'this is a title',
        text: 'bluh bluh ',
        image: '',
        todos:'',
        link:'',
        audio:''
    },
    {
        id: utilService.makeId(),
        title: 'this is a title2',
        text: 'puki muki',
        image: '',
        todos:'',
        link:'',
        audio:''
    },
    {
        id: utilService.makeId(),
        title: 'this is a title3',
        text: 'bluh bluh  puki muki',
        image: '',
        todos:'',
        link:'',
        audio:''
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

export default {
    query,
}