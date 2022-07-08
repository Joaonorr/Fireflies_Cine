// Reponsável pelo modelo da classe User

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, maxlength: 50, required: false },
    email: { type: String, maxlength: 30, required: false },
    password: { type: String, required: false },
    tokens: [{token: { type: String, required: false },},],
    },
    {
        timestamps: true,
        collection: 'users',
    }
);

// 
userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.method.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret');
    user.tokens = user.token.concat({ token });
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
        throw new Error({error: 'Unable to login'});
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new Error({error: 'Unable to login'});
    }

    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
