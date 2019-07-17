const routes = [
    { 
        path: "/", 
        title: "首页",
        exact: true, 
        component: Home
    },
    {   
        path: "/login", 
        noFrame:true, 
        component: Login
    },
    {
        path: "/404", 
        noFrame:true, 
        component: Login
    },
    {
        path: "/500", 
        noFrame:true, 
        component: Login
    },
 ];

 export default routes;
