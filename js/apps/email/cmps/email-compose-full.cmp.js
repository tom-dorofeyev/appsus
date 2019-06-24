'use strict'

import emailService from '../services/email.service.js'
import utilService from '../../../services/utils.service.js'
import eventBus from '../../../event-bus.js'
import appNav from '../../../pages/app-nav.cmp.js'

export default {
    template: `
        <section class="compose-container-full">
        <img @click="toggleNav" class="apps-icon" src="img/apps.png">
         <transition name="fade">
             <app-nav v-if="isNavOpen"></app-nav>
        </transition>
        <router-link to="/email">Back to Email app</router-link> |
            <section class="compose-header-full">
                <h2 class="compose-title-full" >New Message</h2>
            </section>
            <input class="compose-inputs-full" v-model="newEmail.to" placeholder="Recipients" type="text">
            <input class="compose-inputs-full" v-model="newEmail.title"  placeholder="Subject" type="text">
            <textarea class="compose-input-text-full" v-model="newEmail.text" placeholder="Body"> </textarea>
            <router-link to="/email"><button class="btn btn-primary" @click="sendMail">Send</button></router-link>
        </section>
        `,
    data() {
        return {
            isNavOpen: false,
            newEmail: {
                id: utilService.makeId(),
                title: '',
                from: 'baba@savta.com',
                to: '',
                timestamp: new Date(),
                text: '',
                type: {
                    isStar: false,
                    isTrash: false,
                    isRead: true,
                    isMultSelected: false,
                },
                images: [{
                    profile: 'img/email-imgs/generic-profile.png'
                }]
            },
        }
    },
    components: {
        appNav,
    },
    created() {
        const emailId = this.$route.params.emailId;
        emailService.getEmailById(emailId).then(email => this.currentEmail = email);
    },
    methods: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen
        },
        sendMail() {
            emailService.add(this.newEmail).then(emails => {
                    eventBus.$emit('update-emails', emails);
            })
        },
    }
}