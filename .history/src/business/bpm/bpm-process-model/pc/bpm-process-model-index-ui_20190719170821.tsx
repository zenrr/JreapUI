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
            <div className="title">
                <h3>流程模型管理</h3>
            </div>
            <div className="boolbar" style={{position: "absolute", top: "15px", left: "120px"}}>
                <div>左边工具栏</div>
            </div>
            <div className="boolbar" style={{position: "absolute", top: "15px", left: "120px"}}>
                <div>左边工具栏</div>
            </div>
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