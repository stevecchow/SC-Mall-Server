var express = require('express');
var router = express.Router();
var goodsDao = require('../dao/goodsDao.js')

// 获取所有分类
router.get('/types', (req, res, next) => {
    var result = {
        status: 0,
        message: []
    }
    goodsDao.findAll((err, ret) => {
        if (err) {
            res.send(result)
        } else {
            result.status = 1;
            var arr = []
            ret.forEach(item => {
                arr.push({
                    type_id: item.type_id,
                    type: item.type
                })
            })

            // 定义函数，清除数组中重复的对象(慎用，只适用于此处，有bug)
            function unique(arr) {
                let result = {};
                let finalResult = [];
                for (let i = 0; i < arr.length; i++) {
                    result[arr[i].type_id] = arr[i];
                }
                for (item in result) {
                    finalResult.push(result[item]);
                }
                return finalResult;
            }

            result.message = unique(arr);
            console.log(result)
            res.send(result)
        }
    })
})

// 获取所有商品
router.get('/allGoods', (req, res, next) => {
    var result = {
        status: 0,
        message: []
    }
    goodsDao.findAll((err, ret) => {
        console.log(req.params)
        if (err) {
            res.send(result)
        } else {
            result.status = 1
            ret.forEach((item) => {
                result.message.push(item)
            })
            res.send(result)
        }
    })
})

// 获取 特定类型的 所有商品
router.get('/getTypeAll/:type_id', (req, res, next) => {
    var result = {
        status: 0,
        message: []
    }
    goodsDao.findOneType(req.params, (err, ret) => {
        // console.log(req.params)
        if (err) {
            res.send(err)
        } else {
            result.status = 1
            ret.forEach((item) => {
                result.message.push(item)
            })
            res.send(result)
        }
    })
})

// 获取推荐的商品
router.get('/getRecom', (req, res, next) => {
    var result = {
        status: 0,
        message: []
    }
    goodsDao.findRecom((err, ret) => {
        if (err) {
            res.send(err)
        } else {
            result.status = 1
            ret.forEach((item) => {
                result.message.push(item)
            })
            res.send(result)
        }
    })
})

// 获取相应wipe
router.get('/getWipe/:type_id', (req, res, next) => {
    var result = {
        status: 0,
        message: []
    }
    goodsDao.findOneType(req.params, (err, ret) => {
        if (err) {
            res.send(err)
        } else {
            result.status = 1
            ret.sort((a, b) => {
                return (b.click - a.click)
            })
            for (var i = 0; i < 4; i++) {
                result.message.push(ret[i])
            }
            res.send(result)
        }
    })
})

// 获取某一商品信息
router.get('/good/:_id', (req, res, next) => {
    var result = {
        status: 0,
        message: []
    }
    goodsDao.findOne(req.params, (err, ret) => {
        console.log(req.params)
        if (err) {
            res.send(err)
        } else {
            result.status = 1
            result.message.push(ret[0])
            res.send(result)
        }
    })
})

module.exports = router;
