var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mallSystem', {useNewUrlParser: true});

// 定义 schema
const Good = mongoose.model('Good', {
    name: String,
    type_id: String,
    type: String,
    click: Number,
    functions: Array,
    service: Array,
    comments_id: Number,
    img_ads: String,
    img_banner: String,
    img_detail: Array,
    img_content: Array,
    versions: [{
        model: String,
        old_price: Number,
        now_price: Number,
        color: Array,
        inventory: Number,
    }]
});

// 增添商品
// for (var i = 1; i < 26; i++) {
//     const kitty = new Good({
//         name: '小米8',
//         type_id: 1,
//         type: 'phone',
//         click: 30,
//         functions: ['超大屏', '双摄像头', '持久待机'],
//         service: ['自营', '7天无理由退货', '保修3年'],
//         comments_id: 1,
//         img_ads: 'localhost:8080/img/1.png',
//         img_banner: 'localhost:8080/img/2.png',
//         img_detail: ['localhost:8080/img/1.png', 'localhost:8080/img/2.png', 'localhost:8080/img/3.png'],
//         img_content: ['localhost:8080/img/1.png', 'localhost:8080/img/2.png', 'localhost:8080/img/3.png', 'localhost:8080/img/1.png', 'localhost:8080/img/2.png', 'localhost:8080/img/3.png'],
//         versions: [
//             {
//                 model: '3GB + 32GB',
//                 old_price: 1399,
//                 now_price: 1299,
//                 color: ['红', '黑', '白'],
//                 inventory: 60,
//             },
//             {
//                 model: '3GB + 64GB',
//                 old_price: 1599,
//                 now_price: 1499,
//                 color: ['红', '白'],
//                 inventory: 60,
//             },
//             {
//                 model: '3GB + 128GB',
//                 old_price: 1999,
//                 now_price: 1899,
//                 color: ['红'],
//                 inventory: 60,
//             },],
//     });
//
//     kitty.save().then(result => {
//         console.log(result)
//     })
// }

// 查询 所有商品信息
exports.findAll = (callback) => {
    Good.find((err, ret) => {
        if (err) {
            callback(err)
        } else {
            ret.sort((a, b) => {
                return (a.id - b.id)
            })
            callback(null, ret)
        }
    })
}

// 查询 某类型 所有商品信息
exports.findOneType = (id, callback) => {
    Good.find(id, (err, ret) => {
        console.log(id)
        if (err) {
            callback(err)
        } else {
            callback(null, ret)
        }

    })
}

// 查询 click 数排名前5的所有商品
exports.findRecom = (callback) => {
    Good.find((err, ret) => {
        if (err) {
            callback(err)
        } else {
            ret.sort((a, b) => {
                return (b.click - a.click)
            })
            var recom = []
            for (var i = 0; i < 8; i++) {
                recom[i] = ret[i]
            }
            callback(null, recom)
        }

    })
}

// 查询 某一商品
exports.findOne = (id, callback) => {
    Good.find(id, (err, ret) => {
        if (err) {
            callback(err)
        } else {
            callback(null, ret)
        }

    })
}
