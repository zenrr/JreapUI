import login from "../core/login";
import MainUI from "../core/main/view/pc";
import LoginUI from "../core/login/view/pc";


const routes = [
    { 
        path: "/", 
        title: "首页",
        exact: true, 
        component: LoginUI
    },
    {   
        path: "/login", 
        title: "登录",
        noFrame:true, 
        component: MainUI
    },
 ];

 export default routes;
