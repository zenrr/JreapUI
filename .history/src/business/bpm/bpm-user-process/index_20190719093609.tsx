import * as React from 'react';
import IndexUI from './view/pc/index-ui';
import waitingProcess from './waiting-process';
import HandledProcess from './handled-process';
import MyStartProcess from './my-start-process';

class Index extends React.Component  {

    state = {
        tabDefaultKey: "0",
        tabComponents: [
            {
                title: "待办",
                component: waitingProcess
            },
            {
                title: "已办",
                component: HandledProcess
            },
            {
                title: "我发起的流程",
                component: MyStartProcess

            }
        ]
    }

    render() {
        return (
           <IndexUI state={this.state}/>
        );
    }
}

export default Index;