import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../../types/bpm';

interface method {
    createPanel(): void 
}
class BpmProcessModelIndexUI extends React.Component  {

    render() {
        return (
           <IndexUI state={this.state}/>
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

export default BpmProcessModelIndexUI;