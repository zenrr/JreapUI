import { CREATE_BPM_ACTION_TABS, PROCESS_TRACES_UI_OPEN, PROCESS_TRACES_UI_CLOSE} from './actionTypes'
import WaitingProcess from '../bpm-user-process/waiting-process';
import HandledProcess from '../bpm-user-process/handled-process';
import MyStartProcess from '../bpm-user-process/my-start-process';

const defaultState = {
    TabDefaultKeyState: "0", 
	UserProcessTabComponnetState: [
		{
			title: '待办',
			component: WaitingProcess
		},
		{
			title: '已办',
			component: HandledProcess
		},
		{
			title: '我发起的流程',
			component: MyStartProcess
		},
	],
	BpmWaitingProcessState: { // 流程痕迹
		switchProcessTrace: false, // 流程痕迹开关
		switchProcessHandle: false, // 流程处理开关
		sWitchProcessTransfer: false, // 流程转办开关
		switchProcessIncreaseSign: false, // 流程增签开关
		switchProcessReduceSign: false, // 流程减签开关
		totalNum: 0, // 总数量
		pageNum: 1, // 当前页
		pageSize: 10 // 每页显示数量
	},
}

const rootReducer  = (state = defaultState, action:any) => {
	const { type , value } = action
	if(type === CREATE_BPM_ACTION_TABS){
        const newState = JSON.parse(JSON.stringify(state));
        newState.isNewUser = value
		return newState;
	} else if(type === PROCESS_TRACES_UI_OPEN ) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.BpmWaitingProcessState.switchProcessTrace = true
		return newState;
	} else if(type === PROCESS_TRACES_UI_CLOSE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.BpmWaitingProcessState.switchProcessTrace = false
		return newState;
	} else if(type === PROCESS_HANDLE_UI_OPEN) {

	} else if(type === PROCESS_HANDLE_UI_CLOSE) {

	} else if(type === PROCESS_TRANSFER_UI_OPEN) {

	} else if(type === PROCESS_TRANSFER_UI_CLOSE) {
		
	} else if(type === PROCESS_INCREASE_SIGN_UI_OPEN) {

export const PROCESS_INCREASE_SIGN_UI_CLOSE = "process_increase_sign_ui_close"
} else if(type === PROCESS_HANDLE_UI_CLOSE) {
		
	} else if(type === PROCESS_HANDLE_UI_OPEN) {

	} else if(type === PROCESS_HANDLE_UI_CLOSE) {
		
	}
	return state;
}

export default rootReducer


/**
 * 打开流程转办界面
 */
export const  = "process_transfer_ui_open"
/**
 * 关闭流程转办界面
 */
export const  = "process_transfer_ui_close"

/**
 * 打开流程增签界面
 */
export const  = "process_increase_sign_ui_open"
/**
 * 关闭增签界面
 */

/**
 * 打开流程减签界面
 */
export const PROCESS_REDUCE_SIGN_UI_OPEN = "process_reduce_sign_ui_open"
/**
 * 关闭流程减签界面
 */
export const PROCESS_REDUCE_SIGN_UI_CLOSE = "process_reduce_sign_ui_close"

