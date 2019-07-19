import * as React from 'react';
import Jreap from '../../utils/core'
import axios from 'axios';
import LookUpUI from './ui'
import { _props , LookUpInfo } from './type';
import lookUpService from './service'

const qs = require('qs');

class LookUP extends React.Component<_props , LookUpInfo> {
    constructor(props:any) {
        super(props);
        this.state = {
            show:false,
            data:{

            }
        };
    }
    render (){
        return(
            <LookUpUI 
                search = { this.search.bind(this) }
                openSelectPanel = { this.state.show }
                onClose = { this.onClose.bind(this) }
                treeData = { this.state.data }
                onLoad = { this.onLoadData}
            />
        )
    }
    search():void{
        lookUpService.post('/web/right/util/findOrgTree.form', qs.stringify({
            isUnit: 2
        })).then(data =>{
            this.setState({
                data:data
            })       
        }).then(() => { 
            this.setState({
                show: true
            })
        })
    }
    onClose():void{
        this.setState({
            show: false
        })
    }
    onLoadData(treeNode:any):any{
        return (
            new Promise(resolve => {
                if(treeNode.props.dataRef.hasChild){
                    resolve();
                    return;
                }
                lookUpService.post('/web/right/util/findOrgTree.form', qs.stringify({
                    isUnit: 2,
                    id:treeNode.props.dataRef.id
                })).then(data => {
                    treeNode.props.dataRef.items = data
                    this.setState({
                        data : this.state.data
                    })
                    resolve();
                })
            })
        )
    }
    
}

export default LookUP