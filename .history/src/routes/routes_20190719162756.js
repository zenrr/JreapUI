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
        path: "/login", 
        title: "流程定义",
        exact: true, 
        component: TestLogin,
        noFrame: true
    },
 ];

 export default routes;
