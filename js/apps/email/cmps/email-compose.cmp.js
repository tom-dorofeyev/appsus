'use strict'

import emailService from '../services/email.service.js'
import utilService from '../../../services/utils.service.js'

export default {
    template: `
        <section class="compose-container">
            <section class="compose-header">
                <h2 class="compose-title" >New Message</h2>
            </section>
            <input class="compose-inputs" v-model="newEmail.to" placeholder="Recipients" type="text">
            <input class="compose-inputs" v-model="newEmail.title"  placeholder="Subject" type="text">
            <textarea class="compose-input-text" v-model="newEmail.text" placeholder="Body"> </textarea>
            <router-link to="/email"><button @click="sendMail">Send</button></router-link>
        </section>
        `,
    data() {
        return {
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
    },
    created() {
        const emailId = this.$route.params.emailId;
        emailService.getEmailById(emailId).then(email => this.currentEmail = email);
    },
    methods: {
        sendMail(){
            emailService.add(this.newEmail)
            emailService.updateEmailsDB()
        },
    }
}