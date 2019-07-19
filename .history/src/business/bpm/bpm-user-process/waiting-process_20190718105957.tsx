import * as React from 'react';
import { connect } from 'react-redux';
import { BpmProcessTracesState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';

interface method {
    switchProcessTraceUI(): void,
    switchProcessHandleUI(): void,
    sWitchProcesstransferUI():void,
    switchProcessIncreaseSignUI(): void,
    switchProcessReduceSignUI(): void,
}
class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcessUI state={this.props}/>
        );
    }
}

const mapStateToProps = (state:any): BpmProcessTracesState => {
    return state.bpmReducer.UserProcessTabComponnetState;
}

const mapDispatchToProps = (dispatch:any): method => {
	return {
        switchProcessTraceUI:():void => {},
        switchProcessHandleUI:():void => {},
        sWitchProcesstransferUI:():void => {},
        switchProcessTraceUI:():void => {},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);