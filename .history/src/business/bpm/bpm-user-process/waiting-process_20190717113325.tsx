import * as React from 'react';
import { connect } from 'react-redux';
import { BpmProcessTracesState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';

interface method {
     
}
class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcessUI state={this.props}/>
        );
    }
}

const mapStateToProps = (state:any): BpmProcessTracesState => {
    const { BpmProcessTracesState }  = state.bpmReducer;	
    return {
        BpmProcessTracesState: BpmProcessTracesState
	}
}

const mapDispatchToProps = (dispatch:any): method => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);