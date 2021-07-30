const {userModel} = require('../database');

module.exports = {
    getAll: ()=>{
        return userModel.findAll()
    },
    create: (user)=>{
        return userModel.create(user)
    }
}
