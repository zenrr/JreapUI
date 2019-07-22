import * as React from 'react';
import { connect } from 'react-redux';
import { BpmWaitingProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';

interface method {
    switchProcessTraceUI(e: Event, id: string): void,
    switchProcessHandleUI(e: Event, id: string): void,
    switchProcesstransferUI(e: Event, id: string): void,
    switchProcessIncreaseSignUI(e: Event, id: string): void,
    switchProcessReduceSignUI(e: Event, id: string): void,
}

interface _props extends BpmWaitingProcessState, method {}

class WaitingProcess extends React.Component<_props> {

    render() {
        return (
            <WaitingProcessUI 
                props={this.props} 
            />
        );
    }
}

const mapStateToProps = (state: any): BpmWaitingProcessState => {
    return state.bpmReducer.BpmWaitingProcessState;
}

const mapDispatchToProps = (dispatch: any): method => {
    return {
        switchProcessTraceUI: (e: Event, id: string): void => { //流程痕迹
            console.log("haha")
        },
        switchProcessHandleUI: (e: Event, id: string): void => { // 流程办理
            console.log("hehe")
        },
        switchProcesstransferUI: (e: Event, id: string): void => { // 流程转办

        },
        switchProcessIncreaseSignUI: (e: Event, id: string): void => { // 流程增签

        },
        switchProcessReduceSignUI: (e: Event, id: string): void => { // 流程减签

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);