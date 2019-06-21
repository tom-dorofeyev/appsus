'use strict'

import emailService from '../services/email.service.js'

export default {
    template: `
        <section class="list-container">
            <router-link to="/email">Back</router-link>
            <h2>Title: {{currentEmail.title}}</h2>
            <section class="star-checker">
            <p v-if="currentEmail.type">⭐{{currentEmail.type.isStar}}</p>
            <p v-if="currentEmail.type">🗑{{currentEmail.type.isTrash}}</p>
            <p v-if="currentEmail.type">✉{{currentEmail.type.isRead}}</p>
            </section>
            <hr>
            <img v-if="currentEmail.images" class="user-img" v-bind:src="currentEmail.images[0].profile" /> 
            <p>From: <a :href="'mailto:' + currentEmail.from">{{currentEmail.from}}</a></p>
            <p>To: <a :href="'mailto:' + currentEmail.to">{{currentEmail.to}}</a></p>
            <p>{{currentEmail.timestamp}}</p>
            <br>
            <p>{{currentEmail.text}}</p>
            <router-link to="/email/new">New Mail</router-link>  <br>
            (Not Working)
            <button>Replay</button>
            <button>Forward</button>
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