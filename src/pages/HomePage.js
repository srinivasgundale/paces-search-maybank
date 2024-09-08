import React, { useState, Suspense, lazy } from "react";
import { Layout, Row, Col, Divider, Card } from "antd";
import Shimmer from "./../components/common/Shimmer"; 
const SearchBox = lazy(() => import("../components/SearchBox"));
const CurrentQuery = lazy(() => import("../components/SearchBox/CurrentQuery"));
const ResultsList = lazy(() => import("./../components/ResultsList"));
const Map = lazy(() => import("./../components/Map"));

const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { Content } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "20px", background: "#f0f2f5" }}>
        <div className="site-layout-content">
          <Row gutter={16} style={{ marginBottom: 20 }}>
            <Col xs={24}>
              <Card title="Search for Places" bordered={false}>
                <Suspense fallback={<Shimmer />}>
                  <SearchBox />
                  <CurrentQuery />
                </Suspense>
              </Card>
            </Col>
          </Row>

          <Divider />

          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Card title="Results" bordered={false}>
                <Suspense fallback={<Shimmer />}>
                  <ResultsList
                    onSelectResult={(location) => setSelectedLocation(location)}
                  />
                </Suspense>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={16}>
              <Card title="Map" bordered={false}>
                <Suspense fallback={<Shimmer />}>
                  <Map selectedLocation={selectedLocation} />
                </Suspense>
              </Card>
            </Col>
          </Row>

          <Divider />
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
