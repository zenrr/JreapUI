import * as React from 'react'
import { Card,Tabs, } from 'antd';

const {TabPane}  = Tabs

const IndexUI: React.FC<any> = ({state}) => {
    
    return (
        <div className="container">
        <Card>
            <Tabs defaultActiveKey={String(state.TabDefaultKeyState)}>
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

export default IndexUI