import * as React from 'react';
import { LoginInfo } from '../../types'
import Jreap from '../../utils/core'
import axios from 'axios';
import LoginUI from "./view/pc";
import { mockLogin } from '../../mock';
import { connect } from 'react-redux';
import { getNewUserAction ,getLgoinInfoAction , setUserNameAction ,setPassWordAction} from './action'
import * as d3 from "d3";

mockLogin();


interface method {
    _getNewUser():void
    _getLoginInfo(userName:string | null):void
    _setUserName(e:any):void
    _setPassWord(e:any):void
}

interface _props extends LoginInfo , method{
    history?:any
    
}

let firstLogin:boolean = true

class Login extends React.Component<_props , LoginInfo> {
    public render(){
        const loginInfo:LoginInfo = {
            oldUserName:this.props.oldUserName,
            userName:this.props.userName,
            passWord:this.props.passWord,
            isNewUser:this.props.isNewUser,
            img:this.props.img,
            loading:this.props.loading
        }
        return (
            < LoginUI
                history = { this.props.history }
                username = { this.props._setUserName }
                password = { this.props._setPassWord }
                newUserLogin = { this.props._getNewUser }
                login = { this.login.bind(this) }
                loginInfo = { loginInfo }
            />
        )
    }
    public componentDidMount(){
        this.props._getLoginInfo(this.props.userName)
        const data = [12, 5, 6, 6, 9, 10];
    
        const svg = d3.select("#draw")
        .append("svg")
        .attr("width", 300)
        .attr("height", 400)
        .style("margin-left", 100);
                        
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 40 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
    }

    private login():void{
        const { oldUserName,isNewUser} = this.state;
        if(!isNewUser){
            this.setState({
                userName:oldUserName
            })
        }
        this.setState({
            loading:true
        })
        Jreap.setLocalAttr('userName',this.state.userName)
        axios({
            url:'/login.from',
            method: "POST",
            data:this.state
        }).then(res => {
           const { data } = res
           if(data.type === 'success'){
               setTimeout(() => {
                    this.setState({
                        loading:false
                    })
                    this.props.history.push('index')
               },1000)
           }
        }).catch(data => {
            console.log(data)
        })
        
    }
}

const mapStateToProps = (state:any):LoginInfo => {
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
		_getNewUser:():void => {
            const action = getNewUserAction(true);
			dispatch(action);
        },
        _getLoginInfo:(userName):void => {
            const action = getLgoinInfoAction(Jreap.getLocalAttr('username'))
            dispatch(action)
        },
        _setUserName:(e):void => {
            const action = setUserNameAction(e.target.value)
            dispatch(action)
        },
        _setPassWord:(e):void =>{
            const action = setPassWordAction(e.target.value)
            dispatch(action)
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


