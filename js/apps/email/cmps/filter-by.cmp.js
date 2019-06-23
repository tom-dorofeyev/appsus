'use strict'

export default {
    props: ['emails'],
    template: `
    <section class="filter-container">
        <div class="search-box">
            <input type="text" @keyup.enter="listByText" v-model="filterTxt" @input="autoCompleteForDisplay">
            <ul>
                <li v-for="listItem in emailList" @click="listByText">{{listItem.title}}</li>
            </ul>
        </div>
        <select @input="listByOption" class="filter-options">
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