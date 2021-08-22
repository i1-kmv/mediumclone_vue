<template>
    <div class="auth-page">
        <div class="container-page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">
                        Sign Up
                    </h1>
                    <p class="text-xs-center">
                        <router-link :to="{name: 'login'}">Need an account</router-link>
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
                                    placeholder="Username"
                                    v-model="username"
                            />
                        </fieldset>
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
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import MvCValidationErrors from "../components/ValidationErrors";
    export default {
        name: "McVRegister",
        components: {
            MvCValidationErrors
        },
        data () {
            return{
                email: '',
                password: '',
                username: ''
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
                console.log('subbmittedform')
                this.$store.dispatch('register', {
                    email: this.email,
                    username: this.username,
                    password: this.password})
                    .then(user => {
                        console.log('successfully register user', user)
                        this.$router.push({name:'home'})
                })
            }
        }
    }
</script>

<style scoped>

</style>