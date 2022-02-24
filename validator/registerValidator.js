const validator = require('validator')

const validate = user => {
    let error = {}

    if (!user.name) {
        error.name = 'please provide your name'
    }

    if(!user.email) {
        error.email = 'please provide your Email'
    } else if (!validator.isEmail(user.email)) {
        error.email = "please Provide a Valid Email"
    }

    if(!user.password) {
        error.password = "Please profivde passwrod"
    } else if (user.password > 6) {
        error.password = "password must be getter or equal 6 charecter"
    }

}