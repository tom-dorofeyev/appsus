

export default {
    props: ['todos'],
    template:`
    <div class="todo-list">
        <div class="todo" v-for="currTodo in todos">
            <input v-if="currTodo.isDone" class="done" type="checkbox" checked>
            <input v-else type="checkbox">
            {{currTodo.text}}
        </div>
    </div>
    `,
    created(){
    },


}