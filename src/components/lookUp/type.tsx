export interface _props {
    onLoad():void
    treeData?:object
    search():void
    openSelectPanel?:boolean
    onClose():void
    onLoad():any
} 

export interface LookUpInfo{
    show:boolean;
    data:object;
}

export interface TreeDataInfo{
    name:string
    key:string
    hasChild:boolean
    [ propName : string ] : any, 
}