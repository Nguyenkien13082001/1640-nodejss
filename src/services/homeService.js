const { model } = require('mongoose')
const Admin = require('../models/admin')

const createAdminService = async (adminData) => {
    try {
        let result = await Admin.create({
            username: adminData.username,
            password: adminData.password,
            role: adminData.role
        })
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}
const getAllAdminService = async () => {
    try {
        let result = await Admin.find({})
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}

module.exports = {
    createAdminService, getAllAdminService
}