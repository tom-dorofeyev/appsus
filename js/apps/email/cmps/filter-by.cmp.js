'use strict'

export default {
    template: `
    <section class="filter">
        <input type="text" v-model="filterBy.title" @input="emitFilter">
    </section>
    `,
    data(){
        return{
            filterBy:{
                title: '',
                isRead: null,
                timestamp:null
            }
        }
    },

    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        }
    }
}