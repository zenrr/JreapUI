import * as React from 'react';
import { connect } from 'react-redux';
import { BpmWaitingProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';
import { bpmProcessTracesUiOpen } from '../store/actionCreators'

interface method {
    openProcessTraceUI(id: string): void,
    closeProcessTraceUI(): void,
    openProcessHandleUI(id: string): void,
    closeProcessHandleUI(): void,
    openProcesstransferUI(id: string): void,
    closeProcesstransferUI(): void,
    openProcessIncreaseSignUI(id: string): void,
    closeProcessIncreaseSignUI(): void,
    openProcessReduceSignUI(id: string): void,
    closeProcessReduceSignUI(): void,
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

const mapDispatchToProps = (dispatch: any, props: any): method => {
    return {
        openProcessTraceUI: (id): void => { //打开流程痕迹
            const action = bpmProcessTracesUiOpen(id);
			dispatch(action);
        },
        // closeProcessHandleUI:(): void => {

        // },
        // openProcessHandleUI: (id): void => { // 流程办理
        //     console.log(id)
        // },
        // closeProcessHandleUI: (): void => { // 流程办理
        //     console.log()
        // },
        // openProcesstransferUI: (id): void => { // 流程转办
        //     console.log(id)
        // },
        // closeProcesstransferUI: (): void => { // 流程转办
        //     console.log()
        // },
        // openProcessIncreaseSignUI: (id): void => { // 流程增签
        //     console.log(id)
        // },
        // closeProcessIncreaseSignUI: (): void => { // 流程增签
        //     console.log()
        // },
        // openProcessReduceSignUI: (id): void => { // 流程减签
        //     console.log()
        // },
        // closeProcessReduceSignUI: (): void => { // 流程减签
        //     console.log()
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);