'use strict'

import emailService from '../services/email.service.js'

export default {
    template: `
        <section class="compose-container">
            <section class="compose-header">
                <h2 class="compose-title" >New Message {{currentEmail.title}}</h2>
            </section>
            <router-link to="/email">Back</router-link>
            <hr>
            <input class="compose-inputs" placeholder="Recipients" type="text">
            <input class="compose-inputs" placeholder="Subject" type="text">
            <textarea class="compose-input-text" placeholder="Body"> </textarea>
            <p>{{currentEmail.text}}</p>
        </section>
        `,
    data() {
        return {
            currentEmail: []
        }
    },
    components: {
    },
    created() {
        const emailId = this.$route.params.emailId;
        emailService.getEmailById(emailId).then(email => this.currentEmail = email);
    },

}