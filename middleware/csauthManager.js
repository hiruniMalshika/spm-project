const csUsers = require('../models/csUserModel')

const authManager = async (req, res, next)=>{
    try{
        const csuser = await csUsers.findOne({
            _id: req.csuser.id
        })
        if(csuser.role === 0)
            return res.status(400).json({msg: "Manager resources access denied"})
        if(csuser.role === 2)
            return res.status(400).json({msg: "Manager resources access denied"})
        if(csuser.role === 3)
            return res.status(400).json({msg: "Manager resources access denied"})
        next()
        
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
}
module.exports = authManager