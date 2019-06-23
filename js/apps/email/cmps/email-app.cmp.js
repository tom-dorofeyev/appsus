import emailService from '../services/email.service.js'
import storageService from '../../../services/storage.service.js'
import emailList from './email-list.cmp.js'
import filterBy from './filter-by.cmp.js'
import emailStatus from './email-status.cmp.js'
import emailCompose from './email-compose.cmp.js'
import sideBar from './email-sidebar.cmp.js'
import eventBus, { UPDATE_EMAILS, CURR_TYPE } from '../../../event-bus.js'


export default {
    template: `
    <section class="email-app">
        <header class="main-header flex">
            <button>
                <router-link to="/">Home</router-link>
            </button>
            <button @click="toggleNewMail" class="compose-btn">New Mail</button>
            <email-compose v-if="isNewMailOpen"></email-compose>
            <filter-by :emails="emails" @set-filter="setFilter"></filter-by>

        </header>
            
        <section class="list-sidebar-container">
        <div v-bind:status="readStatus" class="status-bar">
            <div :style="{width:readPercentage}" class="status-loader">{{readPercentage}}</div>
            </div>
            <side-bar></side-bar>
            <email-list :emails="emails"></email-list>
        </section>
    </section>
    `,


    data() {
        return {
            isNewMailOpen: false,
            filter: null,
            emails: [],
            readPercentage: 0,
            currType: 'inbox',
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails);
        eventBus.$on(UPDATE_EMAILS, emails => {
            this.emails = emails
            this.isNewMailOpen = false;
            emailService.getFilteredEmails('read').then(emails => {
                const totalEmails = storageService.load('emails')
                this.readPercentage = parseInt((emails.length / totalEmails.length) * 100) + "%";
            });
        }),
        eventBus.$on(CURR_TYPE, type => console.log(type));
    },
    computed: {
        emailsForDisplay() {
            return this.emails;
        },
        readStatus() {
            emailService.getFilteredEmails('read').then(emails => {
                this.readPercentage = (emails.length / this.emails.length) * 100 + "%";
            });
        },
    },
    methods: {
        toggleNewMail() {
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