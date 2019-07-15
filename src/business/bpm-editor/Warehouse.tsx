import * as React from 'react'
import { DragPreviewImage , useDrag } from 'react-dnd'
import { Collapse } from 'antd';
import type ,{p, s, WarehouseProse} from './type'
import Item from 'antd/lib/list/Item';
import BpmAction from './bpmAction'
var  knightImage = require('../../assets/images/menuIcon/tang.png')

const { Panel } = Collapse;

interface BoxMap {
    [key: string]: { top: number; left: number; title: string }
  }
  
const Warehouse: React.FC<WarehouseProse> = ({callBack}) => {
    return (
        <Collapse defaultActiveKey={['1']} onChange={callBack}>
            <Panel header="This is panel header 1" key="1">
                <BpmAction />
                <BpmAction />
            </Panel>
        </Collapse>
        
    )
}

export default Warehouse