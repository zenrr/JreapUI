import * as React from 'react'
import { Card,Tabs, } from 'antd';

const {TabPane}  = Tabs

const IndexPC: React.FC<any> = ({state}) => {
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

export default IndexPC