const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
// const mongooseDelete = require('mongoose-delete');

const EmployeeSchema = new Schema(
    {
        _id: {
            type: Number,
            require: true
        },
        ho_va_ten: {
            type: String,
            maxLength: 255,
            required: [true, 'Please enter your name'],
            trim: true,
        },
        com_id: {
            type: String,
            maxLength: 255,
            required: [true, 'Please enter your com_id'],
            trim: true,
        },
        email: {
            type: String,
            maxLength: 255,
            required: [true, 'Please enter your email'],
            trim: true,
            // unique: true,
        },
        password: {
            type: String,
            maxLength: 255,
            minLength: 6,
            required: [true, 'Please enter your password'],
            trim: true,
        },
        ngay_cong_chuan_cua_thang: { type: String, maxLength: 255 },
        ngay_cong_thuc_te: { type: String, maxLength: 255 },
        phong_ban: {
            type: String,
            maxLength: 255,
        },
        vi_tri: {
            type: String,
            maxLength: 255,
        },
        luong_co_ban: {
            type: String,
            maxLength: 255,
        },
        tong_luong_thuc_te: {
            type: String,
            maxLength: 255,
            default: '0'
        },
        slug: { type: String, slug: 'email', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Employee', EmployeeSchema);
