
import emailService from '../services/email.service.js'

export default{
    template:`
    <section class="email-app">
        hello im an email app
        <div>{{emails}}</div>
        
        <router-link to="/">go HOme</router-link>
    </section>
    `,
    data(){
        return{
            emails: []
        }
    },
    created(){
        emailService.query()
            .then(res=>this.emails = res);
    }
}