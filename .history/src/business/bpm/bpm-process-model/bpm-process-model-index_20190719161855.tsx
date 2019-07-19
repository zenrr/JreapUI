import * as React from 'react';
import { connect } from 'react-redux';
import { BpmUserProcessState } from '../../../types/bpm';

class BpmProcessModelIndex extends React.Component  {

    render() {
        return (
           <BpmProcessModelIndexUI props={this.props}/>
        );
    }
}

const mapStateToProps = (props:any): BpmUserProcessState => {
    const { TabDefaultKeyState, UserProcessTabComponnetState }  = state.bpmReducer;	
    return {
        TabDefaultKeyState: TabDefaultKeyState,
        UserProcessTabComponnetState: UserProcessTabComponnetState
	}
}

//store.dispatch, props
const mapDispatchToProps = (dispatch:any): void => {
}

export default BpmProcessModelIndex;