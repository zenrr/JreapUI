import { CREATE_BPM_ACTION_TABS} from './actionTypes'
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
	BpmProcessTracesState: {

	},
	BpmProcessHandleState: {

	}, 
	BpmProcessTransferState: {

	}, 
	BpmProcessIncreaseSignState: {

	},
	BpmProcessReduceSignState: {

	},
}



/**
 * 流程痕迹状态
 */
export interface BpmProcessTracesState {
    id: string
    visiable: boolean
}

/**
 * 流程转办状态
 */
export interface BpmProcessHandleState {
    id: string
    visiable: boolean
}

/**
 * 流程转办状态
 */
export interface BpmProcessTransferState {
    id: string
    visiable: boolean
}

/**
 * 流程增签状态
 */
export interface BpmProcessIncreaseSignState {
    id: string
    visiable: boolean
}

/**
 * 流程减签状态
 */
export interface BpmProcessReduceSignState {
    id: string
    visiable: boolean
}




const rootReducer  = (state = defaultState, action:any) => {
	const { type , value } = action
	if(type === CREATE_BPM_ACTION_TABS){
        const newState = JSON.parse(JSON.stringify(state));
        newState.isNewUser = value
		return newState;
	} 
	return state;
}

export default rootReducer




