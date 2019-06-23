'use strict'

import { bookService } from '../services/book.service.js'

export default {
    template: `
    <section class="add-book-container">
        <input type="text" placeholder="Enter Book To Search"
        v-model="filterBy.txt" @keyup.enter="bookListToShow"/>
        <button @click="bookListToShow()">Search</button>
        <ul class="book-list">
            <li v-for="book in booksToShow" :key="book.id" class="google-book">{{book.title}}
                <button :id="book.id" class="add-book" @click="uploadBookToApp">+</button>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
            },
            booksToShow: [],
        }
    },
    methods: {
        bookListToShow() {
            if (!this.filterBy.txt) this.booksToShow = []
            else {
                bookService.getGoogleBooks(this.filterBy.txt)
                    .then(res => {
                        this.booksToShow = bookService.resetBooks(res);
                    })
            }

        },
        uploadBookToApp(ev) {
            bookService.getGoogleBookById(ev.target.id)
                .then(book => { bookService.addToDB(book) })
        },
    }
}