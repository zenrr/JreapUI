import * as React from 'react'
import { Collapse,Card,Tabs, } from 'antd';

const {TabPane}  = Tabs

interface BoxMap {
    [key: string]: { top: number; left: number; title: string }
  }
  
const BPMUserUI: React.FC<any> = ({state}) => {
    return (
        <div className="container">
        <Card>
            <Tabs defaultActiveKey={state.TabDefaultKeyState}>
                {
                    state.UserProcessTabComponnetState.map((item:any, index:number|null) => (
                        <TabPane tab={item.title} key={String(index)}>
                            <item.component></item.component>
                        </TabPane>
                    ))
                }
            </Tabs>
        </Card>
    </div>
    )
}

export default BPMUserUI