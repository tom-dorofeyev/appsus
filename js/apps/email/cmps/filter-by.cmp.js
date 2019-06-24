'use strict'

export default {
    props: ['emails'],
    template: `
    <section class="filter-container">
        <div class="search-box">
            <input class="search-box-input" placeholder="Search Mail" type="text" @keyup.enter="listByText" v-model="filterTxt" @input="autoCompleteForDisplay">
        <select @input="listByOption" class="filter-options">
                <option v-for="filterWord in filterOptions" :value="filterWord">
                    {{filterWord}}
                </option>
        </select>
            <ul class="search-options-list">
                <li class="search-single-option" v-for="listItem in emailList" @click="listByText">{{listItem.title}}</li>
            </ul>
        </div>
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
        listByText(ev) {
            this.$emit('set-filter', ev.target.innerText);
        },
        autoCompleteForDisplay() {
            if (this.filterTxt) {
                this.emailList = this.emails.filter(email => {
                    return email.title.toUpperCase().includes(this.filterTxt.toUpperCase())
                })
            } else this.emailList = [];
        },
        listByOption(ev) {
            this.$emit('set-filter', ev.target.value);
        }
    }
}