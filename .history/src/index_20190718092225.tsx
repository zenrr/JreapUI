import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app'
import BpmEditor from './business/bpm-editor'

import './assets/css/index.scss';
import 'antd/dist/antd.css';



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root') as HTMLElement);