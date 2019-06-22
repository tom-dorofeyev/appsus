'use strict'
import appNav from './app-nav.cmp.js'

export default {
    template: `
    <section class="homepage-container">
        <h1>Homepage</h1>
        <img @click="toggleNav" class="apps-icon" src="/img/apps.png">
        <app-nav v-if="isNavOpen"></app-nav>
        <router-link to="/email">Email app</router-link> |
        <router-link to="/keep">Miss Keep app</router-link> |
        <router-link to="/book">Miss Book app</router-link> |
    </section>
    `,
    components: {
        appNav,
    },
    methods: {
        toggleNav(){
            this.isNavOpen = !this.isNavOpen
        },
    },
    data() {
        return {
            isNavOpen: false,
        }
    },
}