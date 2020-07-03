const express = require('express')
const routes = require('./src/routes')
const nunjucks = require('nunjucks')
//const methodOverride = require('method-override')
const index = express()

//index.use(express.urlencoded( { extended: true } ))
index.use(express.static('public'))
//index.use(methodOverride('_method'))
index.use(routes)

index.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: index,
    autoescape: false,
    noCache: true,
})

index.listen(process.env.PORT || 5000, () => {
    console.log('server is running')
})