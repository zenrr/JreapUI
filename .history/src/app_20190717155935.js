import * as React from 'react';
import { HashRouter , BrowserRouter,  Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import './assets/css/index.scss';
import 'antd/dist/antd.css';
import routes from './routes/routes'
import Index from './business/bpm/bpm-user-process'


export default class App extends React.Component {
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
							if(route.noFrame){
								return <Route key={index} exact={route.exact} path={route.path}                     
									render={props => (
									<route.component {...props} routes={route.routes} />
									)}
								/>
							} else {
							return <Route key={index} exact path={route.path} 
								render={props => (
									<div>
									头部
									<route.component {...props} exact={route.exact} routes={route.routes} />
									底部
									</div>
								)}
								/>
							}
						})
					}
				</div>
			</HashRouter>
		</Provider>
	  )
	}
}