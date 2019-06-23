'use strict'

import { bookService } from '../services/book.service.js'

export default{
    template:`
    <section class="add-review">
        <form action="#" class="review-form flex column">
        <div>Add Your Own Review</div>
            <div class="user-name">
                Enter Your Full Name
                <input type="text" value="Books Reader" ref="userName">
            </div>
            <input type="date">
            <textarea placeholder="Enter text here..."></textarea>
        </form>
    </section>
    `,
    created(){

    },
    methods:{
 
    },
}