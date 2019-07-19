import * as React from 'react'
import { Card,Tabs, } from 'antd';

const {TabPane}  = Tabs

const ProcessTracesUI: React.FC<any> = ({state}) => {
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
    </div>
    )
}

export default ProcessTracesUI