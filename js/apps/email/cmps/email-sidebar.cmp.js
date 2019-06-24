'use strict'

import emailService from '../services/email.service.js'
import eventBus from '../../../event-bus.js'

export default {
    template:`
    <section class="side-bar">
        <ul class="flex column">
            <router-link to="/">
            <li>
            <i class="fas fa-home" ></i>
                Home
            </li>
            </router-link>
            <router-link to="/email/new">
            <li @click="emitInbox">
                <i class="fas fa-plus"></i>
                Compose
            </li>
            </router-link>
            <li @click="emitInbox">
                <i class="fas fa-inbox"></i>
                Inbox
            </li>
            <li @click="emitStarred">
                <i class="fas fa-star"></i>
                starred
            </li>
            <li @click="emitTrash">
                <i class="fas fa-trash-alt"></i>
                trash
            </li>
        </ul>
    </section>
    `,
    data(){
        return{

        }
    },
    created(){
        this.emitInbox()
    },
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