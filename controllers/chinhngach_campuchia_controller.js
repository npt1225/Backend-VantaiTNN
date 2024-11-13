const fs = require('fs');
const path = require('path');

// Đường dẫn đến tệp JSON lưu trữ dữ liệu
const filePath = path.join(__dirname, '../data/chinhngach_campuchia.json');


let data = {};
fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
        console.error('Không thể đọc tệp dữ liệu:', err);
    } else {
        data = JSON.parse(fileData);
    }
});


const getContactData = (req, res) => {
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi lấy dữ liệu." });
    }
};


const UpdateData = (req, res) => {
    try {
        const updateData = req.body;
        if (updateData.company) data.company = updateData.company;

        if (updateData.services_1) {
            if (updateData.services_1.description) data.services_1.description = updateData.services_1.description;
            if (updateData.services_1.advantages) data.services_1.advantages = updateData.services_1.advantages;
        }

        if (updateData.services_2) {
            if (updateData.services_2.description) data.services_2.description = updateData.services_2.description;
            if (updateData.services_2.advantages) data.services_2.advantages = updateData.services_2.advantages;
        }

        if (updateData.services_3) {
            if (updateData.services_3.description) data.services_3.description = updateData.services_3.description;
            if (updateData.services_3.advantages) data.services_3.advantages = updateData.services_3.advantages;
        }

        if (updateData.contact) {
            if (updateData.contact.company_name) data.contact.company_name = updateData.contact.company_name;
            if (updateData.contact.website) data.contact.website = updateData.contact.website;
            if (updateData.contact.email) data.contact.email = updateData.contact.email;
            if (updateData.contact.tax_id) data.contact.tax_id = updateData.contact.tax_id;
            if (updateData.contact.offices) data.contact.offices = updateData.contact.offices;
        }

        fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Lỗi khi ghi tệp dữ liệu:', err);
                res.status(500).json({ message: "Đã xảy ra lỗi khi lưu dữ liệu." });
            } else {
                res.status(200).json({ message: "Cập nhật thành công", data });
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật dữ liệu." });
    }
};

module.exports = { getContactData, UpdateData };
