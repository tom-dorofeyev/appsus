'use strict'

import emailService from '../services/email.service.js'
import eventBus , {CURR_TYPE} from '../../../event-bus.js'

export default {
    props: ['email'],
    template: `
    <section class="email-preview-container flex"
             :class="{read : isRead, 'not-read' : !isRead}"
             @click="emitChanges">
        <input class="mark" type="checkbox" :name="email.id" @click="updateChecked">
        <input class="star" type="checkbox" :name="email.id" checked>
        <router-link class="preview-link" :to="'email/details/' + email.id">
            <div class="preview-text" @click="markAsRead">
                <div class="from">{{email.from}}</div>
                <div class="title">{{email.title}}</div>
            </div>
        </router-link>
            <div class="actions flex">
                <i @click="deleteEmail" class="fas fa-trash-alt"></i>
                <i class="fas fa-envelope-open-text" @click="markAsUnread" v-if="email.type.isRead"></i>
                <i class="fas fa-envelope" @click="markAsRead" v-if="!email.type.isRead"></i>
            </div>
    </section>
    `,
    data() {
        return {
            isRead: this.email.type.isRead,
            currType: 'inbox',
        }
    },
    methods: {
        updateChecked(ev) {
            const emailId = ev.target.name;
            this.$emit('update-marked', emailId)
        },
        deleteEmail(){
            emailService.moveToTrash(this.email.id);
            
        },
        markAsUnread(){
            emailService.markAsReadOrUnread(this.email.id, false);
        },
        markAsRead(){
            emailService.markAsReadOrUnread(this.email.id, true);
        },
        emitChanges(){
            emailService.query().then(emails=>{
                eventBus.$emit('update-emails', emails);
            })
        }
    },
}