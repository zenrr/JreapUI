import { IS_NEW_UESR_LODING , PROCESS_TRACES_UI_SWITCH, SET_USER_NAME ,SET_PASS_WORD} from './actionTypes'
import { LoginInfo } from '../../types';

const defaultState:LoginInfo = {
    oldUserName:null,
    userName:null,
    passWord:null,
    isNewUser:false,
    img:'images/dbssjc.png',
    loading:false
}

const loginReducer = (state = defaultState, action:any) => {
    const { type , value } = action
	if(type === IS_NEW_UESR_LODING){
        const newState = JSON.parse(JSON.stringify(state));
        newState.isNewUser = value
		return newState;
	} else if(type === PROCESS_TRACES_UI_SWITCH){
        let newState = JSON.parse(JSON.stringify(state));
        newState = value
        newState.oldUserName = value.userName
        return newState
    } else if(type === SET_USER_NAME){
        const newState = JSON.parse(JSON.stringify(state));
        newState.userName = value
        return newState
    } else if(type === SET_PASS_WORD){
        const newState = JSON.parse(JSON.stringify(state));
        newState.passWord = value
        return newState
    }
	return state;
}

export default loginReducer


