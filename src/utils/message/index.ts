import { JreapMessage , JreapMessagePromise } from '../../types/jreap'
import  './index.scss'

export default function createMessage(data:JreapMessage):JreapMessagePromise{
    return new Promise((resolve, reject) => {
        const jInfo:any = document.getElementsByClassName('jInfo');
        if(jInfo && jInfo.length === 0){
            let { msg , type , isAnimation, animation , top , left } = data;
            if(type && animation){
                return 
            }
            let _Html;
            if(animation && animation){
                _Html = "<a class='j-message"+ animation + "' style='z-index:9999;'></a>"
            } else {
                _Html = "<div class='j-message "+ type  +"' style='z-index:9999;'><i class ='iconfont icon-k-i-stop'></i>"+ msg + "</div>"
            }
            let element:HTMLElement = document.createElement("div");
            element.className = "alert jInfo"
            element.innerHTML = _Html;
            element.style.position = "fixed";
            element.style.top =  (top) ? top : "45%";
            element.style.right = (left) ? left : "45%";
            element.style.zIndex= '10003';
            document.body.appendChild(element);
            // 一秒以后关闭
            setTimeout(() => {
                for (let i:number = 0; i < jInfo.length; i++) {
                    // 删除元素 
                    if (jInfo[i] != null){
                        jInfo[i].parentNode.removeChild(jInfo[i]);
                    }
                     
                }
            }, 4000)
        }
    })
} 