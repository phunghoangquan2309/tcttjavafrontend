import React from 'react'
import { Layout, Menu, Breadcrumb, Row,Col,Card } from 'antd';
import FormInfor from './FormInfor';
const { Header, Content, Footer } = Layout;
function FormInforPage() {
    return (
        <Row  justify="center" align="middle" style={{minHeight: '100vh'}}>

            <Col span={8} >
            <Card style={{ width: 700,height:800}}>
                <Row  justify="center" align="middle" style={{minHeight: '80vh',minWidth:'100vh'}} >
                    <Col span={23} >
                        <FormInfor/>  
                    </Col>
                </Row>
            </Card>     
            </Col>
            
        </Row>
    )
}

export default FormInforPage
