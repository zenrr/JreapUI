import axios from 'axios'
import createMessage from '../../message';

export function onGetLogin(_this:any){
    return new Promise((resolve, reject) => {
        let info  = _this.getSessionAttr('loginInfo');
        if(info)
        {
            info = JSON.parse(info);
            resolve(info);
        }
        // android 环境下 渲染视图限制了 异步加载，
        axios({
            url: _this.rootPath+"web/right/auth/loginInfo.form",
            method: "POST",
        }).then((data:any) => {
            if(data.account === null){
                // alert('获取用户信息失败');
                // console.log('获取用户信息失败');
                createMessage({

                })
                window.top.location = _this.rootPath+"web/login.jsp" as any;
                return null;
            }
            _this.setSessionAttr('loginInfo',JSON.stringify(data));
            return data;
        }).catch((e) => {
            window.top.location = _this.rootPath+"web/login.jsp"  as any;
            return null;
        });
    })
}

export function getVariable(_this:any){
    return new Promise((resolve, reject) => {
        let info = _this.getSessionAttr('system_variable');
        if(info)
        {
            
            info = JSON.parse(info);
            resolve(info);
        }
        // android 环境下 渲染视图限制了 异步加载，
        axios({
            url: _this.rootPath+"web/pubvariable/getVariable.form",
            method: "POST"
        }).then((data:any) =>{
            if(data.applicationName === null){
                createMessage({
                    
                })
                return null;
            }
            _this.setSessionAttr('system_variable',data);
            return data;
        }).catch((e) => {
            window.top.location = _this.rootPath+"web/login.jsp" as any;
            return null;
        });
    })
}

export function getVariableByKey(_this:any){
    return _this.getVariable().then()
}