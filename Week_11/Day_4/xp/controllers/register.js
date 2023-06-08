const {insertProduct

} = require('../modules/register.js');

const _insertProduct  = (req,res) =>{
    insertProduct(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({msg:err.message})
    })
}
module.exports = {

    _insertProduct,
 
}