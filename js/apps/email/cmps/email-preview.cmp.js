'use strict'

export default {
    props: ['email'],
    template: `
    <section class="email-preview-container flex">
        <input type="checkbox" :name="email.id" @click="updateChecked">
        <input class="star" type="checkbox" :name="email.id" checked>
        <div class="preview-text">
            <div class="from">{{email.from}}</div>
            <div class="title">{{email.title}}</div>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        updateChecked(ev) {
            const emailId = ev.target.name;
            this.$emit('update-marked', emailId)
        }
    },
}