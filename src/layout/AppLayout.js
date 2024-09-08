import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "../components/common/Header";

const Footer = lazy(() => import("../components/common/Footer"));

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
