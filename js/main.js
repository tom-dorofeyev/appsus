'use strict'

import './apps/email/cmps/email-app.cmp.js'
import appNav from '../js/pages/app-nav.cmp.js'
import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })

var app = new Vue({
    el: '#app',
    created() {
        console.log('App has been Created!');
    },
    template: `
        <div>
        <img @click="toggleNav" class="apps-icon" src="img/apps.png">
        <app-nav v-if="isNavOpen"></app-nav>
            <router-view></router-view>
        </div>
    `,
    router: myRouter,
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
    components: {
        appNav,
    }
})