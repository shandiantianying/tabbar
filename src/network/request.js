import axios from 'axios'


export  function request(config){
    const instance = axios.create({
        baseURL:'https://www.lagou.com/',
        timeout:5000,
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        }
    })
    return instance(config)
}
// export function request(config,success,failure){
//     const instance = axios.create({
//         baseUrl:'',
//         timeout: 5000
//     })
//     instance(config).then(res =>{
//         success(res)
//     }).catch(err=>{
//         failure(err)
//     })
 
// }