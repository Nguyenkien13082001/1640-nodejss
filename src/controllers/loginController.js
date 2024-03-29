const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

const loginHomePage = (req, res) => {
    res.render('login.ejs')
}

const requireLogin = (req, res) => {
    console.log(req.user)
    if (!req.user) { // Giả sử thông tin người dùng được lưu trong req.user
        // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
        return res.redirect('/login');
    }
    // Nếu đã đăng nhập, tiếp tục xử lý request
    res.render('home.ejs')
}

const postLoginHomePage = async (req, res) => {
    try {
        const { username, password } = req.body;
        // console.log(req.session)

        const user = await Admin.findOne({ username });


        if (user) {
            const isPasswordValid = (password === user.password);
            // const isPasswordValid = await bcrypt.compare(password, user.password);
            // console.log(isPasswordValid)
            if (isPasswordValid) {
                // req.session.username = user.username;
                // req.session.role = user.role;
                if (user.role === 'admin') {
                    res.redirect('/admin');
                } else {
                    res.redirect('/');
                }
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        // Xử lý lỗi
        res.send(error.message);
    }
};

module.exports = { requireLogin, loginHomePage, postLoginHomePage };