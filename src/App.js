import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchBox from "./components/SearchBox";
import Map from "./components/Map";
import ResultsList from "./components/ResultsList";
import CurrentQuery from "./components/CurrentQuery";
import { Layout } from "antd";

const { Header, Content } = Layout;

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <Provider store={store}>
      <Layout>
        <Header style={{ color: "white" }}>Google Place Search</Header>
        <Content style={{ padding: "20px" }}>
          <SearchBox />
          <CurrentQuery />
          <ResultsList
            onSelectResult={(location) => setSelectedLocation(location)}
          />
          <Map selectedLocation={selectedLocation} />
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
