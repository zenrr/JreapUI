import * as React from 'react';

class Container extends React.Component {

    constructor(props:any) {
        super(props);
        this.state = {
            show:false,
            data:{

            }
        };
    }
    render () {
        return(
            render (){
                return(
                    <LookUpUI 
                        search = { this.search.bind(this) }
                        openSelectPanel = { this.state.show }
                        onClose = { this.onClose.bind(this) }
                        treeData = { this.state.data }
                        onLoad = { this.onLoadData}
                    />
                )
            }
        )
    }
}

export default Container