import login from "../core/login";


const routes = [
    { 
        path: "/", 
        title: "首页",
        exact: true, 
        component: login
    },
    {   
        path: "/login", 
        title: "登录",
        noFrame:true, 
        component: Login
    },
    {
        path: "/404", 
        title: "404",
        noFrame:true, 
        component: Login
    },
    {
        path: "/500", 
        title: "500",
        noFrame:true, 
        component: Login
    },
 ];

 export default routes;
