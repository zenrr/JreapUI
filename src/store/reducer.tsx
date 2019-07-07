import { IS_SHOW_MENUS} from './actionTypes'
import { combineReducers } from 'redux'
import loginReducer from '../core/login/reducer'

const rootReducer  =  combineReducers({
	loginReducer
})

export default rootReducer




