module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const router = express.Router({
    mergeParams: true
  })

  const inflection = require('inflection')


  router.post('/', async (req, res) => {
    // console.log(req.body)
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await req.Model.findBkyIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.get('/',
    // async(req,res,next)=>{findById
    //   const token = String(req.headers.authorization || '').split(' ').pop()
    //   const { id } = jwt.verify(token,app.get('secret'))
    //   req.user = await AdminUser.findById(id)
    //   await next()
    // },
    async (req, res) => {
      const queryOptions = {}
      if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'

      } else if (req.Model.modelName === 'Hero') {
        queryOptions.populate = 'categories'
      }

      const items = await req.Model.find().setOptions(queryOptions).limit(10)
      res.send(items)
    })

  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  //资源列表
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    let modelName = inflection.classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    // req.Model.modelName = modelName
    next()
  }, router)

  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
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
    }).select('+password')

    if (!user) {
      return res.status(422).send({
        message: '用户不存在'
      })
    }

    //2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    if (!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }

    //3.返回token

    const token = jwt.sign({id: user._id}, app.get('secret'))//生成token，第一个参数是数据，第二个是密钥

    res.send({token})
  })
}