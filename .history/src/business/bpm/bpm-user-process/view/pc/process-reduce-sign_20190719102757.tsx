import * as React from 'react'
import { Card, Drawer, Row, Col } from 'antd';

const HandleReduceSignUI: React.FC<any> = ({data, visible, closeMethod}) => {
    return (
        <Drawer
                title="流程增签"
                placement="right"
                closable={true}
                width={800}
                onClose={closeMethod}
                visible={visible}
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

export default HandleReduceSignUI