'use strict'

import emailService from '../services/email.service.js'
import eventBus from '../../../event-bus.js'

export default {
    template:`
    <section class="side-bar">
        <ul>
            <li @click="emitInbox">Inbox</li>
            <li @click="emitStarred">starred</li>
            <li @click="emitTrash">trash</li>
        </ul>
    </section>
    `,
    methods:{
        emitInbox(){
            emailService.query().then(emails => {
                emails = emails.filter(email => !email.type.isTrash)
                eventBus.$emit('update-emails', emails);
            })
        },
        emitStarred(){
            emailService.getEmailByType('isStar').then(emails => {
                eventBus.$emit('update-emails', emails)
            })
        },
        emitTrash(){
            emailService.getEmailByType('isTrash').then(emails => {
                eventBus.$emit('update-emails', emails)
            })
        }
    }
}