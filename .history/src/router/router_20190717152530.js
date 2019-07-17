import Layout from "../layout/layout/Layout";
import Login from "../pages/passport/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Passport from "../layout/passport/Passport";
import BlogList from "../pages/blog/blog-list/BlogList";

// defualt value noFrame==false  auth==false
const routes = [
  {path: "/", exact: true, component: Home},
  {path: "/blog", component: BlogList},
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
