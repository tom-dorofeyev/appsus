

export default {
    props: ['todos'],
    template:`
    <div class="todo-list">
        <div class="todo" v-for="currTodo in todos"> {{currTodo.text}}</div>
    </div>
    `,
    created(){
        console.log(this.todos)
    },

}