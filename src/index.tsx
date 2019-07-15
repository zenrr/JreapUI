import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app'
import BpmEditor from './business/bpm-editor'

import './assets/css/index.scss';
import 'antd/dist/antd.css';



ReactDOM.render(<BpmEditor />, document.getElementById('root') as HTMLElement);