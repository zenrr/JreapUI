import React = require('react');
import { Form, Icon, Input, Button, DatePicker, Row, Col, Card, Avatar, Typography, Drawer } from 'antd';
import { BpmUserProcessState } from '../../../types/bpm';
import ProcessTracesUI from './view/pc/process-traces-ui';

interface method {
    switchProcessTraceUI(): void,
    switchProcessHandleUI(): void,
    sWitchProcesstransferUI():void,
    switchProcessIncreaseSignUI(): void,
    switchProcessReduceSignUI(): void,
}
class ProcessTraces extends React.Component {

    render() {
        return (
           <ProcessTracesUI state={this.props}/>
        );
    }
}

const mapStateToProps = (state:any): BpmUserProcessState => {
    const { TabDefaultKeyState, UserProcessTabComponnetState }  = state.bpmReducer;	
    return {
        TabDefaultKeyState: TabDefaultKeyState,
        UserProcessTabComponnetState: UserProcessTabComponnetState
	}
}

//store.dispatch, props
const mapDispatchToProps = (dispatch:any):method => {
	return {
		createPanel:():void => {}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);