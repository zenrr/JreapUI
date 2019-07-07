import * as React from 'react';
import { Input , Button , Checkbox , Icon , Tooltip} from 'antd';
import { LoginInfo } from '../../../../types'
require.context("../../../../assets/images/menuIcon",true, /^\.\/.*\.png$/);

interface _props {
    history:any
    username(e:any):void 
    password(e:any):void
    newUserLogin():void
    login():void
    loginInfo:LoginInfo
}

const LoginUI= (props:_props) => {
    const { password , login , loginInfo  } = props
    return (
        <div className="login-plane">
            <div className="login-line">
                {
                    showUser(props)
                }
            </div>
            <div className="login-line">
                <Input 
                    prefix = { <Icon type='key' /> }
                    size={'large'} 
                    placeholder='密码' 
                    type='password' 
                    onChange={ (e) => { password(e) } } 
                /> 
            </div>
            <div className="login-line">
                <Checkbox >旧版登录</Checkbox>
            </div>
            <div className="login-line">
                <Button loading = { loginInfo.loading } type="primary" size={'large'} onClick={ () => {  login() } }>登 录</Button>
            </div>
        </div>
    )
}

function showUser(props:_props):any{
    const { username , loginInfo , newUserLogin } = props
    const { img, oldUserName,isNewUser} = loginInfo
    if(isNewUser){
        return (
            <Input 
                prefix = {<Icon type='user'  />}
                size={'large'} 
                placeholder='用户名' 
                onChange={ (e) => { username(e) } } 
            />
        )
    } else {
        return (
            <Tooltip placement="top" title={ '点击切换成新用户登录' }>
            <div className='username' onClick={ () => { newUserLogin() } }>
                <div className = 'img'>
                    <img src={ img } />
                </div> 
                <span>{ oldUserName }</span>
            </div>
            </Tooltip>
        )
    }
}

export default LoginUI

