import * as React from 'react';
import { connect } from 'react-redux';
import { BpmProcessTracesState } from '../../../types/bpm';
import WaitingProcessUI from './view/pc/index-pc';

interface method {
    createPanel(): void 
}
class WaitingProcess extends React.Component {

    render() {
        return (
            <WaitingProcessUI state = {this.props}/>
        );
    }
}

const mapStateToProps = (state:any): BpmProcessTracesState => {
    const { BpmProcessTracesState }  = state.bpmReducer;	
    return {
       return null
	}
}

//store.dispatch, props
const mapDispatchToProps = (dispatch:any): method => {
	return {
		createPanel:():void => {}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingProcess);