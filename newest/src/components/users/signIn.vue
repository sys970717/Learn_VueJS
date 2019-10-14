<template>
    <div id="signIn">
        <b-form>
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inline-form-input-username" placeholder="아이디(이메일)"></b-input>
            </b-input-group>

            <b-input-group prepend="#" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inline-form-input-password" placeholder="비밀번호"></b-input>
            </b-input-group>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'signIn'
}
</script>
