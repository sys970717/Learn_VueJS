import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resoureceHost = 'http://localhost:8080'

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
        LOGIN ({commit}, {email, password}) {
            return axios.post(`${resoureceHost}/login`, {email, password})
                .then(({data}) => commit('LOGIN', data))
        },
        LOGOUT ({commit}) {
            commit('LOGOUT')
        }
    }
})
