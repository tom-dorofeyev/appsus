'use strict'

import utilService from '../../../services/utils.service.js'

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
            isRead: false,
            isMultSelected: false
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
            isMultSelected: false
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
            isMultSelected: false
        },
        images:[{
            profile: 'img/email-imgs/generic-profile.png'
        }]
    }
]

function query(){
    let emails = emailsDB
    return Promise.resolve(emails);
}

function getEmailById(id){
    return query().then(books=>{
        return books.find(currBook=>currBook === id);
    })
}

export default {
    query,
    getEmailById
}


