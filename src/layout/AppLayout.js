import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "../components/common/Header";

const Footer = lazy(() => import("../components/common/Footer"));

const { Content } = Layout;
const AppLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
