import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';
import BPMUserUI from './view/pc';

interface method {
    createPanel(): void 
}
class Index extends React.Component {
    
    render() {
        return (
           <BPMUserUI state = {this.props}/>
        );
    }
}

const mapStateToProps = (state:any): BpmUserProcessState => {
    const { TabDefaultKeyState, UserProcessTabComponnetState }  = state.bpmReducer;
    console.log(state)
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