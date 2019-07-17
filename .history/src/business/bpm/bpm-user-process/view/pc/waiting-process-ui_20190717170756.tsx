import { Form, Icon, Input, Button, DatePicker, Row, Col, Card, Avatar, Typography, Pagination } from 'antd';
import React = require('react');

function hasErrors(fieldsError: { [x: string]: unknown; }) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const card: React.CSSProperties = {
    width: "19.3%", 
    marginRight: "10px", 
    marginBottom: "10px", 
    float: "left"
}

const desc: React.CSSProperties = {
    backgroundColor: "rgba(245,245,245,1)", 
    borderRadius: "2px", 
    marginTop: "10px",  
    padding: "5px"
}
const WaitingProcessUI: React.FC<any> = ({state}) => {
    
        return (
            // <div >
            //     <div style={{ top: "0", right: 0, position: "absolute" }}>
            //         <Form layout="inline">
            //             <Form.Item>
            //                 <RangePicker placeholder={["请选择开始时间", "请选择结束时间"]} />
            //             </Form.Item>
            //             <Form.Item>
            //                 <Input placeholder="请输入姓名" />
            //             </Form.Item>
            //             <Form.Item>
            //                 <Button type="primary" htmlType="submit">查询</Button>
            //             </Form.Item>
            //         </Form>
            //     </div>

            //     <div style={{marginLeft: "10px"}}>
            //         {
            //             array.map((value, index) => (
            //                 <div key={index} style={card}>
            //                     <Card size="small" 
            //                         title="行政办公" 
            //                         // extra={<a onClick={this.processTraces.bind(this, index)}><span className="icon iconfont">&#xec57;</span></a>}
            //                         >
            //                             <div style={{ overflow: "hidden", lineHeight: "36px" }}>
            //                                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            //                                 <span style={{ marginLeft: "5px", fontWeight: 600 }}>张三丰</span>
            //                                 <span style={{ marginLeft: "15px", float: "right", color: "#bfbfbf" }}>2019-07-15 14:18</span>
            //                             </div>
            //                             <a title="自身主动与他人做对比：同样一件事情，人家做到什么程度，你能做到什么程度，人家是怎么做的，你是怎么做的，总的来说，不比不知道，一比吓一跳。通过比较你就知道自己的思路，行动的差距在哪里。
            //                                     在反思中找到自己的短板：有时候做一个事情，不顺利，失败。这时候虽然很沮丧，但是如果能够在沮丧中反思自己，为什么会出现这样的错误，如果当时怎么样处理就会好一些，由此就知道缺少哪一方面的短板了。
            //                                     有一两个知己朋友也会起到很大的作用，虚心吸收朋友指出的问题，并珍惜你俩的基友吧
            //                                     专注于自己的领域的同时，也有扩宽自己的视野，涉猎不同领域渠道的信息自身主动与他人做对比：同样一件事情，人家做到什么程度，你能做到什么程度，人家是怎么做的，你是怎么做的，总的来说，不比不知道，一比吓一跳。通过比较你就知道自己的思路，行动的差距在哪里。
            //                                     在反思中找到自己的短板：有时候做一个事情，不顺利，失败。这时候虽然很沮丧，但是如果能够在沮丧中反思自己，为什么会出现这样的错误，如果当时怎么样处理就会好一些，由此就知道缺少哪一方面的短板了。
            //                                     有一两个知己朋友也会起到很大的作用，虚心吸收朋友指出的问题，并珍惜你俩的基友吧
            //                                     专注于自己的领域的同时，也有扩宽自己的视野，涉猎不同领域渠道的信息">
            //                                 <Paragraph ellipsis={{ rows: 3 }} style={desc}>
            //                                     自身主动与他人做对比：同样一件事情，人家做到什么程度，你能做到什么程度，人家是怎么做的，你是怎么做的，总的来说，不比不知道，一比吓一跳。通过比较你就知道自己的思路，行动的差距在哪里。
            //                                     在反思中找到自己的短板：有时候做一个事情，不顺利，失败。这时候虽然很沮丧，但是如果能够在沮丧中反思自己，为什么会出现这样的错误，如果当时怎么样处理就会好一些，由此就知道缺少哪一方面的短板了。
            //                                     有一两个知己朋友也会起到很大的作用，虚心吸收朋友指出的问题，并珍惜你俩的基友吧
            //                                     专注于自己的领域的同时，也有扩宽自己的视野，涉猎不同领域渠道的信息
            //                                 </Paragraph>
            //                             </a>
            //                             <Row gutter={12}>
            //                                 {/* <Col span={6}><Button size="small" block onClick={this.handle.bind(this, index)}>办理</Button></Col>
            //                                 <Col span={6}><Button size="small" block onClick={this.transfer.bind(this, index)}>转办</Button></Col>
            //                                 <Col span={6}><Button size="small" block onClick={this.increaseSign.bind(this, index)}>增签</Button></Col>
            //                                 <Col span={6}><Button size="small" block onClick={this.reduceSign.bind(this, index)}>减签</Button></Col> */}
            //                             </Row>
            //                     </Card>
            //                 </div>
            //             ))
            //         }
            //     </div>

            //     <div style={{ float: "right", marginRight: "10px" }}>
            //         <Pagination defaultCurrent={3} total={500} />
            //     </div>

            //     {/* <ProcessTraces visible={this.state.processTracesState.visible}></ProcessTraces> */}
            // </div>
    

    /**
     * 流程痕迹
     */
    // processTraces = (id: string, e: Event)=> {
    //     this.setState(
    //         {
    //             processTracesState: {
    //                 id: id,
    //                 visible: true
    //             }
    //         }
    //     );
    // } 

    /**
     * 办理
     */
    // handle = (id: string, e: Event)=> {
    //     this.setState(
    //         {
    //             handleState: {
    //                 id: id,
    //                 visible: true
    //             }
    //         }
    //     );
    // }

    /**
     * 转办
     */
    // transfer = (id: string, e: Event)=> {
    //     this.setState(
    //         {
    //             transferState: {
    //                 id: id,
    //                 visible: true
    //             }
    //         }
    //     );
    // } 

    /**
     * 增签
     */
    // increaseSign = (id: string, e: Event)=> {
    //     this.setState(
    //         {
    //             increaseSignState: {
    //                 id: id,
    //                 visible: true
    //             }
    //         }
    //     );
    // } 

    /**
     * 减签
     */
    // reduceSign = (id: string, e: Event)=> {
    //     this.setState(
    //         {
    //             reduceSignState: {
    //                 id: id,
    //                 visible: true
    //             }
    //         }
    //     );
    // } 
}

export default WaitingProcessUI;