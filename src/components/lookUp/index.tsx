import * as React from 'react';
import Jreap from '../../utils/core'
import axios from 'axios';
import LookUpUI from './ui'
import { _props , LookUpInfo } from './type';
import lookUpService from './service'
import { any } from 'prop-types';

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
                onLoad = { this.onLoadData }
            />
        )
    }
    search(){
        lookUpService.post('/web/right/util/findOrgTree.form', qs.stringify({
            isUnit: 2
        })).then(data =>{
            this.setState({
                show: true,
                data:data
            })       
        }).then(() => { 
            this.setState({
                show: true
            })
        })
    }
    onClose(){
        this.setState({
            show: false
        })
    }
    onLoadData = treeNode =>
    new Promise(resolve => {
        if(!treeNode.props.dataRef.hasChild){
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
}

export default LookUP