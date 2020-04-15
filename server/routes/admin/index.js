module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')//错误处理
  const router = express.Router({
    mergeParams: true
  })

  const inflection = require('inflection')

  //登陆校验中间件
  const authMiddleware = require('../../middleware/auth')()

  //添加资源
  router.post('/', async (req, res) => {
    // console.log(req.body)
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  //更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  //获取资源
  router.get('/',

    async (req, res) => {
      const queryOptions = {}
      if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'

      } else if (req.Model.modelName === 'Hero') {
        queryOptions.populate = 'categories'
      }

      const items = await req.Model.find().setOptions(queryOptions).limit(50)
      res.send(items)
    })

  //根据id获取资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  //删除资源
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  //资源中间件
  const resourceMiddleware = require('../../middleware/resource')()
  //资源列表
  app.use('/admin/api/rest/:resource', authMiddleware, resourceMiddleware, router)

  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  app.post('/admin/api/upload', authMiddleware,upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3001/uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    const {username,password} = req.body

    //1.根据用户名找用户
    const AdminUser = require('../../models/AdminUser')

    const user = await AdminUser.findOne({
      username: username
    }).select('+password')//用户模型

    assert(user,422,'用户不存在')
    // if (!user) { //用户不存在
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }

    //2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid,422,'密码错误')
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }

    //3.返回token
    const token = jwt.sign({id: user._id}, app.get('secret'))//生成token，第一个参数是数据，第二个是密钥
    res.send({token})
  })

  app.use(async(err,req,res,next)=>{
    res.status(err.status || 500).send({
      message:err.message
    })
  })

}

