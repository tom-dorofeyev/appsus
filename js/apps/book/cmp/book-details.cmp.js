
import { bookService } from '../services/book.service.js'
import addReview from './review-add.cmp.js'

export default {
    // props: ['selectedBook'],
    template: `
    <section class="details-container" v-if="selectedBook">
        <div class="book-details slide-down flex">
            <div class="book-image">
                <img :src="selectedBook.thumbnail"/>
            </div>
            <div class="text-container">
                <div class="title details-item"><span>Book Name:</span> {{selectedBook.title}}</div>
                <div class="author details-item"><span>Author:</span> {{authorsToShow}}</div>
                <div class="subtitle details-item"><span>Subtitle:</span> {{selectedBook.subtitle}}</div>
                <div class="lang details-item"><span>Language:</span> {{selectedBook.language}}</div>
                <div class="page-count details-item"><span>Page Count:</span> {{pageCountText}}</div>
                <div class="published-date details-item"><span>Published Date:</span> {{publishText}}</div>
                <div class="description details-item"><span>Description:</span> {{selectedBook.description}}</div>
            </div>
        </div>
        <add-review></add-review>
    </section>
    `,
    data() {
        return {
            selectedBook:null,
        }
    },
    created(){
        const bookId = this.$route.params.theBookId;
        bookService.getById(bookId)
            .then(foundBook=>{this.selectedBook = foundBook})
    },
    computed: {
        pageCountText() {
            let pageCount = this.selectedBook.pageCount;
            let pageCountString;
            if (pageCount > 500) {
                pageCountString = 'Long Reading ';
            } else if (pageCount > 200) {
                pageCountString = 'Decent Reading ';
            } else {
                pageCountString = 'Light Reading ';
            }
            pageCountString += pageCount + ' Pages'
            return pageCountString
        },
        authorsToShow() {
            return this.selectedBook.authors.join();
        },
        publishText(){
            const now = new Date().getUTCFullYear();
            const publishYear = this.selectedBook.publishedDate;
            const diff = now - publishYear;
            let oldBookStr = publishYear + ' Veteran Book';
            let newBookStr = publishYear + ' New!'
            if(diff > 10) return oldBookStr;
            else if(diff < 2) return newBookStr;
            else return publishYear;
        },

    },
    methods: {
        closeDetails() {
            this.$parent.isBookDetails = false;
            console.log(this.$parent)
        }
    },
    components:{
        addReview,
    }
}