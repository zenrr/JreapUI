import * as React from 'react';
import { HashRouter , BrowserRouter,  Route, Link } from 'react-router-dom';
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
			<HashRouter>
				<div className='mainPage'>
					<ul style={{overflow: "hidden", padding: "15px", listStyle: "none"}}>
					{
						routes.map((route, index) => (
							<li key={index} style={{float: "left", marginRight: "20px"}}><Link to={route.path}>{route.title}</Link></li>
						))
					}
					</ul>
					{
						routes.map((route, index) => {
							if(route.noFrame) {
								return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
							} else {
								return (
									<div>
										<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#1890ff", color: "#fff"}}>头部</div>
										<Row>
											<Col span={4}>
												菜单
											</Col>
											<Col span={4}>
												<Route key={index} exact={route.exact} path={route.path} component={route.component} />
											</Col>
											<div style={{width: "220px", marginRight: "220px"}}>
												菜单
											</div>
											<div>
												
											</div>
										</Row>
										<div style={{textAlign: "center", height: "64px", lineHeight: "64px", backgroundColor: "#ececec", color: "#000"}}>底部</div>
									</div>
									
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