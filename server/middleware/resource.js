module.exports = ()=>{
  const inflection = require('inflection')
  return async (req, res, next) => {
    let modelName = inflection.classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}