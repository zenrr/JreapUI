import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';
import IndexUI from './view/pc/index-ui';
import waitingProcess from './waiting-process';
import HandledProcess from './handled-process';

interface method {
    createPanel(): void 
}
class Index extends React.Component  {

    state = {
        tabDefaultKey: "0",
        tabComponents: [
            {
                title: "待办",
                component: waitingProcess
            },
            {
                title: "已办",
                component: HandledProcess
            },
            {
                title: "我的流程"
            }
        ]
    }

    render() {
        return (
           <IndexUI state={this.props}/>
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