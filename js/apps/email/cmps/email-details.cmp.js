'use strict'

import emailService from '../services/email.service.js'

export default {
    template: `
        <section class="list-container">
        <h2>Title: {{currentEmail.title}} </h2>
        <p>{{currentEmail.id}}</p>
        <hr>
        <img v-if="currentEmail.images" class="user-img" v-bind:src="currentEmail.images[0].profile" /> 
        <p>From: <a :href="'mailto:' + currentEmail.from">{{currentEmail.from}}</a></p>
        <p>To: <a :href="'mailto:' + currentEmail.to">{{currentEmail.to}}</a></p>
        <p>{{currentEmail.timestamp}}</p>
        <br>
        <p>{{currentEmail.text}}</p>
        <p v-if="currentEmail.type">Star?⭐ {{currentEmail.type.isStar}}</p>
        <p v-if="currentEmail.type">Trash?🗑 {{currentEmail.type.isTrash}}</p>
        <p v-if="currentEmail.type">Read?✉ {{currentEmail.type.isRead}}</p>
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
        emailService.query()
            .then(res => this.currentEmail = res[0])
            .then(() => console.log(this.currentEmail.images[0]));
    },

}