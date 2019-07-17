import * as React from 'react';
import { HashRouter, BrowserRouter,  Route, Link, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import {Row, Col} from "antd";
import './assets/css/index.scss';
import 'antd/dist/antd.css';
import routes from './routes/routes';


class App extends React.Component {
	render() {
	  return (
		<Provider store={store}>
			<BrowserRouter>
				<div className='mainPage'>
					<ul style={{overflow: "hidden", padding: "15px", listStyle: "none"}}>
					{
						routes.map((route, index) => (
							<li key={index} style={{float: "left", marginRight: "20px"}}><Link to={route.path}>{route.title}</Link></li>
						))
					}
					</ul>
					<Switch>
					{
						routes.map((route, index) => {
							if(route.noFrame) {
								return (
									<><Route key={index} exact={route.exact} path={route.path} component={route.component}/>
								)
							} else {
								return (
									<React.Fragment key={index}>
										<Route key={index} exact={route.exact} path={route.path} component={route.component} />
									</React.Fragment>
									
									// <React.Fragment key={index}>
									// 	<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#1890ff", color: "#fff"}}>头部</div>
									// 	<Row>
									// 		<Col span={3}>
									// 			菜单
									// 		</Col>
									// 		<Col span={21}>
												
									// 		</Col>
									// 	</Row>
									// 	<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#ececec", color: "#000"}}>底部</div>
									// </React.Fragment>
								)
							}
						})
					}
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	  )
	}
}

export default App;