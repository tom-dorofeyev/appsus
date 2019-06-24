'use strict'
import appNav from '../../../pages/app-nav.cmp.js'

export default {
    template: `
    <section class="homepage-container">
    <img @click="toggleNav" class="apps-icon" src="img/apps.png">
        <app-nav v-if="isNavOpen"></app-nav>
    <h1> Miss Books </h1>
        <router-link to="/">Home</router-link>
    </section>
    `,
    data() {
        return {
            isNavOpen: false,
        }
    },
    methods: {
        toggleNav(){
            this.isNavOpen = !this.isNavOpen
        },
    },
    components: {
        appNav,
    },

}