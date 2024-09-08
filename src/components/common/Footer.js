import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      @{new Date().getFullYear()} Your Company Name
    </Footer>
  );
};

export default AppFooter;
