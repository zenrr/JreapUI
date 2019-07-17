const routes = [
  {path: "/", exact: true, component: Home},
  {path: "/login", noFrame:true, component: Login},
  {path: "/404",, noFrame:true, component: Login},
  {path: "/500", component: Login},
 ];

 export default routes;
