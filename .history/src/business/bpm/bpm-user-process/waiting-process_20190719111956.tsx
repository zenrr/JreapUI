import * as React from 'react';
import { connect } from 'react-redux';
import { BpmWaitingProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/waiting-process-ui';
import { 
    bpmProcessTracesUiOpen, 
    bpmProcessTracesUiClose, 
    bpmProcessHanldeUiOpen,
    bpmProcessHandleUiClose,
    bpmProcessTransferUiOpen,
    bpmProcessTransferUiClose,
    bpmProcessIncreaseSignUIOpen,
    bpmProcessIncreaseSignUIClose,
    bpmProcessReduceSignUiOpen,
    bpmProcessReduceSignUiClose
} from '../store/actionCreators'


/**
 * 打开流程增签UI
 */
export const bpmProcessIncreaseSignUIOpen = (id: string) => ({
	type: PROCESS_INCREASE_SIGN_UI_OPEN,
	id,
})

/**
 * 关闭流程增签UI
 */
export const bpmProcessIncreaseSignUIClose = () => ({
	type: PROCESS_INCREASE_SIGN_UI_CLOSE,
})

/**
 * 打开流程减签UI
 */
export const bpmProcessReduceSignUiOpen = (id: string) => ({
	type: PROCESS_REDUCE_SIGN_UI_OPEN,
	id,
})

/**
 * 关闭流程减签UI
 */
export const bpmProcessReduceSignUiClose = () => ({
	type: PROCESS_REDUCE_SIGN_UI_CLOSE,
})


interface method {
    openProcessTraceUI(id: string): void,
    closeProcessTraceUI(): void,
    openProcessHandleUI(id: string): void,
    closeProcessHandleUI(): void,
    openProcessTransferUI(id: string): void,
    closeProcessTransferUI(): void,
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
        openProcessHandleUI: (id): void => { // 打开流程办理
            const action = bpmProcessHanldeUiOpen(id);
			dispatch(action);
        },
        closeProcessHandleUI: (): void => { // 关闭流程办理
            const action = bpmProcessHanldeUiClose();
			dispatch(action);
        },
        openProcessTransferUI: (id): void => { // 打开流程转办
            const action = bpmProcessTransferUiOpen();
			dispatch(action);
        },
        closeProcessTransferUI: (): void => { // 关闭流程转办
            const action = bpmProcessTransferUiClose();
			dispatch(action);
        },
        openProcessIncreaseSignUI: (id): void => { // 打开流程增签
            const action = bpmProcessIncreaseSignUiOpen();
			dispatch(action);
        },
        closeProcessIncreaseSignUI: (): void => { // 流程增签
            const action = bpmProcessIncreaseSignUiClose();
			dispatch(action);
        },
        openProcessReduceSignUI: (id): void => { // 流程减签
            const action = bpmProcessIncreaseReduceUiOpen();
			dispatch(action);
        },
        closeProcessReduceSignUI: (): void => { // 流程减签
            const action = bpmProcessIncreaseReduceUiClose();
			dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);