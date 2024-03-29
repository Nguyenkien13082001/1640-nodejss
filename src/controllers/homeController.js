const connection = require('../config/database')
const { getAllAdminService, createAdminService } = require('../services/homeService')
const Admin = require('../models/admin')


const getCreatePage = (req, res) => {
    res.render('createAdmin.ejs')
}

const postCreateAdmin = async (req, res) => {
    let { username, password, role } = req.body
    let adminData = {
        username,
        password,
        role
    }
    await createAdminService(adminData)
    res.redirect('/admin')
}

const getHomePage = async (req, res) => {
    // let results = await getAllAdminService();
    res.render('home.ejs');
}

const AdminManage = async (req, res) => {
    let results = await getAllAdminService();
    res.render('admin.ejs', { listAdmins: results });
}

const getUpdatePage = async (req, res) => {
    const adminId = req.params.id;
    let admin = await Admin.findById(adminId)
    res.render('updateAdmin.ejs', { adminEdit: admin })
}

const postUpdateAdmin = async (req, res) => {
    let adminId = req.body.adminId
    let username = req.body.username
    let password = req.body.password
    let role = req.body.role

    await Admin.updateOne({ _id: adminId }, { username: username, password: password, role: role })

    // console.log(">>>email = ", email, "name = ", name, "city = ", city, "userId = ", id)
    // let {email, name, city} = req.body
    res.redirect('/admin')
}

const postHandleRemoveAdmin = async (req, res) => {
    const id = req.body.id; // Sử dụng req.body.adminId
    // await deleteUserByID(id)
    await Admin.deleteOne({
        _id: id
    });
    res.redirect('/admin');

}
const postDeleteAdmin = async (req, res) => {
    const adminId = req.params.id;
    let admin = await Admin.findById(adminId)
    res.render('delete.ejs', { adminEdit: admin })
}

const getSortedAdminsAscending = async (req, res) => {
    const sortedAdmins = await Admin.find().sort({ username: 1 });
    res.render('home.ejs', { listAdmins: sortedAdmins });
};

const getSortedAdminsDescending = async (req, res) => {
    const sortedAdmins = await Admin.find().sort({ username: -1 });
    res.render('home.ejs', { listAdmins: sortedAdmins });
};

module.exports = {
    getHomePage, AdminManage, postCreateAdmin, getCreatePage, getUpdatePage, postUpdateAdmin, postHandleRemoveAdmin, postDeleteAdmin, getSortedAdminsAscending,
    getSortedAdminsDescending
}