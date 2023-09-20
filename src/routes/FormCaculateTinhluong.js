const router = require('express').Router();
const FormCaculateTinhluongController = require("../app/controllers/FormCaculateTinhluong")
const formData = require('express-form-data')
// const functions = require("../../services/functions");



//Tạo mới công thức tính lương  
router.post("/createformcaculate", formData.parse(), FormCaculateTinhluongController.CreateForm);
// sửa công thức
router.put("/editformcalculate", formData.parse(), FormCaculateTinhluongController.EditForm);
// Lấy công thức theo công ty
router.post("/getformcompany", formData.parse(), FormCaculateTinhluongController.GetFormCompany);
//Thưc hiện tính toán
router.post("/calculate", formData.parse(), FormCaculateTinhluongController.Calculate);
//Khởi tạo giá trị cho một ô
router.post("/SetCellValue",formData.parse(), FormCaculateTinhluongController.SetCellValue);
//lấy ra tất cả các ô
router.get("/getallcellvalue", formData.parse(), FormCaculateTinhluongController.getAllCellValue);

// router.post("/getdatacellcompany", formData.parse(), FormCaculateTinhluongController.getDataCellCompany);
router.post("/getonecellcompany", formData.parse(), FormCaculateTinhluongController.getOneCellValue);

//lấy ra tất cả các ô của công ty
router.post("/getallcellvaluecompany", formData.parse(), FormCaculateTinhluongController.getAllCellValueCompany);
//Thêm collum
router.post("/addcolum",formData.parse(), FormCaculateTinhluongController.CreateNewColum);
//Lấy ra biến tính lương
router.get("/getvartinhluong",formData.parse(), FormCaculateTinhluongController.getAllVarTinhLuong);
//Lấy ra biến tính lương ban đầu của một công ty
router.post("/getdefaultvartinhluongcompany",formData.parse(), FormCaculateTinhluongController.getDefaultVarTinhLuongCompany);
//Lấy ra biến tính lương của một công ty
router.post("/getvartinhluongcompany",formData.parse(), FormCaculateTinhluongController.getDefaultVarTinhLuongCompany);

//Thêm Biến tính lương(Thêm một cột)
router.post("/addvartinhluong",formData.parse(), FormCaculateTinhluongController.CreateVarTinhLuong);
//Thêm dữ liệu ban đầu cửa biến lính lương
router.post("/adddefaultvartinhluong", formData.parse(), FormCaculateTinhluongController.CreateMultipleVarTinhLuong);

//Sửa biến tính lương(Sửa một cột)
router.put("/updatevartinhluong",formData.parse(), FormCaculateTinhluongController.EditVarTinhLuong);
//Xóa một biến tính lương(một cột)
router.put("/deletevartinhluong",formData.parse(), FormCaculateTinhluongController.DeleteVarTinhLuong);

module.exports = router