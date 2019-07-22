import Index from '../business/bpm/bpm-user-process'
import TestLogin from '../core/login/Test';

const routes = [
    { 
        path: "/", 
        title: "首页",
        exact: true, 
        component: Index,
        noFrame: false
    },
    { 
        path: "/login", 
        title: "登录",
        exact: true, 
        component: TestLogin,
        noFrame: true
    },
    ,
    { 
        path: "/bpm/process/model", 
        title: "流程模型管理",
        exact: true, 
        component: TestLogin,
        noFrame: true
    },
 ];

 export default routes;
