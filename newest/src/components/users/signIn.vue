<template>
    <div id="signIn">
        <p>{{ message }}</p>
        <b-form @submit.prevent="dispalyAlert()">
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input v-model="form.email" id="inline-form-input-email" type="email" placeholder="아이디(이메일)" required></b-input>
            </b-input-group>

            <b-input-group prepend="#" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input v-model="form.password" id="inline-form-input-password" type="password" required placeholder="비밀번호"></b-input>
            </b-input-group>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
            <button>SignIn</button>
        </b-form>

    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                email: '',
                password: ''
            },
            message: 'HID'
        }
    },
    name: 'signIn',
    methods: {
        dispalyAlert: function () {
            // console.log(this.form.email)
            const signInData = {
                userEmail: this.form.email,
                userPw: this.form.password
            }
            this.$store.dispatch('LOGIN', signInData)
                .then(() => this.redirect())
                .catch(({message}) => {
                    this.msg = message
                })
        }
    }
}
</script>
