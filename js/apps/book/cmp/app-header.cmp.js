'use strict'

import addBook from './book-add.cmp.js'

export default{
    template:`
    <header>
        <nav class="main-nav">
            <ul class="nav-list flex">
                <router-link to="/">
                    <li class="nav-item">Home</li>
                </router-link>
                <router-link to="/bookApp">
                    <li class="nav-item">Go To Book App</li>
                </router-link>
            </ul>
            <add-book></add-book>
        </nav>
    </header>
    `,
    methods:{
        
    },
    components:{
        addBook,
    }
}