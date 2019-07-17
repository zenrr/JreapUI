import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc';

class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcessUI />
        );
    }
}

export default WaitingProcess;