import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';

interface method {
    createPanel(): void 
}
class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcess />
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
const mapDispatchToProps = (dispatch:any): method => {
	return {
		createPanel:():void => {}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);