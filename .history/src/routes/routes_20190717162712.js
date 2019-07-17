import Index from '../business/bpm/bpm-user-process'

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
        component: Index,
        noFrame: false
    },
 ];

 export default routes;
