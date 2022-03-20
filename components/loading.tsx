import { Row, Spin } from 'antd'
import React from 'react'

const Loading = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <Row justify="center" align="middle">
                <Spin size='large' />
            </Row>
            <Row style={{fontSize: '22px', color:'#35ADDD'}} justify="center" align="middle">
                Loading...
            </Row>
        </div>
    )
}

export default Loading