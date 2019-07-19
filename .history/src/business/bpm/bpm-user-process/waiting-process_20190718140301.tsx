import * as React from 'react';
import { connect } from 'react-redux';
import { BpmWaitingProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';

interface method {
    switchProcessTraceUI(): void,
    switchProcessHandleUI(): void,
    switchProcesstransferUI(): void,
    switchProcessIncreaseSignUI(): void,
    switchProcessReduceSignUI(): void,
}
class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcessUI state={this.state} />
        );
    }
}

const mapStateToProps = (state: any): BpmWaitingProcessState => {
    console.log(state.bpmReducer);
    const {
        BpmProcessHandleState, 
        BpmProcessTransferState, 
        BpmProcessTracesState, 
        BpmProcessIncreaseSignState, 
        BpmProcessReduceSignState 
    } = state.bpmReducer;
    return state.bpmReducer.UserProcessTabComponnetState;
}

const mapDispatchToProps = (dispatch: any): method => {
    return {
        switchProcessTraceUI: (): void => { //流程痕迹
            console.log("haha")
        },
        switchProcessHandleUI: (): void => { // 流程办理
            console.log("hehe")
        },
        switchProcesstransferUI: (): void => { // 流程转办

        },
        switchProcessIncreaseSignUI: (): void => { // 流程增签

        },
        switchProcessReduceSignUI: (): void => { // 流程减签

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);