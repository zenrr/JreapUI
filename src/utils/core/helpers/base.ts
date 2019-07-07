import { Joiner } from "../../../types/jreap";
import createMessage from '../../message' ;
/**
 * 
 * @param name 
 * @param oldJoiner 
 * @param newJoiner 
 * 替换连接符
 */
export  function getSimpleName(name:string, oldJoiner:Joiner, newJoiner:Joiner):string | null{
    if(!name)
    {
        alert("给定的名称不正确");
        return null;
    }
    const strs = name.split(oldJoiner);			 
    
    return strs.join(newJoiner);
}

/**
 * 获取URL参数
 * 
 * @param name 参数名
 *            
 * @returns string
 */
export function getQueryVal(name:string): string|null {
    let str = decodeURI(window.location.search);
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = str.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    } else {
        return null;
    }
}

/**
 * 生成随机数 ，避免url加载时cache
 */
export function getRandomParam():string{
    let randomString = "_req_seq_random=";
    for ( let i = 0; i < 15; i++) {
        randomString += Math.floor(Math.random() * 10);
    }
    return randomString;
}

/**
 * 
 * @param key 
 * 删除session值
 */
export function removeSessionAttr(key:string):void{
    if( sessionStorage && key )
    {
        sessionStorage.removeItem(key);
    }
}


/**
 * 
 * @param key 
 * 获取session值
 */
export function getSessionAttr(key:string):string | null{
    if(sessionStorage&&key)
    {
        return sessionStorage.getItem(key);
    }
    return null;
}

/**
 * 
 * @param key 
 * @param val 
 * 修改session值
 */
export function setSessionAttr(key:string,val:any):void{
    if( sessionStorage && key )
    {
        // TODO 序列化
        if( val instanceof Object && JSON )
        {
            val = JSON.stringify( val );
        }
        sessionStorage.setItem( key , val );
    }else
    {
        // 失败
        createMessage({
            msg:"dasdas"
        })
    }
}

/**
 * 
 * @param key 
 * @param value 
 * 设置本地local
 */
export function setLocalAttr(key:string,val:any):void{
    try
    {
        localStorage.setItem(key,val);
    } catch (e) {
        if(e.name === 'QuotaExceededError'){
            createMessage({
                msg:"dasdas"
            })
            // 如果历史信息不重要了，可清空后再设置
            localStorage.clear();
            localStorage.setItem(key,val);
        }
    }
}

/**
 * 
 * @param key 
 * 获得local值
 */
export function getLocalAttr(key:string):string | null{
    return localStorage.getItem(key);
}

/**
 * 
 * @param key 
 * 删除local值
 */
export function removeLocalAttr(key:string):void{
    try{
        localStorage.removeItem(key);
    }catch(e){
        // TODO
    }
}

/**
 * 
 * @param name 
 * @param value 
 * @param expiresHours 
 * 添加cooker
 */
export function addCookie(name:string,value:string,expiresHours:number):void{
    let cookieString:string=name+"="+escape(value); 
    // 判断是否设置过期时间
    if(expiresHours>0){ 
    let date:Date=new Date(); 
    date.setTime(date.getTime()+expiresHours*3600*1000); 
    cookieString=cookieString+"; expires="+ date.toUTCString(); 
    } 
    document.cookie = cookieString; 
}

/**
 * 
 * @param name 
 * 获得cookie
 */
export function getCookie(name:string):string{
    let strCookie=document.cookie; 
    let arrCookie=strCookie.split("; "); 
    for(let i=0;i<arrCookie.length;i++){ 
        let arr=arrCookie[i].split("="); 
        if(arr[0] === name)
        {
            return arr[1];
        } 
    } 
    return ""; 
}

/**
 * 
 * @param skinName 
 * @param _this // Jreap类的this
 * 配置界面风格
 * 
 */
export function configSkinStyle(_this:any,skinName?:string):void{
    if(typeof(skinName) === "undefined"){
        _this.skinStyle  = _this.getCookie("skinName") || "newskin";
    }else{
        _this.skinStyle= skinName; 
        _this.addCookie("skinName",skinName,0); 
    }
}