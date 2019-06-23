' use strict'

export default {
    props:['note'],
    template: `
    <section class="note-container">{{note}}</section>
    `,
    created(){
        console.log(this.note)
    }
}