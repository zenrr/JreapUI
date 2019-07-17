import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/index-pc';

interface method {
     
}
class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcessUI state={this.props}/>
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

const mapDispatchToProps = (dispatch:any): method => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);