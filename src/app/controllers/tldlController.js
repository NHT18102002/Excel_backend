// const Employee = require('../models/Employee');
// const functions = require("../../services/functions");


// exports.createEmployees = async (req, res, next) => {
//     const data = req.body;
//     try {
//         let maxId = await functions.getMaxID(Employee);
//         if (!maxId) {
//           maxId = 0;
//         }
//         const _id = Number(maxId) + 1;
//         // console.log(_id)
//         const employees = await Employee.create({
//             _id: _id,
//             ho_va_ten: data.ho_va_ten,
//             com_id: data.com_id,
//             email: data.email,
//             password: data.password,
//             ngay_cong_chuan_cua_thang: data.ngay_cong_chuan_cua_thang,
//             ngay_cong_thuc_te: data.ngay_cong_thuc_te,
//             phong_ban: data.phong_ban,
//             vi_tri: data.vi_tri,
//             luong_co_ban: data.luong_co_ban,
//         });
//         return res.status(200).json({
//             status: 'success',
//             employees,
//         });
//     } catch (error) {
        
//         return res.status(500).json({ 'Create elpoyees failed, error': error });
//     }
// };




// exports.getEmployees = async (req, res) => {
//     const data = req.body;
//     // data = {
//     //     phong_ban,
//     //     vi_tri,
//     //     ho_ten,
//     // }
//     // console.log(data.phong_ban);
//     try {
//         if(data.phong_ban === "" && data.vi_tri !== "" && data.ho_ten !== ""){
//             const employees = await Employee.find({vi_tri: data.vi_tri, ho_ten: data.ho_ten}).exec();
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//         else if(data.vi_tri === "" && data.phong_ban !== "" && data.ho_ten !== ""){
//             const employees = await Employee.find({ho_ten: data.ho_ten, phong_ban: data.phong_ban}).exec();
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//         else if(data.ho_ten === "" && data.vi_tri !== "" && data.phong_ban !== ""){
//             const employees = await Employee.find({vi_tri: data.vi_tri, phong_ban: data.phong_ban}).exec();
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//         else if(data.ho_ten === "" && data.vi_tri === "" && data.phong_ban !== ""){
//             const employees = await Employee.find({phong_ban: data.phong_ban}).exec();
//             // console.log(employees);
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//         else if(data.ho_ten === "" && data.phong_ban === "" && data.vi_tri !== ""){
//             const employees = await Employee.find({vi_tri: data.vi_tri}).exec();
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//         else if(data.phong_ban === "" && data.vi_tri === "" && data.ho_ten !== ""){
//             const employees = await Employee.find({ho_ten: data.ho_ten}).exec();
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//         else if(data.phong_ban === "" && data.vi_tri === "" && data.ho_ten === ""){
//             const employees = await Employee.find({}).exec();
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//         else {
//             const employees = await Employee.find(data).exec();
//             return res.status(200).json({
//                 status: 'success',
//                 employees,
//             });
//         }
//     } catch (error) {
//         return res.status(404).json({ 'Can not find eployees, error': error });
//     }
// };

// const getAllEmployees = async (req, res) => {
//    try {
//     const data = await Employee.find({});
//     return res.json({data: data});
//    } catch (error) {
//     return error;
//    }
// };

// module.exports = { createEmployees, getEmployees, getAllEmployees };
