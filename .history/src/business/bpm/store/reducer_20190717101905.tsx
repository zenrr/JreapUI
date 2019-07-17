import { CREATE_BPM_ACTION_TABS} from './actionTypes'
import WaitingProcess from '../waiting-process';
import HandledProcess from '../handled-process';
import MyStartProcess from '../my-start-process';


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
	]
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




