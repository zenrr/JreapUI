import * as React from 'react'
import { Card, Drawer, Row, Col } from 'antd';

const ProcessTracesUI: React.FC<any> = ({id, visible}) => {
    return (
        <Drawer
                title="流程痕迹"
                placement="right"
                closable={true}
                width={800}
                visible={visible}
            >
            <div>
                {console.log(visible)}
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