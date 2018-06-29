import axios from 'axios'

const service = axios.create({     //  初始化 
    baseURL: 'http://api-dev',
    timeout: 5000
});

export default service