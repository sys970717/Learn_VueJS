<template>
    <div id="signIn">
        <b-form>
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input v-model="form.email" id="inline-form-input-email" type="email" placeholder="아이디(이메일)" required></b-input>
            </b-input-group>

            <b-input-group prepend="#" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input v-model="form.password" id="inline-form-input-password" type="password" required placeholder="비밀번호"></b-input>
            </b-input-group>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
        </b-form>

        <button v-on:click="dispalyAlert()">SignIn</button>
    </div>
</template>

<script>
import Auth from '../testData/auth'
export default {
    data () {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    name: 'signIn',
    methods: {
        dispalyAlert: function () {
            var signInData = {
                email: this.form.email,
                password: this.form.password
            }
            let users = Auth.signIn(signInData)
        }
    }
}
</script>
