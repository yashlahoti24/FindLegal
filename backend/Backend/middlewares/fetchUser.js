const jwt = require("jsonwebtoken");
const JWT_SECRET = 'Tanmayisagoodboy'

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token) res.status(401).send({error:"please authenticate using a valid token"});
   try {
    const string = jwt.verify(token,JWT_SECRET);
    req.user = string.user;
    console.log(req.user + ' fetchuser')
    next();
   }catch(err){
    res.status(500).json({err:err.message});
   }
}
module.exports = fetchuser
//for authorisation