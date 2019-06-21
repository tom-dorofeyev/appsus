
import emailService from '../services/email.service.js'
import emailList from './email-list.cmp.js'
import filterBy from './filter-by.cmp.js'

export default {
    template: `
    <section class="email-app">
        <router-link to="/">go Home</router-link> | 
        <router-link to="/email/details">go to Email details</router-link>
        <filter-by :emails="emails" @set-filter="setFilter"></filter-by>
        <email-list :emails="emailsForDisplay"></email-list>

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
    computed: {
        emailsForDisplay() {
            if (!this.filter) return this.emails;
            else{
                return this.emails.filter(email=>{
                    return email.title.includes(this.filter.title);
                })
            }
        }
    },
    methods: {
        setFilter(filter) {
            console.log('email App got the filter', filter);
            // this.filter = filter
        }
    },
    components: {
        emailList,
        filterBy
    }
}