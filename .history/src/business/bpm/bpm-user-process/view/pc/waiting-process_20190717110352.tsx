import { Form, Icon, Input, Button, DatePicker, Row, Col, Card, Avatar, Typography, Pagination } from 'antd';
import React = require('react');
import ProcessTraces from './process-traces';

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
class WaitingProcessUI extends React.Component {

    state = {
        defaultActiveKey: "0", 
        processTracesState: {id: '', visible: false, openType: 1},
        handleState: {id: '', visible: false, openType: 1},
        transferState: {id: '', visible: false, openType: 1},
        increaseSignState: {id: '', visible: false, openType: 1},
        reduceSignState: {id: '', visible: false, openType: 1}
    };

    render() {
        return (
            <IndexUI state = {this.props}/>
        );
    }

    /**
     * 流程痕迹
     */
    processTraces = (id: string, e: Event)=> {
        this.setState(
            {
                processTracesState: {
                    id: id,
                    visible: true
                }
            }
        );
    } 

    /**
     * 办理
     */
    handle = (id: string, e: Event)=> {
        this.setState(
            {
                handleState: {
                    id: id,
                    visible: true
                }
            }
        );
    }

    /**
     * 转办
     */
    transfer = (id: string, e: Event)=> {
        this.setState(
            {
                transferState: {
                    id: id,
                    visible: true
                }
            }
        );
    } 

    /**
     * 增签
     */
    increaseSign = (id: string, e: Event)=> {
        this.setState(
            {
                increaseSignState: {
                    id: id,
                    visible: true
                }
            }
        );
    } 

    /**
     * 减签
     */
    reduceSign = (id: string, e: Event)=> {
        this.setState(
            {
                reduceSignState: {
                    id: id,
                    visible: true
                }
            }
        );
    } 
}

export default WaitingProcessUI;