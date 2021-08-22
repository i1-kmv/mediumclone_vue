<template>
    <div class="auth-page">
        <div class="container-page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">
                        Sign In
                    </h1>
                    <p class="text-xs-center">
                        <router-link :to="{name: 'register'}">Have an account</router-link>
                    </p>
                    <MvCValidationErrors
                            v-if="validationErrors"
                            :validation-errors="validationErrors"
                    />
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input
                                    class="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    v-model="email"
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                    class="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    v-model="password"
                            />
                        </fieldset>
                        <button
                                class="btn btn-lg btn-primary pull-xs-right"
                                :disabled="isSubmitting"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import MvCValidationErrors from "../components/ValidationErrors"
    import {actionTypes} from "../store/modules/auth"

    export default {
        name: "McVLogin",
        components: {
            MvCValidationErrors
        },
        data() {
            return {
                email: '',
                password: '',
            }

        },
        computed: {
            isSubmitting() {
                return this.$store.state.auth.isSubmitting
            },
            validationErrors() {
                return this.$store.state.auth.validationErrors
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch(actionTypes.login, {
                    email: this.email,
                    password: this.password
                })
                    .then(() => {
                        this.$router.push({name: 'home'})
                    })
            }
        }
    }
</script>

<style scoped>

</style>