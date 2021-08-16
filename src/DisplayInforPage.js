import { Col, Row } from 'antd'
import React from 'react'
import TableInfor from './TableInfor'

function DisplayInforPage() {
    return (
        <Row  justify="center" align="middle" style={{minHeight: '100vh'}}>

        <Col span={8} >
            <TableInfor/>  
        </Col>
        
    </Row>
    )
}

export default DisplayInforPage
