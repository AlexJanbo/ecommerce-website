const authService = require('../services/authService')

signup = async (req, res) => {
    try {
        const user = await authService.signup(req.body)
        res.status(201).json({ user: user.username, message: "User created successfully"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    signup
}