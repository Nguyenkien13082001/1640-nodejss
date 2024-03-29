const express = require('express')
const { getHomePage,AdminManage, postCreateAdmin, getCreatePage, getUpdatePage, postUpdateAdmin, postHandleRemoveAdmin, postDeleteAdmin
    , getSortedAdminsAscending, getSortedAdminsDescending } = require('../controllers/homeController')
const { requireLogin, loginHomePage, postLoginHomePage } = require('../controllers/loginController')
const { getCreateEvent, postCreateEvent, getAllEvent, getUpdateEvent, postUpdateEvent, postHandleRemoveEvent, postDeleteEvent,
    getSortedEventsAscending, getSortedEventsDescending } = require('../controllers/eventController')
const { getCreateFaculty, postCreateFaculty, getAllFaculty, getUpdateFaculty, postUpdateFaculty, postHandleRemoveFaculty,
    postDeleteFaculty, getSortedFacultiesAscending, getSortedFacultiesDescending } = require('../controllers/facultyController')
const router = express.Router()


router.get('/', requireLogin)
router.get('/login', loginHomePage)
router.post('/login', postLoginHomePage)

router.get('/admin', getHomePage)
router.get("/admin_panel", AdminManage)
router.get('/create', getCreatePage)
router.post('/create-admin', postCreateAdmin)
router.get('/update/:id', getUpdatePage)
router.post('/update-admin', postUpdateAdmin)
router.post('/delete-admin', postHandleRemoveAdmin)
router.post('/delete-admin/:id', postDeleteAdmin)
router.get('/admin/sort/asc', getSortedAdminsAscending)
router.get('/admin/sort/desc', getSortedAdminsDescending)

router.get('/event', getAllEvent)
router.get('/event/create', getCreateEvent)
router.post('/event/create-event', postCreateEvent)
router.get('/event/update/:id', getUpdateEvent)
router.post('/event/update-event', postUpdateEvent)
router.post('/event/delete-event', postHandleRemoveEvent)
router.post('/event/delete-event/:id', postDeleteEvent)
router.get('/event/sort/asc', getSortedEventsAscending)
router.get('/event/sort/desc', getSortedEventsDescending)

router.get('/faculty', getAllFaculty)
router.get('/faculty/create', getCreateFaculty)
router.post('/faculty/create-faculty', postCreateFaculty)
router.get('/faculty/update/:id', getUpdateFaculty)
router.post('/faculty/update-faculty', postUpdateFaculty)
router.post('/faculty/delete-faculty', postHandleRemoveFaculty)
router.post('/faculty/delete-faculty/:id', postDeleteFaculty)
router.get('/faculty/sort/asc', getSortedFacultiesAscending)
router.get('/faculty/sort/desc', getSortedFacultiesDescending)


module.exports = router