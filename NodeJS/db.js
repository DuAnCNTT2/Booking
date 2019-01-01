const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/booking', (err) => {
    if (!err)
        console.log('Kết nối MongoDB thành công.');
    else
        console.log('Lỗi kết nối với MongoDB: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;