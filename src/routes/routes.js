import Index from '../business/bpm/bpm-user-process'
import TestLogin from '../core/login/Test';
import Login from '../core/login'

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
        component: Login,
        noFrame: true
    }
 ];

 export default routes;
