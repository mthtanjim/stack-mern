//login controller
module.exports = {
    login(req, res) {
        let name = req.body.name
        let email = req.body.email
        res.json({
            message: `Hello Mr ${name}, your email id is: ${email}`
        })
    }, 
    register(req, res) {
        let {name, email, password, confirmPassword } = req.body
        //veridation check of user data
        //Check for duplicated user
        //new user object
        //save database
        //response back with new dataaa
    }
}