import * as React from 'react'
import { Card,Tabs, } from 'antd';

const {TabPane}  = Tabs

const IndexUI: React.FC<any> = ({state}) => {

    return (
        <div className="container">
        <Card>
            {console.log(state)}
            <Tabs defaultActiveKey={state.tabDefaultKey}>
                {
                    state.tabComponents.map((item:any, index:number|null) => (
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