import React from "react";

import {  Menu } from "antd";

import { Link} from "react-router-dom"

export default function Navbar() {
  
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px', float: 'right' }}>
        <Menu.Item key="0">
          <Link to="/">Home</Link>
        </Menu.Item>
        
        <Menu.Item key="1">
          <Link to="https://srinivas-gundali.vercel.app/" target="_blank">Contact</Link>
        </Menu.Item>
      </Menu>
  );
}