'use strict'

export default {
    props: ['emails'],
    template: `
    <section class="filter">
        <input type="text" v-model="filterBy.title" @input="listForDisplay">
        <ul>
            <li v-for="listItem in emailList">{{listItem.title}}</li>
        </ul>
    </section>
    `,
    data(){
        return{
            filterBy:{
                title: '',
                isRead: null,
                timestamp:null
            },
            emailList: [],
        }
    },
    computed:{

    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        },
        listForDisplay(){
            if(this.filterBy.title){
                this.emailList = this.emails.filter(email=>{
                    return email.title.toUpperCase().includes(this.filterBy.title.toUpperCase())
                })
            } else this.emailList = [];
        }
    }
}