import { IS_SHOW_MENUS} from './actionTypes'
import { combineReducers } from 'redux'
import loginReducer from '../core/login/reducer'
import bpmReducer from '../business/bpm/store/reducer'

const rootReducer  =  combineReducers({
	loginReducer,
	bpmReducer
})

export default rootReducer




