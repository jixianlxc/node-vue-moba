module.exports = app => {
  const router = require('express').Router()
  const Article = require('mongoose').model('Article')
  const Category = require('mongoose').model('Category')

  //生成一些新闻以供测试
  router.get('/news/init',async(req,res)=>{
    const parent = await Category.findOne({name:'新闻分类'})
    const cats = await Category.find().where({parent:parent}).lean()
    const newsTitle = ["《王者荣耀》皮肤团2020年春季招新公告", "吕布-天魔缭乱翻新曝光，霸气风范，魔王归来！", "体验服爆料丨廉颇未老，尚能战斗！老将廉颇重返巅峰", "新皮肤爆料丨拔刀斩恶魂！橘右京新装登场~", "豪横！王者荣耀英雄主打歌完整歌单霸气登陆酷狗！", "4月5日开服及奖励通知", "4月14日体验服停机更新公告", "4月14日全服不停机更新公告", "4月13日体验服不停机更新公告", "4月11日体验服停机更新公告", "天魔缭乱限时返场 多重好礼等你来领", "橘右京全新史诗皮肤上架 SNK皮肤齐聚峡谷福利大放送", "【预告】荣耀中国节·轻风戏纸鸢，参与必得纸鸢回城特效（永久）", "参与“S19战令集结号”，赢80级直升经验大礼", "【镜界诞生 见证觉醒】活动公告", "关于责成TS俱乐部就欠薪问题进行说明的通知", "《一招即浪》第二期：逆天牛魔王最浪打法，城市赛教你一招制敌", "为战队争夺荣誉！城市联赛战队赛通道报名开启！", "高校联赛分站赛即将打响 今年又有多少好玩的活动值得期待？", "《一招即浪》第一期：白起强势归来，教你如何化身“边路杀神”"]
    const newsList = newsTitle.map(title=>{
      const randomCats = cats.slice(0).sort((a,b)=>Math.random() - 0.5)//随机将分类排序
      return{
        categories:randomCats.slice(0,2),
        title: title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)
    res.send(newsList)
  })

  //web端获取新闻数据
  router.get('/news/list',async(req,res)=>{
    const parent = await Category.findOne({//获取新闻分类下的四个分类
      name:'新闻分类'
    })
    const cats = await Category.aggregate([
      {$match:{parent:parent._id}},//match方法返回符合要求的查询结果
      {
        $lookup:{//lookup方法来连接其他的集合
          from:'articles',
          localField:'_id',
          foreignField:'categories',
          as:'list'
        }
      },
      {
        $addFields:{//增加字段。由于newsList已存在,实际上是更新字段
          list:{$slice:['$list',5]}//将字段newsList取出前5个
        }
      }
    ])
    const catIdList = cats.map(i=>(i._id))//查出新闻分类下四个分类的Id
    //查找热门分类
    cats.unshift({
      name:'热门',
      list:await Article.find().where({categories:{$in:catIdList}}).populate('categories').limit(5).lean()
    })

    //将每个分类下面的newsList加上categoryName字段，同该分类的name
    cats.map(cat=>{
        cat.list.map(news=>{
          const categoryName = (cat.name==='热门')? news.categories[0].name : cat.name
          news.categoryName = categoryName//如果分类是‘热门’，就取该条新闻分类的第一个分类
          return news
        })
    })

    res.send(cats)
  })

  app.use('/web/api',router)
}
