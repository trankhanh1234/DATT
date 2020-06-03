import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { admin } from "./../services/admin.service";
import adminModel from "./../models/admin.model";

let loginAmin = async(req, res) => {
    let { username, password } = req.body;
    let getDataAdminByUsername = await adminModel.getDataAdminByUsername(
        username
    );
    if (!getDataAdminByUsername)
        return res.status(500).send("Tài khoản hoặc mật khẩu không đúng");
    let checkPassword = await getDataAdminByUsername.checkPassword(password);
    if (!checkPassword)
        return res.status(500).send("Tài khoản hoặc mật khẩu không đúng");
    jwt.sign({ foo: getDataAdminByUsername },
        process.env.SECRET, { expiresIn: "1h" },

        (err, data) => {
            if (err) {
                console.log(err);

                return res.status(500).send("Mã hoá tài khoản thất bại, lỗi hệ thống!");
            }

            return res.json({ result: true, data: data });
        }
    );
};
let checkToken = (req, res, next) => {
    console.log(req.headers);
    console.log(req.headers["x-access-token"]);
    console.log(req.headers.authorization);

    let token =
        req.body.token || req.params.token || req.headers["x-access-token"] || req.headers.authorization;
    console.log(token);

    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decode) => {
            if (err) return res.status(500).send("Token Của Bạn Không Hợp Lệ");
            next();
        });
    } else {
        return res.status(500).send("Token không tồn tại");
    }
};
module.exports = {
    loginAdmin: loginAmin,
    checkToken: checkToken,
};