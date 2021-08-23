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
    registerFailed:'[auth] registerFailed',

    loginStart: '[auth] loginStart',
    loginSuccess:'[auth] loginSuccess',
    loginFailed:'[auth] loginFailed'
}

export const getterTypes = {
    currentUser: '[auth] currentUser',
    isLoggedIn: '[auth] isLoggedIn',
    isAnonymous: '[auth] isAnonymous'
}

const getters = {
    [getterTypes.currentUser]: state => {
        return state.currentUser
    },
    [getterTypes.isLoggedIn]: state => {
       return Boolean(state.isLoggedIn)
    },
    [getterTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    }
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
    },

    [mutationTypes.loginStart](state) {
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.loginSuccess](state, payload) {
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    [mutationTypes.loginFailed](state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

export const actionTypes = {
    register: '[auth] register',
    login: '[auth] login'
}

const actions = {
    [actionTypes.register](context, credentials) {
        context.commit(mutationTypes.registerStart)
        return new Promise(resolve => {
            auth.register(credentials)
                .then(response => {
                    context.commit(mutationTypes.registerSuccess, response.data.user)
                    setItem('accessToken', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(result => {
                    console.log(result)
                    context.commit(mutationTypes.registerFailed, result.response.data.errors)
                })
        })
    },

    [actionTypes.login](context, credentials) {
        context.commit(mutationTypes.loginStart)
        return new Promise(resolve => {
            auth.login(credentials)
                .then(response => {
                    context.commit(mutationTypes.loginSuccess, response.data.user)
                    setItem('accessToken', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(result => {
                    console.log(result)
                    context.commit(mutationTypes.loginFailed, result.response.data.errors)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}