import * as React from 'react';
import { HashRouter , BrowserRouter,  Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import './assets/css/index.scss';
import 'antd/dist/antd.css';
import routes from './routes/routes'
import Index from './business/bpm/bpm-user-process/index'


export default class App extends React.Component {
	render() {
	  return (
		<Provider store={store}>
			<ul>
			{
				routes.map((route, index) => (
					<li><Link>{route.title}</Link></li>
				))
			}
			</ul>
			<HashRouter>
				<div className='mainPage'>
					<Route path='/' exact component={Index}></Route>
				</div>
			</HashRouter>
		</Provider>
	  )
	}
}