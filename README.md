# mallServer

> A node.js project for my mall System

## MongoDB数据库设计

### 1 商品样式

```json
{
    'id':'5c68fbd919b2be49a25f5078',
    'name':'小米8',
    'type_id':1,
    'type':'phone',
    'click':30,
    'functions':['超大屏','双摄像头','持久待机'],
    'service':['自营','7天无理由退货','保修3年'],
    'versions':[
        {
            'model': '3GB + 32GB',
            'old_price': '1399',
            'now_price': '1299',
            'color': ['红', '黑', '白'],
            'inventory': 60,
            'img_detail': ['localhost:8080/img/1.png', 'localhost:8080/img/2.png', 'localhost:8080/img/3.png']

        },
        {
            'model': '3GB + 64GB',
            'old_price': '1599',
            'now_price': '1499',
            'color': ['红', '白'],
            'inventory': 60,
            'img_detail': ['localhost:8080/img/1.png', 'localhost:8080/img/2.png', 'localhost:8080/img/3.png']
        },
        {
            'model': '3GB + 128GB',
            'old_price': '1999',
            'now_price': '1899',
            'color': ['红'],
            'inventory': 60,
            'img_detail': ['localhost:8080/img/1.png', 'localhost:8080/img/2.png', 'localhost:8080/img/3.png']
        }, ],
    'comments_id':1,
    'img_ads':'localhost:8080/img/1.png',
    'img_banner':'localhost:8080/img/2.png'
}
```
