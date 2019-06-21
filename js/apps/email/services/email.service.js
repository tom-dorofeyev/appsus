'use strict'

import utilService from '../../../services/utils.service.js'
import storageService from '../../../services/storage.service.js'

const EMAILS_KEY = 'emails'

let emailsDB = [
    {
        id: utilService.makeId(),
        title: 'Hello there',
        from: 'baba@savta.com',

        to: 'mymail@savta.net',
        timestamp: 'Thu Jun 20 2019 11:48:49',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam consequuntur placeat, possimus animi unde aliquid natus assumenda, quia non iste magnam consectetur sequi beatae? Necessitatibus eum impedit accusantium. Sunt!',
        type:{
            isStar: false,
            isTrash: false,
            isRead: true,
            isMultSelected: false,
        },
        images:[{
            profile: 'img/email-imgs/generic-profile.png'
        }]
    },
    {
        id: utilService.makeId(),
        title: 'another email bluh2',
        from: 'baba@savta.com',
        to: 'mymail@savta.net',
        timestamp: 'Thu Jun 19 2019 11:48:49',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam consequuntur placeat, possimus animi unde aliquid natus assumenda, quia non iste magnam consectetur sequi beatae? Necessitatibus eum impedit accusantium. Sunt!',
        type:{
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images:[{
            profile: 'img/email-imgs/generic-profile.png'
        }]
    },
    {
        id: utilService.makeId(),
        title: 'puki bluh bluh muki3',
        from: 'baba@savta.com',
        to: 'mymail@savta.net',
        timestamp: 'Thu Jun 16 2019 11:48:49',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam consequuntur placeat, possimus animi unde aliquid natus assumenda, quia non iste magnam consectetur sequi beatae? Necessitatibus eum impedit accusantium. Sunt!',
        type:{
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images:[{
            profile: 'img/email-imgs/generic-profile.png'
        }]
    }
]

changeEmail(0,'title', 'we love sawsan');

function query(){
    let emails = storageService.load(EMAILS_KEY);
    if(!emails){
        emails = emailsDB;
        storageService.store(EMAILS_KEY, emails);
    }
    return Promise.resolve(emails);
}

function getFilteredEmails(filterWord){
    if(filterWord === 'all'){
        return query();
    } else if(filterWord === 'read'){
        return query().then(emails=>emails.filter(email=>email.type.isRead));
    } else if(filterWord ==='unread'){
        return query().then(emails=>emails.filter(email=>!email.type.isRead));
    }
}

function getEmailById(id){
    return query().then(emails=>{
        return emails.find(email=>email.id === id);
    })
}

function changeEmail(index, key, newValue){
    query().then(emails=>emails[index][key] = newValue)
}

export default {
    query,
    getEmailById,
    getFilteredEmails,
}


