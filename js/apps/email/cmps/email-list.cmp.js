'use strict'

import emailPreview from './email-preview.cmp.js'
import emailService from '../services/email.service.js'

export default {
    props: ['emails'],
    template: `
        <section class="list-container">
            <email-preview v-for="currEmail in emails"
                            :key="currEmail.id"
                            :email="currEmail"
                            @update-marked="updateMarkedEmails">
            </email-preview>
            <div>{{checkedEmails}}</div>
        </section>
    `,
    data() {
        return {
            checkedEmails: [],
        }
    },
    methods: {
        updateMarkedEmails(emailId) {
            const checkedEmailIndex = this.checkedEmails.findIndex((email) => {
                return emailId === email.id
            })
            if (checkedEmailIndex > -1) this.checkedEmails.splice(checkedEmailIndex, 1)
            else {
                emailService.getEmailById(emailId)
                    .then(res => { this.checkedEmails.push(res) })
            }
        },
    },
    components: {
        emailPreview,
    }
}