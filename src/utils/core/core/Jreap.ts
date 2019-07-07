import { JreapInstance ,Joiner } from '../../../types/jreap' ;
import * as base from '../helpers/base';
import * as action from '../helpers/action';
import * as load from '../helpers/load';

export default class Jreap implements JreapInstance {

	version : string
	about:string
	dataType :string
	projectName : string // 项目部署时， 根据实际情况调整
	rootPath :string
	jsEngine:string // RA (react+ant), BAKUI (bootstrap+angular+kendo) , TOPUI( jreap3 ，jreap2使用的js库 ) ，KENDO( 纯kendo );
	ORGAN_ASYNC:boolean // 机构异步加载，默认同步加载
	curSystemName:string // 默认当前系统名字
	businessSystemId:string // 业务系统ID
	applicationName:string // 应用名称
	applicationVersion:string // 应用版本
	skinStyle:string // 风格皮肤
	scriptsArray:any
	devMode:boolean // 默认开发模式 ，自动添加timestamp到 js css中
	timestamp:number
	showMask:boolean // ajax显示正在加载的遮罩，全局控制
	
	constructor(){
		this.version = '6.0';
		this.about = 'JReap基础js库';
		this.dataType = 'json';
		this.projectName = '' ;
		this.rootPath = '';
		this.jsEngine = 'RA' ;
		this.ORGAN_ASYNC= false;
		this.curSystemName = '';
		this.businessSystemId = '';
		this.applicationName = '';
		this.applicationVersion = ''; 
		this.skinStyle = 'MacUI';
		this.scriptsArray = new Array();
		this.devMode = false;
		this.timestamp = new Date().getTime();
		this.showMask = true
		this._initJReap();
	}

	/**
	 * 获取rootPath
	 */
	private _getRootPath():string{
		if (this.rootPath.length === 0) {
			let js=document.scripts;
			let appCoreSrc = "__build__/extend.js";
			for(let i=0;i<js.length;i++){
				 if(js[i].src.indexOf(appCoreSrc)>-1){
					 this.rootPath=js[i].src.substring(0,js[i].src.lastIndexOf(appCoreSrc));
				   break;
				 }
			}
		}
		return this.rootPath;
	}

	// 初始化,配置信息
	private _initJReap()
	{
		this._getRootPath();
		this.configSkinStyle();
		// 其他设定
	};

	
	getSimpleName(name:string,oldJoiner:Joiner,newJoiner:Joiner) : string | null{
		return base.getSimpleName(name,oldJoiner,newJoiner);
	}

	
	getQueryVal (name:string): string | null {
		return base.getQueryVal(name);
	}

	
	getRandomParam():string {
		return base.getRandomParam();
	}
	
	
	removeSessionAttr(key:string){
		base.removeSessionAttr(key);
	}
	
	getSessionAttr(key:string):string | null{
		return base.getSessionAttr(key);
	}

	
	setSessionAttr(key:string,val:any):void
	{
		base.setSessionAttr(key ,val);
	}

	
	setLocalAttr(key:string,val:any):void{
		base.setLocalAttr(key,val);
	}

	getLocalAttr(key:string):string | null  // 获得localStorage某项 值
	{
		return base.getLocalAttr(key);
	}

	removeLocalAttr(key:string):void // 设置localStorage某项的值
	{
		base.removeLocalAttr(key);
	}

	mask(msgContent?:any):void{
		action.mask(msgContent);
	}
	
	unmask():void{
		action.unmask();
	}

	addCookie(name:string,val:string,expiresHours:number):void{
		base.addCookie(name,val,expiresHours);
	}

	getCookie(name:string):string{
		return base.getCookie(name);
	}

	configSkinStyle(skinName?:string):void{
		const _this:any = this
		base.configSkinStyle(_this,skinName);
	}

	IncludeCSS(fileUrl:string, sId:string):void{
		
		load.IncludeCSS(fileUrl,sId)
	}

    loadPlugin(version:string):void{
		const _this:any = this;
		load.loadPlugin(_this,version)
	}
}

