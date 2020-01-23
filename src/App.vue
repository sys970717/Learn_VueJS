<template>
    <div id="app">
        <div id="header">
            <topHeader />
        </div>
        <img src="./assets/logo.png">
        <router-view/>

        <div id="footer">
            <baseFooter />
        </div>
    </div>
</template>

<script>
import TopHeader from './components/common/topHeader.vue'
import BaseFooter from './components/common/footer.vue'
import TodoList from './components/common/todoItem.vue'

export default {
    name: 'App',
    components: {
        'topHeader': TopHeader,
        'baseFooter': BaseFooter,
        'todo-item': TodoList
    },
    data () {
        return {
            groceryList: [
                {id: 0, text: 'vegetables'},
                {id: 1, text: 'Cheese'}
            ]
        }
    },
    created: function () {
        // console.log('create')
    },
    mounted: function () {
        // console.log('mounted')
    },
    watch: {

    },
    methods: {
        signDepth: function () {
            console.log('gg')
        }
    },
    computed: {
        changeTodoList: function () {
            console.log('computed access')
            return this.groceryList
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
