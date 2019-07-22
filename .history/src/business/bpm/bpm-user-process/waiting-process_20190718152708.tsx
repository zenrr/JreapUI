import * as React from 'react';
import { connect } from 'react-redux';
import { BpmWaitingProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';
import console = require('console');

interface method {
    switchProcessTraceUI(id: string): void,
    switchProcessHandleUI(id: string): void,
    switchProcesstransferUI(id: string): void,
    switchProcessIncreaseSignUI(id: string): void,
    switchProcessReduceSignUI(id: string): void,
}

interface _props extends BpmWaitingProcessState, method {}

class WaitingProcess extends React.Component<_props> {

    render() {
        return (
            <WaitingProcessUI props={this.props} />
        );
    }
}

const mapStateToProps = (state: any): BpmWaitingProcessState => {
    return state.bpmReducer.BpmWaitingProcessState;
}

const mapDispatchToProps = (dispatch: any): method => {
    console.log(dispatch)
    return {
        switchProcessTraceUI: (id): void => { //流程痕迹
            console.log(id)
        },
        switchProcessHandleUI: (id): void => { // 流程办理
            console.log(id)
        },
        switchProcesstransferUI: (id): void => { // 流程转办
            console.log(id)
        },
        switchProcessIncreaseSignUI: (id): void => { // 流程增签
            console.log(id)
        },
        switchProcessReduceSignUI: (id): void => { // 流程减签
            console.log(id)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);