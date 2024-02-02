const connect = require("../db")

const User = require("../models/user")
const TestingJson = require("./testing.json")
connect()

const start = async () => {
    try {
        await User.create({
            name:TestingJson.name,
            password:TestingJson.password,
            email:TestingJson.email,
        })
        .then(console.log(TestingJson))
        .catch(err=>console.log(err))



        console.log("success");
            // User.create(res.body)
            // .then(User => {
            //     res.json(User)
            //     console.log(req.body)
            // }).catch(err => {
            //     console.log(err)
            //     res.json({ error: 'Please enter a unique value for email', message: err.message })
            // })

    } catch (error) {
        console.log(error)
    }
}
start()

// module.exports = router
