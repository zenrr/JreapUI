import React = require('react');
import { Form, Icon, Input, Button, DatePicker, Row, Col, Card, Avatar, Typography, Drawer } from 'antd';

interface method {
    switchProcessTraceUI(): void,
    switchProcessHandleUI(): void,
    SWitchProcesstransferUI():void,
}
class ProcessTraces extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = { 
            visible: false
         };
         
    }

    render() {
        return (
            <Drawer
                title="流程痕迹"
                placement="right"
                closable={true}
                onClose={this.onClose}
                width={800}
                visible={this.props.visible}
            >
          <div>
              <Card>

              </Card>
              <Row gutter={12}>
                  <Col span={8}>来自</Col>
                  <Col span={8}>执行情况</Col>
                  <Col span={8}>去向</Col>
              </Row>
          </div>
        </Drawer>
        );
    }

    onClose = () => {
        this.setState({
          visible: false,
        });
    };
}

export default ProcessTraces;