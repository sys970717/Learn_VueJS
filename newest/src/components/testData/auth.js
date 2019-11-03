export default {
    signIn: ({email, password}) => {
        var trySignData = {email, password}
        // console.log(trySignData.email)
        var user = DEFINE_USERS.find(
            (index) => trySignData.email === index.email && trySignData.password === index.password
        )
        if (user === undefined) alert('아이디 혹은 비밀번호를 확인해주세요.')
        return user
    },
    componentWillMount: () => {
    },
    componentDidMount: () => {
        this.signIn()
    }
}

const DEFINE_USERS = [
    { email: 'test1@test.com', password: 'Test123!!', name: 'Seo' },
    { email: 'test2@test.com', password: 'Test123!!', name: 'yeong' },
    { email: 'test3@test.com', password: 'Test123!!', name: 'su' }
]
