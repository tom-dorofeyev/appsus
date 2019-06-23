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
        type: {
            isStar: true,
            isTrash: false,
            isRead: true,
            isMultSelected: false,
        },
        images: [{
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
        type: {
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images: [{
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
        type: {
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images: [{
            profile: 'img/email-imgs/generic-profile.png'
        }]
    },
    {
        id: utilService.makeId(),
        title: 'Hello there',
        from: 'baba@savta.com',

        to: 'mymail@savta.net',
        timestamp: 'Thu Jun 20 2019 11:48:49',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam consequuntur placeat, possimus animi unde aliquid natus assumenda, quia non iste magnam consectetur sequi beatae? Necessitatibus eum impedit accusantium. Sunt!',
        type: {
            isStar: true,
            isTrash: false,
            isRead: true,
            isMultSelected: false,
        },
        images: [{
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
        type: {
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images: [{
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
        type: {
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images: [{
            profile: 'img/email-imgs/generic-profile.png'
        }]
    },
    {
        id: utilService.makeId(),
        title: 'Hello there',
        from: 'baba@savta.com',

        to: 'mymail@savta.net',
        timestamp: 'Thu Jun 20 2019 11:48:49',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam consequuntur placeat, possimus animi unde aliquid natus assumenda, quia non iste magnam consectetur sequi beatae? Necessitatibus eum impedit accusantium. Sunt!',
        type: {
            isStar: true,
            isTrash: false,
            isRead: true,
            isMultSelected: false,
        },
        images: [{
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
        type: {
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images: [{
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
        type: {
            isStar: false,
            isTrash: false,
            isRead: false,
            isMultSelected: false,
        },
        images: [{
            profile: 'img/email-imgs/generic-profile.png'
        }]
    },
]


function query() {
    let emails = storageService.load(EMAILS_KEY);
    if (!emails) {
        emails = emailsDB;
        storageService.store(EMAILS_KEY, emails);
    }
    return Promise.resolve(emails);
}

function getFilteredEmails(filterWord) {
    if (filterWord === 'all') {
        return query();
    } else if (filterWord === 'read') {
        return query().then(emails => emails.filter(email => email.type.isRead));
    } else if (filterWord === 'unread') {
        return query().then(emails => emails.filter(email => !email.type.isRead));
    } else {
        return query().then(emails => emails.filter(email => email.title.includes(filterWord)));
    }
}

function getEmailById(id) {
    return query().then(emails => {
        return emails.find(email => email.id === id);
    })
}

function getEmailIndex(id) {
    return query().then(emails => {
        return emails.findIndex(email => email.id === id);
    })
}

function getEmailByType(keyName){
    return query().then(emails =>{
        return emails.filter(email => email.type[keyName])
    })
}

function add(newEmail) {
    return query().then(emails => {
        emails.unshift(newEmail)
        updateEmailsDB(emails);
        return Promise.resolve(emails)
    })
}

function moveToTrash(emailId) {
    getEmailIndex(emailId).then(index => {
        let emails = storageService.load(EMAILS_KEY);
        emails[index].type.isTrash = true;
        updateEmailsDB(emails);
    })
}

function markAsReadOrUnread(emailId, isRead) {
    getEmailIndex(emailId).then(index => {
        query().then(emails => {
            emails[index].type.isRead = isRead;
            updateEmailsDB(emails);
        })
    })
}

function updateEmailsDB(emails) {
    storageService.store(EMAILS_KEY, emails);
}

export default {
    query,
    getEmailById,
    getFilteredEmails,
    moveToTrash,
    add,
    updateEmailsDB,
    markAsReadOrUnread,
    getEmailByType
}
