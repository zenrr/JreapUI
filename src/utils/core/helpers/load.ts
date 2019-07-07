import { STYLE_BLUE , STYLE_RED, STYLE_MACUI }  from '../config/css-conifg'
/**
 * 
 * @param fileUrl 
 * @param sId 
 * 加载CSS
 */
export  function IncludeCSS(fileUrl:string, sId:string):void{
    if (!document.getElementById(sId)) {
        const oHead = document.getElementsByTagName('HEAD').item(0);
        const oLink = document.createElement("link");
        oLink.rel = "stylesheet";
        oLink.type = "text/css";
        oLink.id = sId;
        oLink.href = fileUrl;
        if(oHead){
            oHead.appendChild(oLink);
        }
    }
}

/**
 * 
 * @param _this 
 * @param version
 * 加载基础样式 
 */
export function loadPlugin(_this:any,version:string):void{
    var _style = _this.getQueryString("style");
    if(!_style || _style == null){
        _style = "blue"
    }
    _this.IncludeCSS("assets/lib/kendo/styles/kendo.common.min.css", "kendo.web.min.style");
    switch(_style){
        case 'blue':
            _this.IncludeCSS(STYLE_BLUE.url, STYLE_BLUE.id);
        case 'red':
            _this.IncludeCSS(STYLE_RED.url, STYLE_RED.id);
        case 'MACUI':
            _this.IncludeCSS(STYLE_MACUI.url, STYLE_MACUI.id);
    }
    
}