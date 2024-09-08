import React from 'react';
import { Layout,  Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import './AppFooter.css'; // Import your CSS file for additional styling

const { Footer } = Layout;

const AppFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          © {new Date().getFullYear()} . All Rights Reserved.
        </div>
        <Button 
          className="scroll-to-top" 
          icon={<ArrowUpOutlined />} 
          onClick={handleScrollToTop}
        >
          Back to Top
        </Button>
      </div>
      <div className="footer-line" />
    </Footer>
  );
};

export default AppFooter;
