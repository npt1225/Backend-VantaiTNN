const express = require('express');
const route = require('./routes/index');
const app = express();
const port = 3000;


// Sử dụng routes cho API
app.use('/api/v1', route);

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});