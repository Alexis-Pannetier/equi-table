import React, { Component } from 'react'
import { Col, Row } from 'antd';

export class Screen extends Component {
    render() {
        const { children } = this.props;
        return (
            <Row justify='center' align='middle' {...this.props}>
                <Col>
                    <Row className='content' justify='center' align='middle' gutter={[0, 32]}>
                        {children}
                    </Row>
                </Col>
            </Row>
        )
    }
}
