import * as React from 'react';
import { HashRouter , BrowserRouter,  Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import './assets/css/index.scss';
import 'antd/dist/antd.css';
import routes from './routes/routes';


class App extends React.Component {
	render() {
	  return (
		<Provider store={store}>
			<HashRouter>
				<div className='mainPage'>
					<ul style={{overflow: "hidden", padding: "15px"}}>
					{
						routes.map((route, index) => (
							<li key={index} style={{float: "left", marginRight: "20px"}}><Link to={route.path}>{route.title}</Link></li>
						))
					}
					</ul>
					{
						routes.map((route, index) => {
							if(route.noFrame) {
								return <Route key={index} exact={route.exact} path={route.path} />
							} else {
								return (
									<div>头部</div>
									<Route key={index} exact={route.exact} path={route.path} />
								)
							}
						})
					}
				</div>
			</HashRouter>
		</Provider>
	  )
	}
}

export default App;