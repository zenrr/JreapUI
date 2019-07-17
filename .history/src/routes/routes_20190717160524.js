import login from "../core/login";
import MainUI from "../core/main/view/pc";
import LoginUI from "../core/login/view/pc";
import Index from '../business/bpm/bpm-user-process'

const routes = [
    { 
        path: "/", 
        title: "首页",
        exact: true, 
        component: Index,
        noFrame?: true
    },
 ];

 export default routes;
