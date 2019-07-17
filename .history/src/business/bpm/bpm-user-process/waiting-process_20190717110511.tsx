import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc';

class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcessUI >
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

export default WaitingProcess;