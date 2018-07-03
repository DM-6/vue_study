// loggedIn 方法
// localStorage  taken：是否有  <--  判断是否登录 
// localStorage.getItem('token')
// localStorage.token

export default {
    loggedIn () {
      // localStorage.getItem('token')
      return localStorage.token
    },
    login(email, pass, cb){
        setTimeout(() => {
            if(email === 'joe@example.com' && pass === '11111111'){
                const token = Math.random().toString(36).substring(7);
                localStorage.getItem('token', token);
                cb(true)
            } else{
                cb(false)
            }
        }, 500)
    }
}