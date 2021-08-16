import {React,useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { message, Table } from 'antd';
import callAPI from './ApiCall/ApiCaller';

const columns = [
  {
    title: 'Họ tên',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Nội dung',
    dataIndex: 'content',
  },
];

function TableInfor() {
    const [list, setlist] = useState([])
    useEffect(() => {
      callAPI("getlist","GET",null).then((res)=>{
        setlist(res.data)
      }).catch((err)=>{
        message.warning("lỗi")
      })

    }, []);
    return (
        <Table columns={columns} dataSource={list}  /> 
    )
}

export default TableInfor
