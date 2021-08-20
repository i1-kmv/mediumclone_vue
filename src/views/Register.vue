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
                    VALIDATION ERRORS
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" plaseholder="Username"/>
                        </fieldset>
                    </form>

                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" plaseholder="EMAIL"/>
                        </fieldset>
                    </form>
                    <button class="btn btn-lg btn-primary pull-xs-right">
                        Sign Up
                    </button>

                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input type="password" class="form-control form-control-lg" plaseholder="Password"/>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "McVRegister",
        methods: {
            onSubmit() {

            }
        }
    }
</script>

<style scoped>

</style>