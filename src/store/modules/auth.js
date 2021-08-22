import auth from '../../api/auth'
import {setItem} from '../../helpers/persistanceStorage'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

export const mutationTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess:'[auth] registerSuccess',
    registerFailed:'[auth] registerFailed'
}

const mutations = {
    [mutationTypes.registerStart](state) {
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.registerSuccess](state, payload) {
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    [mutationTypes.registerFailed](state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

export const actionTypes = {
    register: '[auth] register'
}

const actions = {
    [actionTypes.register](context, credentials) {
        context.commit(mutationTypes.registerStart)
        return new Promise(resolve => {
            auth.register(credentials)
                .then(response => {
                    context.commit(mutationTypes.registerSuccess, response.data.user)
                    setItem('acessTokek', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(result => {
                    console.log(result)
                    context.commit(mutationTypes.registerFailed, result.response.data.errors)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}