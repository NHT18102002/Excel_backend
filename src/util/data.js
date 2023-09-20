const defaultData= [
//     {
//         // "_id": 1,
//         "com_id": com_id,
//         "name_var": "luong_co_ban",
//         "note_var": "Lương cơ bản",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 2,
//         "com_id": com_id,
//         "name_var": "phan_tram_hop_dong",
//         "note_var": "Phần trăm Hợp đồng",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 3,
//         "com_id": com_id,
//         "name_var": "ngay_cong_chuan_cua_thang",
//         "note_var": "Ngày công chuẩn của tháng",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 4,
//         "com_id": com_id,
//         "name_var": "cong_theo_ca",
//         "note_var": "Công theo ca",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 5,
//         "com_id": com_id,
//         "name_var": "cong_theo_gio",
//         "note_var": "Công theo giờ",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 6,
//         "com_id": com_id,
//         "name_var": "cong_tang_ca",
//         "note_var": "Công tăng ca",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 7,
//         "com_id": com_id,
//         "name_var": "ngay_cong_thuc_te",
//         "note_var": "Ngày công thực tế",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 8,
//         "com_id": com_id,
//         "name_var": "phu_cap_trach_nhiem",
//         "note_var": "Phụ cấp trách nhiệm",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 9,
//         "com_id": com_id,
//         "name_var": "phu_cap_an_trua",
//         "note_var": "Phụ cấp ăn trưa",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 10,
//         "com_id": com_id,
//         "name_var": "phu_cap_dien_thoai",
//         "note_var": "Phụ cấp điện thoại",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 11,
//         "com_id": com_id,
//         "name_var": "phu_cap_khac",
//         "note_var": "Phụ cấp khác",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },

//     {
//         // "_id": 12,
//         "com_id": com_id,
//         "name_var": "phat",
//         "note_var": "Phạt",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 13,
//         "com_id": com_id,
//         "name_var": "hoa_hong_tien",
//         "note_var": "Hoa hồng tiền",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 14,
//         "com_id": com_id,
//         "name_var": "hoa_hong_danh_thu",
//         "note_var": "Hoa hồng danh thu",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 15,
//         "com_id": com_id,
//         "name_var": "hoa_hong_loi_nhuan",
//         "note_var": "Hoa hồng lợi nhuận",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 16,
//         "com_id": com_id,
//         "name_var": "hoa_hong_le_phi",
//         "note_var": "Hoa hồng lệ phí",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 17,
//         "com_id": com_id,
//         "name_var": "hoa_hong_ke_hoach",
//         "note_var": "Hoa hồng kế hoạch",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 18,
//         "com_id": com_id,
//         "name_var": "thu_nhap_danh_nghia",
//         "note_var": "Thu nhập danh nghĩa",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 19,
//         "com_id": com_id,
//         "name_var": "luong_dong_bao_hiem",
//         "note_var": "Lương đóng bảo hiểm",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 20,
//         "com_id": com_id,
//         "name_var": "cac_khoan_trich_vao_chi_phi_doanh_nghiep",
//         "note_var": "Các khoản trích vào chi phí doanh nghiệp",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 21,
//         "com_id": com_id,
//         "name_var": "cac_khoan_trich_tru_vao_luong",
//         "note_var": "Các khoản trích trừ vào lương",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 22,
//         "com_id": com_id,
//         "name_var": "giam_tru",
//         "note_var": "Giảm trừ",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 23,
//         "com_id": com_id,
//         "name_var": "thue_tncc",
//         "note_var": "Thuế TNCC",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 24,
//         "com_id": com_id,
//         "name_var": "tam_ung",
//         "note_var": "Tạm ứng",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 25,
//         "com_id": com_id,
//         "name_var": "thuc_linh",
//         "note_var": "Thực lĩnh",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//     {
//         // "_id": 26,
//         "com_id": com_id,
//         "name_var": "tien_khac",
//         "note_var": "Tiền khác",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
//       {
//         // "_id": 27,
//         "com_id": com_id,
//         "name_var": "ghi_chu",
//         "note_var": "Ghi chú",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//       },
//     {
//         // "_id": 28,
//         "com_id": com_id,
//         "name_var": "tong_luong_thuc_te",
//         "note_var": "Tổng lương thực tế",
//         "time_created": new Date(),
//         "time_edited": new Date(),
//         "__v": 0
//     },
    
//   ]
]
  module.exports = defaultData;