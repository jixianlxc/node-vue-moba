module.exports = ()=>{
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')//错误处理
  return async(req,res,next)=>{
    const AdminUser = require('../models/AdminUser')
    const token = String(req.headers.authorization || '').split(' ').pop()//获取token
    assert(token,401,'请先登录')
    const { id } = jwt.verify(token,req.app.get('secret'))//校验token传过来的id是多少
    assert(id,401,'无效的登陆信息')
    req.user = await AdminUser.findById(id)
    assert(req.user,401,'请先登陆')
    await next()
  }
}