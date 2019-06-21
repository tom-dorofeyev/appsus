'use strict'

import emailService from '../services/email.service.js'

export default {
    props: ['email'],
    template: `
    <section class="email-preview-container flex">
        <input class="mark" type="checkbox" :name="email.id" @click="updateChecked">
        <input class="star" type="checkbox" :name="email.id" checked>
        <router-link class="preview-link" :to="'email/details/' + email.id">
            <div class="preview-text">
                <div class="from">{{email.from}}</div>
                <div class="title">{{email.title}}</div>
            </div>
        </router-link>
            <div class="actions">
                <span @click="deleteEmail">🗑</span>
            </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        updateChecked(ev) {
            const emailId = ev.target.name;
            this.$emit('update-marked', emailId)
        },
        deleteEmail(){
            emailService.moveToTrash(this.email.id)
            console.log('hi there')
        }
    },
}