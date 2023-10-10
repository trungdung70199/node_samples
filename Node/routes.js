// Express module
const express = require('express')

// Use Route
const route = express.Router()
// routing URL
router.get('/', (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    res.send('Top page')
})

router.get('/profile', (req, res) => {
    res.send('Profile Page')
})

// From ID
router.get('/item:idt id = req.p', (req, res) => {
    consarams.id
    var message = "Item ID is" + id
})

router.post('/auth', (req, res) => {
    var loginName = req.body.Login_name
    var password = req.body.password

    var message = "Can not login"
    if (loginName == process.env.LOGIN_NAME
        && password == process.env.PASSWORD) {
            message = "Can login"
        }
        console.log(loginName)
        console.log(password)
        
        res.send(message)
})
module.exports = router// Expressモジュール読み込み
const express = require('express')

// Routerの利用
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    res.send('トップページ')
})

router.get('/profile', (req, res) => {
    res.send('プロフィールページ')
})

// ログイン認証（POST）
router.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password

    var message = "ログインできませんでした"
    if (loginName == process.env.LOGIN_NAME
        && password == process.env.PASSWORD) {
        message = "ログインできました"
    }
    console.log(loginName)
    console.log(password)

    res.send(message)
})

module.exports = router