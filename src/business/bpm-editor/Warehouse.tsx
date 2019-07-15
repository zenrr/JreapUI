import * as React from 'react'
import { DragPreviewImage , useDrag } from 'react-dnd'
import { Collapse } from 'antd';
import type ,{p, s, WarehouseProse} from './type'
import Item from 'antd/lib/list/Item';
var  knightImage = require('../../assets/images/menuIcon/tang.png')

const { Panel } = Collapse;

interface BoxMap {
    [key: string]: { top: number; left: number; title: string }
  }
  
const Warehouse: React.FC<WarehouseProse> = ({callBack}) => {
    const [boxes, setBoxes] = React.useState<BoxMap>({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
      })

    const moveBox = React.useCallback(
        (id: string, left: number, top: number) => {
          setBoxes(
            update(boxes, {
              [id]: {
                $merge: { left, top },
              },
            }),
          )
        },
        [boxes],
      )

    const [{ isDragging }, drag, preview] = useDrag({
        item:{type:"2131"},
        end: (dropResult?: { name: string }) => {
          if (dropResult) {
            alert(`You dropped ${name} into ${dropResult.name}!`)
          }
        },
        collect:monitor => ({ 
          isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0.4 : 1
    return (
        <Collapse defaultActiveKey={['1']} onChange={callBack}>
            <Panel header="This is panel header 1" key="1">
                <DragPreviewImage connect={preview} src={knightImage} />
                <p ref={drag}>dsa</p>
            </Panel>
        </Collapse>
        
    )
}

export default Warehouse