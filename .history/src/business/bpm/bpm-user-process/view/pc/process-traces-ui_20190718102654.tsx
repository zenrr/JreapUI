import * as React from 'react'
import { Card, Drawer, Row, Col } from 'antd';

const ProcessTracesUI: React.FC<any> = ({state}) => {
    return (
        <Drawer
                title="流程痕迹"
                placement="right"
                closable={true}
                onClose={state.onClose}
                width={800}
                visible={state.visible}
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
    )
}

export default ProcessTracesUI