
import keepService from '../services/keep-service.js'
import eventBus, {UPDATE_NOTES} from '../../../event-bus.js'

export default {
    props: ['todos'],
    template:`
    <div class="todo-list">
        <div class="todo" v-for="currTodo in todos" :id="currTodo.id" @click="todoDone(currTodo)">
            <input v-if="currTodo.isDone" :id="currTodo.id" class="done" type="checkbox" checked>
            <input v-else type="checkbox" :id="currTodo.id">
            {{currTodo.text}}
        </div>
    </div>
    `,
    created(){
    },
    methods:{
        todoDone(todo){
            keepService.updateTodoStatus(todo);
            eventBus.$emit(UPDATE_NOTES, todo)
        }
    }


}