const express = require('express');
const User = require('../model/User');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    User.create({ username, email, password }).then(user => {
        res.json({ message: 'Signup successful' });
    }).catch(
        error => {
            res.json({
                message: 'Signup failed'
            })
        }
    )
});

// Login route
router.post('/login', async (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            res.json({
                message: 'Login successful',
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                }
            });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    }).catch(err => {
        res.status(500).json({ message: 'Server error' });
    });
});
module.exports = router;