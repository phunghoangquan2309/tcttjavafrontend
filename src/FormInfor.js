import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import callAPI from './ApiCall/ApiCaller'
import './index.css';
import { useHistory } from 'react-router-dom';
import { Form, Input, InputNumber, Button, message } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */


/* eslint-enable no-template-curly-in-string */

const FormInfor = () => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log(values);
    callAPI("add", "POST", values)
      .then((res) => {
        message.success("Gửi thành công")
        history.push('/display');
      })
      .catch((err) => { message.error("Gửi không thành công") })
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ paddingRight: 300, fontSize: 50 }}>Liên hệ</h1>
      </div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} >
        <Form.Item name={'name'} placeholder="quan" >
          <Input placeholder="Họ tên" />
        </Form.Item>
        <Form.Item name={'email'} >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name={'phone'} >
          <Input placeholder="Điện thoại" />
        </Form.Item>
        <Form.Item name={'content'} >
          <Input.TextArea placeholder="Nội dung" autoSize={{ minRows: 10, maxRows: 20 }} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ paddingRight: 50 }}>
          <Button type="primary" htmlType="submit" style={{ background: "purple", borderColor: "purple" }}>
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormInfor