import login from "../core/login";
import MainUI from "../core/main/view/pc";


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
        component: MainUI
    },
 ];

 export default routes;
