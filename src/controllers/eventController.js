const Event = require('../models/event')


const getCreateEvent = (req, res) => {
    res.render('create_event.ejs')
}

const postCreateEvent = async (req, res) => {
    let { event_name, first_closure_date, final_closure_date } = req.body;
    await Event.create({
        event_name: event_name,
        first_closure_date: first_closure_date,
        final_closure_date: final_closure_date
    })
    res.redirect('/event')
}

const getAllEvent = async (req, res) => {
    const results = await Event.find({});
    res.render('eventHome.ejs', { listEvents: results });
}

const getUpdateEvent = async (req, res) => {
    const eventId = req.params.id;
    let event = await Event.findById(eventId)
    res.render('updateEvent.ejs', { eventEdit: event })
}
const postUpdateEvent = async (req, res) => {
    let eventId = req.body.eventId
    let event_name = req.body.event_name
    let first_closure_date = req.body.first_closure_date
    let final_closure_date = req.body.final_closure_date


    await Event.updateOne({ _id: eventId }, { event_name: event_name, first_closure_date: first_closure_date, final_closure_date: final_closure_date });

    res.redirect('/event');
}

const postDeleteEvent = async (req, res) => {
    const eventId = req.params.id;
    let event = await Event.findById(eventId)
    res.render('deleteEvent.ejs', { eventEdit: event })
}

const postHandleRemoveEvent = async (req, res) => {
    const id = req.body.id;
    await Event.deleteOne({
        _id: id
    });
    res.redirect('/event');
}

const getSortedEventsAscending = async (req, res) => {
    const sortedEvents = await Event.find().sort({ event_name: 1 });
    res.render('eventHome.ejs', { listEvents: sortedEvents });
};

const getSortedEventsDescending = async (req, res) => {
    const sortedEvents = await Event.find().sort({ event_name: -1 });
    res.render('eventHome.ejs', { listEvents: sortedEvents });
};


module.exports = {
    getCreateEvent, postCreateEvent, getAllEvent, getUpdateEvent, postUpdateEvent, postDeleteEvent, postHandleRemoveEvent, getSortedEventsAscending,
    getSortedEventsDescending
}