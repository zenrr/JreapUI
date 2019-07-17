import * as React from 'react';
import { Card, Tabs } from 'antd';
import HandledProcess from './handled-process';
import WaitingProcess from './waiting-process';
import MyStartProcess from './my-start-process';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';
import BPMUserUI from './view/pc';

const { TabPane } = Tabs;
interface method {
    createPanel(): void 
}
class Index extends React.Component {
    
    render() {
        console.log(this.props)
        return (
           <BPMUserUI 
                state = {this.props}
           />
        );
    }
}

const mapStateToProps = (state:any): BpmUserProcessState => {
    const { TabDefaultKeyState, UserProcessTabComponnetState }  = state;
    console.log(state)
	return {
        TabDefaultKeyState: TabDefaultKeyState,
        UserProcessTabComponnetState: UserProcessTabComponnetState
	}
}

//store.dispatch, props
const mapDispatchToProps = (dispatch:any):method => {
	return {
		createPanel:():void => {
            // const action = getNewUserAction(true);
			// dispatch(action);
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);