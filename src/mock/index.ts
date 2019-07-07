const Mock = require('mockjs');

export function mockLogin (){
    Mock.mock('/getLoginInfo.from',{
        userName:'zhangsan',
        img:'images/dbssjc.png',
        isnew:true,
        rule:'emplooy'
    })
    
    Mock.mock('/login.from',{
        type:'success'
    })
}

