
import emailService from '../services/email.service.js'
import emailList from './email-list.cmp.js'
import filterBy from './filter-by.cmp.js'
import emailStatus from './email-status.cmp.js'
import emailCompose from './email-compose.cmp.js'
import sideBar from './email-sidebar.cmp.js'
import eventBus, {UPDATE_EMAILS} from '../../../event-bus.js'

export default {
    template: `
    <section class="email-app">
        <router-link to="/">go Home</router-link> | 
        <router-link to="/email/details">go to Email details</router-link> |
        <button @click="toggleNewMail">New Mail</button>
        <email-compose v-if="isNewMailOpen"></email-compose>
        <filter-by :emails="emails" @set-filter="setFilter"></filter-by>
        <section class="list-sidebar-container">
            <side-bar></side-bar>
            <email-list :emails="emails"></email-list>
        </section>
    </section>
    `,


    data() {
        return {
            isNewMailOpen: false,
            filter: null,
            emails: []
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails);
        eventBus.$on(UPDATE_EMAILS, emails=>{
            this.emails = emails
        })
    },
    computed: {

    },
    methods: {
        toggleNewMail(){
            this.isNewMailOpen = !this.isNewMailOpen
        },
        setFilter(filter) {
            emailService.getFilteredEmails(filter).then(emails => this.emails = emails);
        },
        setFolder() {
            emailService.getFilteredEmails(filter).then(emails => this.emails = emails);
        },
    },
    components: {
        emailList,
        filterBy,
        emailStatus,
        emailCompose,
        sideBar
    }
}