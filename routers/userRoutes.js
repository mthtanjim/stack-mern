const router = require('express').Router()
const {login} = require('../controllers/userController')

//registration 
//localhost:4000/api/users/registrer
router.post('/register', (req, res) => {

})

//login router
//localhost:4000/api/users/login
router.post('/login', login)

module.exports = router