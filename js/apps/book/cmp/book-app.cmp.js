
import bookFilter from './book-filter.cmp.js'
import bookList from './book-list.cmp.js'
import bookDetails from './book-details.cmp.js'
import { bookService } from '../services/book.service.js'
import appNav from '../../../pages/app-nav.cmp.js'

export default {
    template: `
        <section class="book-container">
        <img @click="toggleNav" class="apps-icon" src="img/apps.png">
        <transition name="fade">
             <app-nav v-if="isNavOpen"></app-nav>
        </transition>
            <book-filter @filtered="setFilter"></book-filter>
            <book-list :books="booksToShow" @getBook="BookDetailsToShow"></book-list>
        </section>
    `,
    data() {
        return {
            filter: null,
            books: [],
            selectedBook: {},
            isBookDetails: false,
            isNavOpen: false,
        }
    },
    created() {
        bookService.query()
            .then(books=>{
                this.books = books
            })
    },
    computed: {
        booksToShow() {
            if (!this.filter) return this.books;
            let currBooks = this.books.filter(book => book.title.includes(this.filter.txt))
            currBooks = currBooks.filter(book=>{
                return book.listPrice.amount > +this.filter.lowestPrice
                && book.listPrice.amount < +this.filter.highestPrice
            })
            return currBooks
        },
    },
    methods:{
        BookDetailsToShow(currBook){
            this.isBookDetails = true;
            this.selectedBook = currBook;
        },
        toggleNav() {
            this.isNavOpen = !this.isNavOpen
        },
        setFilter(filter){
            this.filter = filter
        }
    },
    components: {
        bookFilter,
        bookList,
        bookDetails,
        appNav,
    }
}