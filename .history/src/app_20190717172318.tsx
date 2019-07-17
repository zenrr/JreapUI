import * as React from 'react';
import { HashRouter, BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import { Row, Col } from "antd";
import './assets/css/index.scss';
import 'antd/dist/antd.css';
import routes from './routes/routes';


class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
				
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
									if(route.noFrame){
									return <Route key={index} exact={route.exact} path={route.path}                     
										render={props => (
										<route.component {...props} routes={route.routes} />
										)}
									/>
									}else{
									return <Route key={index} exact path={route.path} 
									render={props => (
										<div>
										<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#1890ff", color: "#fff"}}>头部</div>
										<route.component {...props} exact={route.exact} routes={route.routes} />
										<Footer></Footer>
										</div>
									)}
									/>
									}
								})
							}
							{
								routes.map((route, index) => {
									if (route.noFrame) {
										return (
											<React.Fragment key={index}>
												<Route key={index} exact={route.exact} path={route.path} component={route.component} />
											</React.Fragment>
										)
									} else {
										return (
											<div key={index}>
												<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#1890ff", color: "#fff"}}>头部</div>
												<Row>
													<Col span={3}>
														菜单
													</Col>
													<Col span={21}>
														<Route key={index} exact={route.exact} path={route.path} component={route.component} />
													
													</Col>
												</Row>
												<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#ececec", color: "#000"}}>底部</div>
											</div>

											// <React.Fragment key={index}>
												
												
												
											// </React.Fragment>
										)
									}
								})
							}
							</Route>
						</Switch>
							
						
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App;