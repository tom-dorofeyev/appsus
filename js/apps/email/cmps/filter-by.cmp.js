'use strict'

export default {
    props: ['emails'],
    template: `
    <section class="filter flex">
        <div class="search-box">
            <input type="text" v-model="filterTxt" @input="autoCompleteForDisplay">
            <ul>
                <li v-for="listItem in emailList" @click="emitFilter">{{listItem.title}}</li>
            </ul>
        </div>
        <select @input="listForDisplay" class="filter-options">
                <option v-for="filterWord in filterOptions" :value="filterWord">
                    {{filterWord}}
                </option>
        </select>
    </section>
    `,
    data() {
        return {
            filterTxt: '',
            emailList: [],
            filterOptions: ['all', 'read', 'unread'],
        }
    },
    computed: {

    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterTxt);
        },
        autoCompleteForDisplay() {
            if (this.filterTxt) {
                this.emailList = this.emails.filter(email => {
                    return email.title.toUpperCase().includes(this.filterTxt.toUpperCase())
                })
            } else this.emailList = [];
        },
        listForDisplay(ev) {
            this.$emit('set-filter', ev.target.value);
        }
    }
}