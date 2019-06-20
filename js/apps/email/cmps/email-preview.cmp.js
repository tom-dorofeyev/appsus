'use strict'

import emailService from '../services/email.service.js'

export default {
    props: ['email'],
    template: `
    <section class="email-preview-container flex">
        <input type="checkbox" :name="email.id" @click="updateChecked">
        <input class="star" type="checkbox" :name="email.id" checked>
        <div class="preview-text">
            <div class="from">{{email.from}}</div>
            <div class="title">{{email.title}}</div>
        </div>
    </section>
    `,
    data() {
        return {
            checkedEmails: [],
        }
    },
    methods: {
        updateChecked(ev) {
            const isChecked = ev.target.checked;
            const emailId = ev.target.name;
            if(isChecked){
                emailService.getEmailById(emailId)
                    .then(email=>{
                        console.log(email)
                        this.checkedEmails.push(email)})
            }
            console.log('isChecked', ev.target.checked)
            console.log('checked', ev.target.name)
        }
    },
}