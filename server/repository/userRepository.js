const User = require('../models/userModel')

class userRepository {
    async createUser(userData) {
        const user = new UserModel(userData);
        await user.save();
        return user;
    } 
}

module.exports = new userRepository();