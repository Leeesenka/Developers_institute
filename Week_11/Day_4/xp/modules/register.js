const {db} = require('../config/db.js')


    const insertProduct = (username, password) =>{
        return db('login')
        .insert(username, password)
        .returning('*')
    }
 


module.exports = {
    insertProduct
}