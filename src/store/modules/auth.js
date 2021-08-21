import auth from '../../api/auth'

const state = {
    isSubmitting: false
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true
    },
    registerSucces(state) {
        state.isSubmitting = false
    },
    registerFailed(state) {
        state.isSubmitting = false
    }
}

const actions = {
    register(context, credentials) {
        context.commit('registerStart')
        return new Promise(resolve => {
            auth.register(credentials)
                .then(response => {
                    console.log(response)
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