
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
        <router-link to="/">Home</router-link> | 
        <button @click="readStatus">READSTATUS</button>
        <button @click="toggleNewMail">New Mail</button>
        <email-compose v-if="isNewMailOpen"></email-compose>
        <filter-by :emails="emails" @set-filter="setFilter"></filter-by>
<<<<<<< HEAD
        <email-status ></email-status>
        <email-list :emails="emailsForDisplay"></email-list>
=======
        <section class="list-sidebar-container">
            <side-bar></side-bar>
            <email-list :emails="emails"></email-list>
        </section>
>>>>>>> 7206a399b57239e39b56530699aabafe483598d7
    </section>
    `,


    data() {
        return {
            isNewMailOpen: false,
            filter: null,
            emails: [],
            readPercentage:55,
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
        emailsForDisplay() {
            return this.emails;
        },
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
        readStatus() {
            emailService.getFilteredEmails('read').then(emails => {
                this.readPercentage = emails.length/3*100+"%";
                console.log(this.readPercentage)
            });
            
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