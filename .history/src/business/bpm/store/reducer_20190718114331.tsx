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
		switchProcessTrace: false, // 流程痕迹开关
		switchProcessHandle: false, // 流程处理开关
		sWitchProcessTransfer: false, // 流程转办开关
		switchProcessIncreaseSign: false, // 流程增签开关
		switchProcessReduceSign: false, // 流程减签开关
		pageNum: 1, // 当前页
		pageSize: 10 // 每页显示数量
	},
	BpmProcessHandleState: {
		id: null, 
    	visiable: false
	}, 
	BpmProcessTransferState: {
		id: null,
    	visiable: false
	}, 
	BpmProcessIncreaseSignState: {
		id: null,
    	visiable: false
	},
	BpmProcessReduceSignState: {
		id: null,
    	visiable: false
	},
}

const rootReducer  = (state = defaultState, action:any) => {
	const { type , value } = action
	if(type === CREATE_BPM_ACTION_TABS){
        const newState = JSON.parse(JSON.stringify(state));
        newState.isNewUser = value
		return newState;
	} else if(type === CREATE_BPM_ACTION_TABS) {

	} else if(type === CREATE_BPM_ACTION_TABS) {
		
	} else if(type === CREATE_BPM_ACTION_TABS) {
		
	} else if(type === CREATE_BPM_ACTION_TABS) {
		
	} else if(type === CREATE_BPM_ACTION_TABS) {
		
	}
	return state;
}

export default rootReducer




