import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resoureceHost = 'http://localhost'

export default new Vuex.Store({
    state: {
        accessToken: null
    },
    getter: {

    },
    mutations: {
        // 상태 변이
        LOGIN (state, {accessToken}) {
            state.accessToken = accessToken
        },
        LOGOUT (state) {
            state.accessToken = null
        }
    },
    actions: {
        LOGIN ({commit}, {userEmail, userPw}) {
            return axios.post(`${resoureceHost}/user/login`, {'user_email': userEmail, 'user_pw': userPw})
                .then(({data}) => {
                    this.state.accessToken = data.user.authorization
                    console.log(this.state.accessToken)
                    this.commit('LOGIN', data.user.authorization)
                    // this.$http.defaults.headers.common['Authorization'] = data.user.authorization
                })
        },
        LOGOUT ({commit}) {
            commit('LOGOUT')
        }
    }
})
