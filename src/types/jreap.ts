export type Joiner = '_' | '-'
export type InfoType = 'warning' | 'error' | 'success' | 'info' | 'message' | 'prompt'
export type Animation = ' FADE-IN ' | ' FADE-OUT ' | 'SUCCESS' | 'ERROR' 

export interface JreapInstance {
    version : string
	about:string
	dataType :string
	projectName : string
	rootPath :string
	jsEngine:string
	ORGAN_ASYNC:boolean
	curSystemName:string
	businessSystemId:string
	applicationName:string
	applicationVersion:string
	skinStyle:string
	scriptsArray:any
	devMode:boolean
	timestamp:number
    showMask:boolean
    getSimpleName(value:string,oldJoiner:Joiner,newJoiner:Joiner):any
    getRandomParam():string
    getQueryVal(name:string): string | null
    removeSessionAttr(key:string):void
    getSessionAttr(key:string):string|null
    setLocalAttr(key:string,val:any):void
    getLocalAttr(key:string):string|null
    addCookie(name:string,val:string,expiresHours:number):void
    getCookie(name:string):string
    configSkinStyle(skinName?:string):void
    IncludeCSS(fileUrl:string, sId:string):void
    loadPlugin(_this:any,version:string):void
}

export interface JreapMessage {
    msg?:string
    type?:InfoType
    isAnimation?:boolean
    animation?:Animation
    top?:string
    left?:string
    callBack?:any
}

export interface JreapMessagePromise extends Promise<JreapMessage>{

}

