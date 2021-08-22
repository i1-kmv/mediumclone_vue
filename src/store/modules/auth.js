import auth from '../../api/auth'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true
        state.validationErrors = null
    },
    registerSucces(state, payload) {
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    registerFailed(state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

const actions = {
    register(context, credentials) {
        context.commit('registerStart')
        return new Promise(resolve => {
            auth.register(credentials)
                .then(response => {
                    context.commit('registerSucces', response.data.user)
                    resolve(response.data.user)
                })
                .catch(result => {
                    console.log(result)
                    context.commit('registerFailed', result.response.data.errors)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}