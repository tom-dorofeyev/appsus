
import bookPreview from './book-preview.cmp.js'

export default{
    template:`
    <section class="book-list">
        <ul class="flex wrap">
            <book-preview
                v-for="currentBook in books" v-bind:key="currentBook.id"
                :book="currentBook" @getBook="selectBook">
            </book-preview>
        </ul>
    </section>
    `,
    props:['books'],
    data(){
        return{
        }
    },
    computed:{

    },
    methods:{
        selectBook(selectedBook){
            this.books.forEach(book=>{book.isSelected=false})
            this.$emit('getBook', selectedBook)
        }, 
    },
    components:{
        bookPreview,
    }
}