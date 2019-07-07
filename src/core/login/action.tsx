import { IS_NEW_UESR_LODING ,  GET_LOGIN_INFO ,CHANGE_LOGIN_INFO,SET_USER_NAME, LOGIN , SET_PASS_WORD} from './actionTypes'
import { LoginInfo } from '../../types';

// 新用户登录
export const getNewUserAction = (value:boolean) => ({
    type:IS_NEW_UESR_LODING,
    value
})

// 获取用户登录信息 
export const getLgoinInfoAction = (value:string | null) => ({
    type:GET_LOGIN_INFO,
    value
})

// 获取用户名
export const setUserNameAction = (value:string | null) =>({
    type:SET_USER_NAME,
    value
})

// 修改用户登录信息 
export const changeLgoinInfoAction = (value:LoginInfo | null ) => ({
    type:CHANGE_LOGIN_INFO,
    value
})

export const setPassWordAction = (value:string) => ({
    type:SET_PASS_WORD,
    value
})

// 登录
export const getLogin = () => ({
    type:LOGIN
})
