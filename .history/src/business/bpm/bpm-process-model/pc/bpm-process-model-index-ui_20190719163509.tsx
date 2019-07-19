import * as React from 'react'
import { Card } from 'antd';

const BpmProcessModelIndexUI: React.FC<any> = ({ state }) => {

    return (
        <div className="container">
            <Card title="流程模型管理" extra={<a href="#">More</a>}>
                <div className="toolbar">
                    <div>左边</div>
                    <div>右边</div>
                </div>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default BpmProcessModelIndexUI