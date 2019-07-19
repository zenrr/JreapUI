import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app'
import { Provider } from "react-redux";
import store from "./store";
import './assets/css/index.scss';
import 'antd/dist/antd.css';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root') as HTMLElement);