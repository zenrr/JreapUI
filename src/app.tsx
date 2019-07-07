import * as React from 'react';
import { HashRouter , BrowserRouter,  Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import './assets/css/index.scss';
import 'antd/dist/antd.css';
import Login from './core/login'


export default class App extends React.Component {
	render() {
	  return (
		<Provider store={store}>
			<HashRouter>
				<div className='mainPage'>
					<Route path='/' exact component={Login}></Route>
				</div>
			</HashRouter>
		</Provider>
	  )
	}
}