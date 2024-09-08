import React from 'react';
import { Layout } from 'antd';
import Navbar from "./Navbar"

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo" style={{ float: 'left', color: '#fff', fontSize: '24px' }}>
        YourLogo
      </div>
      <Navbar />
    </Header>
  );
};

export default AppHeader;
