import * as React from 'react'
import { Card } from 'antd';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const card: React.CSSProperties = {
    width: "19.3%", 
    marginRight: "10px", 
    marginBottom: "10px", 
    float: "left"
}

const BpmProcessModelIndexUI: React.FC<any> = ({ state }) => {

    return (
        <div className="container">
            <h3></h3>
            {/* <Card title="流程模型管理" extra={<a href="#">More</a>}>
                <div className="toolbar">
                    <div>左边</div>
                    <div>右边</div>
                </div>
                {
                    array.map((value, index) => (
                        <div key={index} style={card}></div>
                    ))
                }
            </Card> */}
        </div>
    )
}

export default BpmProcessModelIndexUI