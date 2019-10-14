import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainBoard from '@/components/board/MainBoard'
import SignIn from '@/components/users/signIn'
import SignUp from '@/components/users/signUp'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/board',
        name: 'MainBoard',
        component: MainBoard
    },
    {
        path: '/users/signIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/users/signUp',
        name: 'SignUp',
        component: SignUp
    }]
})
