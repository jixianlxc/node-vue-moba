import axios from 'axios'
import Vue from 'vue'


const http = axios.create({
  baseURL:'http://localhost:3001/admin/api'
})

http.interceptors.request.use(config=>{
    config.headers.Authorization =  `Bearer ${localStorage.token}`
    return config
  },err=>{
    return Promise.reject(err)
  }
)

http.interceptors.response.use(res => {
  return res
  }, 
  err => {  
    console.log(err.response)
    if(err.response.data.message){
      console.log(err)
      //elementUI的提示框$message
      Vue.prototype.$message({
        type:'error',
        message: err.response.data.message
      })
    }
    return Promise.reject(err)
  }
)

export default http