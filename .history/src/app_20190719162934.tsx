import * as React from 'react';
import { HashRouter, BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Row, Col } from "antd";
import './assets/css/index.scss';
import 'antd/dist/antd.css';
import routes from './routes/routes';


class App extends React.Component {
	render() {
		return (
				<HashRouter>
					<div className='mainPage'>
						<ul style={{ overflow: "hidden", padding: "15px", listStyle: "none" }}>
							{
								routes.map((route, index) => (
									<li key={index} style={{ float: "left", marginRight: "20px" }}><Link to={route.path}>{route.title}</Link></li>
								))
							}
						</ul>
						<Switch>
							<Route>
							{
								routes.map((route, index) => {
									if(route.noFrame) {
									return <Route key={index} exact={route.exact} path={route.path}                     
										render={props => (
										<route.component {...props} routes={route.routes} />
										)}
									/>
									} else {
									return <Route key={index} exact path={route.path} 
									render={props => (
										<div>
											<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#1890ff", color: "#fff"}}>头部</div>
											<Row>
												<Col span={3}>
													菜单
												</Col>
												<Col span={21}>
												return <Route key={index} exact={route.exact} path={route.path}                     
													render={props => (
													<route.component {...props} routes={route.routes} />
													)}
												/>
												</Col>
											</Row>
											
											
											<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#ececec", color: "#000"}}>底部</div>
										</div>
									)}
									/>
									}
								})
							}
							</Route>
						</Switch>
							
					</div>
				</HashRouter>
		)
	}
}

export default App;