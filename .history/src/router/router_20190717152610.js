// defualt value noFrame==false  auth==false
const routes = [
  {path: "/", exact: true, component: Home},
  {path: "/login", component: Login},
  {
    path: "/passport",
    component: Passport,
    noFrame: true,
    exact: false,
    routes:[
      { path: "/login", component: Login},
      { path: "/register", component: Login}
    ]
  },
 ];

 export default routes;
