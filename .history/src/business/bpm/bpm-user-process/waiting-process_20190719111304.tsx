import * as React from 'react';
import { connect } from 'react-redux';
import { BpmWaitingProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';
import { bpmProcessTracesUiOpen, bpmProcessTracesUiClose } from '../store/actionCreators'

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
        closeProcessTraceUI: (): void => { //关闭流程痕迹
            const action = bpmProcessTracesUiClose();
			dispatch(action);
        },
        openProcessHandleUI: (id): void => { // 流程办理
            const action = bpmProcessTracesUiOpen(id);
			dispatch(action);
        },
        closeProcessHandleUI: (): void => { // 流程办理
            console.log("流程办理")
        },
        openProcesstransferUI: (id): void => { // 流程转办
            console.log("流程转办")
        },
        closeProcesstransferUI: (): void => { // 流程转办
            console.log("流程转办")
        },
        openProcessIncreaseSignUI: (id): void => { // 流程增签
            console.log("流程增签")
        },
        closeProcessIncreaseSignUI: (): void => { // 流程增签
            console.log("流程增签")
        },
        openProcessReduceSignUI: (id): void => { // 流程减签
            console.log("流程减签")
        },
        closeProcessReduceSignUI: (): void => { // 流程减签
            console.log("流程减签")
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);