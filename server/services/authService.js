const userRepository = require('../repository/userRepository')
const bcrypt = require('bcryptjs')

class authService {
    async signup(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await userRepository.createUser({ ...userData, password: hashedPassword});
        return user;
    }
}

module.exports = new authService();