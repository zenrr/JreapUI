import * as React from 'react';
import { Icon , Tooltip , Tree , Table, Divider, Tag  } from 'antd';
import { _props , LookUpInfo ,TreeDataInfo } from './type';
import ScrollView from 'react-custom-scrollbars';
import { LookUp_Table, List_Panel } from './style';

const { TreeNode } = Tree;

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width:'10%'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width:'33%'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

class SearchPanel extends React.Component<_props , LookUpInfo> {
    constructor(props:any) {
        super(props);
    }
    onSelect = (selectedKeys:[], info:any) => {
        console.log('selected', selectedKeys, info);
    };

    onCheck = (checkedKeys:[], info:any) => {
        console.log('onCheck', checkedKeys, info);
    };

    render (){
        return(
            <React.Fragment>
                <ScrollView
                    style={{ width: '20%', height: '100%' ,float:'left'}}
                >
                    <Tree 
                        showLine
                        onSelect={this.onSelect}
                        onCheck={this.onCheck}
                        loadData= { this.props.onLoad }
                    >
                        {this.renderTreeNodes((this.props as any).treeData)}
                    </Tree>
                </ScrollView>
                <LookUp_Table>
                    <div style={{height:'calc(100% - 130px)'}}>
                        <Table 
                            dataSource={dataSource} 
                            columns={columns} 
                            scroll={{x:false,y:'calc(100vh - 520px)'}}
                            bordered
                            size="small"
                        >
                        </Table>
                    </div>
                    <List_Panel>
                        <ScrollView
                            style={{  height: '100%' }}
                        >
                            
                        </ScrollView>
                    </List_Panel>
                </LookUp_Table>
            </React.Fragment>
        )
    } 
    renderTreeNodes(data:TreeDataInfo):any{
        return (
            data.map( (item:TreeDataInfo) => {
                if ( item.hasChild ) {
                    return (
                    <TreeNode title={item.name} key={item.key} dataRef={item} >
                        {this.renderTreeNodes(item.items)}
                    </TreeNode>
                    );
                }
                return <TreeNode title={item.name} key={item.key} dataRef={item}   />;
            })
        )
    }
    
}

export default SearchPanel