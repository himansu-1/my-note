
const jwt = require("jsonwebtoken")
const JWT_SIGN = "Himansu@2001"


const fetchUser=async (req,res,next)=>{
    const token =  req.header("auth-token")
    try {
    if (!token) {
        return res.status(401).send({ arrors: "Token Problem"})
    }
        const data = jwt.verify(token,JWT_SIGN)
        req.user= data.user
        next()
    } catch (error) {
        res.status(500).send("Some Error Occured..")
        console.log(error)
        
    }

}

module.exports = fetchUser