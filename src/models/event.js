const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_name: {
        type: String,
        required: true
    },
    first_closure_date: {
        type: Date,
        required: true
    },
    final_closure_date: {
        type: Date,
        required: true
    }
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;