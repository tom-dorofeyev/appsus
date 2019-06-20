
import emailService from '../services/email.service.js'
import emailList from './email-list.cmp.js'

export default {
    template: `
    <section class="email-app">
        <email-list :emails="emailsForDisplay"></email-list>
        hello im an email app

        <router-link to="/">go Home</router-link>
    </section>
    `,
    data() {
        return {
            filter: null,
            emails: []
        }
    },
    created() {
        emailService.query()
            .then(res => this.emails = res);
    },
    computed:{
        emailsForDisplay(){
            if (!this.filter) return this.emails;
        }
    },
    components: {
        emailList,
    }
}