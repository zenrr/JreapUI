import Login from "../pages/passport/login/Login";
import Passport from "../layout/passport/Passport";
import BlogList from "../pages/blog/blog-list/BlogList";

// defualt value noFrame==false  auth==false
const routes = [
  {path: "/", exact: true, component: Home},
  {path: "/login", component: BlogList},
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
