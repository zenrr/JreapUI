import { IS_SHOW_MENUS} from './actionTypes'
import { combineReducers } from 'redux'
import loginReducer from '../core/login/reducer'
import bpmReducer from '../business/bpm/bpm-user-process/store/reducer'

const rootReducer  =  combineReducers({
	loginReducer,
	bpmReducer
})

export default rootReducer




