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
                eventBus.$emit('update-emails', emails);
            })
        },
        emitStarred(){
            console.log('emiting starred')
        },
        emitTrash(){
            console.log('emiting trash')
        }
    }
}