

export default {
    template: `
    <section class="book-filter flex column">
        <div class="name">
            search by name
            <input type="text" v-model="filterBy.txt" @input="emitFilter"/>
        </div>
        <div class="prices">
            price: from
            <input v-model="filterBy.lowestPrice" @input="emitFilter" class="min" type="number"/>
            to
            <input v-model="filterBy.highestPrice" @input="emitFilter" class="max" type="number"/>
        </div>
    </section>
    `,
    data(){
        return{
            filterBy:{
                txt:'',
                lowestPrice: 0,
                highestPrice: 1000000
            }
        }
    },
    methods:{
        emitFilter(){
            this.$emit('filtered', this.filterBy)
        }
    }

}