import * as React from 'react'
import { Card } from 'antd';

const BpmProcessModelIndexUI: React.FC<any> = ({ state }) => {

    return (
        <div className="container">
            <Card title="流程模型管理" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <div>
                    
                </div>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default BpmProcessModelIndexUI