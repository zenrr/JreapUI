import * as React from 'react';
import { Icon , Tooltip , Drawer, Button} from 'antd';
import { _props } from './type';
import ScrollView from 'react-custom-scrollbars';
import SearchPanel from './searchPanel'

const LookUpUI= (props:any) => {
    return (
        <div className={ 'j-lookup' } >
            <div className={'lookup_palen'}> 
                <ScrollView >
                    <p>
                        <span>223</span>
                        <Icon type='close' style={{ fontSize: '8px', color: '#333333' }} />
                    </p>
                </ScrollView>
            </div>
            <div className={'search_icon'}>
                <Tooltip title="请选择">
                    <Icon type='search' onClick={ props.search } />
                </Tooltip>
            </div>
            <Drawer
                className = {'j_l_s_panel'}
                title="Basic Drawer"
                placement="right"
                visible={props.openSelectPanel}
                onClose={props.onClose}
                width={'50%'}
                bodyStyle={{height:'clac(100% - 108px)'}}
            >
                <SearchPanel 
                    treeData = { props.treeData }
                    onLoad = { props.onLoad }
                />
                <div
                    style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right',
                    }}
                >
                    <Button  style={{ marginRight: 8 }}>
                        清空
                    </Button>
                    <Button  type="primary">
                        提交
                    </Button>
                </div>
            </Drawer>
        </div>
    )
    
    
}

export default LookUpUI

