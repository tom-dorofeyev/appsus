'use strict'

import emailPreview from './email-preview.cmp.js'

export default{
    props:['emails'],
    template:`
        <section class="list-container">
            <email-preview v-for="currEmail in emails"
                            :key="currEmail.id"
                            :email="currEmail">
            </email-preview>
        </section>
    `,
    components:{
        emailPreview,
    }

}