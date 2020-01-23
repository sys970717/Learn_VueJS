<template>
    <div id="MainBoard">
        <div class="layout_board">
            <table class="list_board">
                <colgroup>
                    <col width="" />
                    <col width="" />
                    <col width="" />
                </colgroup>
                <thead>
                    <tr>
                        <th>분야</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>언어</td>
                        <td>영어</td>
                        <td>2019-10-07</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainBoard',
    data () {
        console.log('board')
    },
    created () {
        console.log(`board , ${this.$store.state}`)
        this.$http.get('http://localhost/board/view?id=teest',
            {
                header: {
                    'authorization': this.$store.state.accessToken
                }
            })
            .then(({data}) => {
                this.user = data.user
                this.accessLog = data.accessLog
            })
            .catch(() => { this.$store.dispatch('logout').then(() => this.$router.push('/')) })
    }
}
</script>

<style>
</style>
