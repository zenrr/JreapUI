import * as React from 'react'
import { Card, Radio } from 'antd';

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
            <div className="boolbar" style={{ position: "absolute", top: "15px", left: "120px" }}>
                <div>左边工具栏</div>
            </div>
            <div className="searchbar" style={{ position: "absolute", top: "15px", right: "15px" }}>
                <div>右边搜索栏目</div>
            </div>
            <div className="body" style={{overflow: "hidden"}}>
                {
                    array.map((value, index) => (
                        <div style={{ width: "19%", margin: "8px", float: "left" }}>
                            <Card 
                                title="行政办公" 
                                extra={<Checkbox onChange={onChange}>Checkbox</Checkbox>}>
                                <p style={{marginBottom: "0", backgroundColor: "#EBF3FF", padding: "10px"}}>
                                    <span style={{marginRight: "5px"}}>流程名称: </span>
                                    自身主动与他人做对比：同样一件事情，人家做到什么程度，你能做到什么程度，人家是怎么做的，你是怎么做的，总的来说
                                </p>
                                <div className="item right" style={{margin: "5px 0"}}>
                                    <span style={{color: "#666666", marginRight: "5px"}}>版本:2.0</span>
                                    <span style={{color: "#ACACAC"}}>2018-10-15 11:35</span>
                                </div>
                                <div className="right" style={{clear: "both"}}>
                                    <span>图标1</span>
                                    <span>图标2</span>
                                    <span>图标3</span>
                                    <span>图标4</span>
                                    <span>图标5</span>
                                </div>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BpmProcessModelIndexUI