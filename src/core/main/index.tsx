import * as React from 'react';
import Jreap from '../../utils/core'
import axios from 'axios';
import MainUI from "./view/pc";
import { mockLogin } from '../../mock';
import { connect } from 'react-redux';

mockLogin();

interface _props{

}

interface mainInfo {

}

interface method {
}

let firstLogin:boolean = true

class Login extends React.Component<_props , mainInfo> {
    public render(){
        return (
            < MainUI
                
            />
        )
    }
   
}

const mapStateToProps = (state:any):mainInfo => {
    const { loginReducer }  = state;
	return {
        oldUserName:loginReducer.oldUserName,
        userName:loginReducer.userName,
        passWord:loginReducer.passWord,
        isNewUser:loginReducer.isNewUser,
        img:loginReducer.img,
        loading:loginReducer.loading
	}
}

//store.dispatch, props
const mapDispatchToProps = (dispatch:any):method => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


