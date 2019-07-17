import * as React from 'react';

class TestLogin extends React.Component {
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
					<Switch>
					{
						routes.map((route, index) => {
							if(route.noFrame) {
								return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
							} else {
								return (
									<div>
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
									
								)
							}
						})
					}
					</Switch>
				</div>
			</HashRouter>
		</Provider>
	  )
	}
}

export default App;