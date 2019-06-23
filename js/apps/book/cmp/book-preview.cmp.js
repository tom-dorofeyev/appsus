
export default {
    props: ['book'],
    template: `
        <router-link :to="bookUrl" class="book-preview">
            <li class="book-item flex column" :class="{selected: isBookSelected}" @click="selectedBook">
                <div class="book-image">
                    <img v-if="book.thumbnail" :src="book.thumbnail"/>
                <img v-else :src="img/loading-photo.gif"/>
                </div>
                <div class="book-name">{{book.title}}</div>
                <div class="price">Price: {{priceToShow}}</div>
            </li>
        </router-link>
    `,
    data(){
        return{
            price:this.book.listPrice,
            isBookSelected:this.book.isSelected,
        }
    },
    computed:{
        priceToShow(){
            let priceString = this.price.amount
            if(this.price.currencyCode === 'EUR'){
                priceString += ' €'
            } else if(this.price.currencyCode === 'USD'){
                priceString += ' $'
            } else if(this.price.currencyCode === 'ILS'){
                priceString += ' ₪'
            }
            return priceString
        },
        bookUrl(){
            return '/bookApp/' + this.book.id;
        }
    },
    methods:{
        selectedBook(){
            document.documentElement.scrollTop = 0;
            this.book.isSelected = true;
            this.$emit('getBook', this.book)
        },
    }
}