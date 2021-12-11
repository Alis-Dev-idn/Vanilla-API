const User = require('../services/user.service');

const emailValidation = async (req, res) => {
    const token     = req.params.id
    const codeUser  = req.body.code;
    if(!codeUser) return res.status(400).json({message: 'token required!'})
    try{
        const cekStatus = await User.getUserByToken(token);
        try{
            if(!cekStatus) return res.status(404).json({message: 'account is active!'});
            // const code = await token.getCode(token);
            if(codeUser !== code) return res.status(403).json({message: 'code is wrong!'});
            try{
                // await User.updateStatus('true', '');
                res.status(200).json({message: 'account is active now!'});
            }catch (err){
                res.status(500).json({message: err.message});
            }
        }catch (err){
            res.status(500).json({message: err.message});
        }
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {emailValidation};