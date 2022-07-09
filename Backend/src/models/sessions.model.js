// Reponsável pelo modelo da classe Session

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    sessionMovie: {type: String, maxlength: 50, required: true},
    time: {type: String, maxlength: 50, required: true},
    capacity: {type: Number, maxlength, required: true},
    currentCapacity: {type: Number, default: 0, required: false},
    bought: [
        {type: String, maxlength:2}
    ],
    room: {type: String, require: true}
    },
    {
        timestamps: true,
        collection: 'sessions',    
    }
);

sessionSchema.statics.findSchemaById = async (id) => {
    const session = await Schema.findOne({id});
    console.log(session);
    if (!session) {
        throw new Error({error: 'Não foi possível achar o filme!'})
    }
    return session;
};

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;