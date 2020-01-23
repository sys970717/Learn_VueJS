import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainBoard from '@/components/board/MainBoard'
import SignIn from '@/components/users/signIn'
import SignUp from '@/components/users/signUp'

Vue.use(Router)

// function requireAuth () {
//     return (from, to, next) => {
//         const isAuthneticated = false
//         if (isAuthneticated) return next()
//         console.log(to)
//         next(`/users/signIn?reReqUrl=me`)
//     }
// }

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
        // beforeEnter: requireAuth()
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
