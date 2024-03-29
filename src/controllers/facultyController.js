const Faculty = require('../models/faculty')


const getCreateFaculty = (req, res) => {
    res.render('createFaculty.ejs')
}

const postCreateFaculty = async (req, res) => {
    let { faculty_name } = req.body;
    await Faculty.create({
        faculty_name: faculty_name,
    })
    res.redirect('/faculty')
}

const getAllFaculty = async (req, res) => {
    let results = await Faculty.find({});
    res.render('facultyHome.ejs', { listFaculties: results });
}

const getUpdateFaculty = async (req, res) => {
    const facultyId = req.params.id;
    let faculty = await Faculty.findById(facultyId)
    res.render('updateFaculty.ejs', { facultyEdit: faculty })
}

const postUpdateFaculty = async (req, res) => {
    let facultyId = req.body.facultyId
    let faculty_name = req.body.faculty_name
    await Faculty.updateOne({ _id: facultyId }, { faculty_name: faculty_name });

    res.redirect('/faculty');
}


const postDeleteFaculty = async (req, res) => {
    const facultyId = req.params.id;
    let faculty = await Faculty.findById(facultyId)
    res.render('deleteFaculty.ejs', { facultyEdit: faculty })
}

const postHandleRemoveFaculty = async (req, res) => {
    const id = req.body.id;
    await Faculty.deleteOne({
        _id: id
    });
    res.redirect('/faculty');
}
const getSortedFacultiesAscending = async (req, res) => {
    const sortedFaculty = await Faculty.find().sort({ faculty_name: 1 });
    res.render('facultyHome.ejs', { listFaculties: sortedFaculty });
};

const getSortedFacultiesDescending = async (req, res) => {
    const sortedFaculty = await Faculty.find().sort({ faculty_name: -1 });
    res.render('facultyHome.ejs', { listFaculties: sortedFaculty });
};


module.exports = {
    getCreateFaculty, postCreateFaculty, getAllFaculty, getUpdateFaculty, postUpdateFaculty, postDeleteFaculty, postHandleRemoveFaculty,
    getSortedFacultiesDescending, getSortedFacultiesAscending
}