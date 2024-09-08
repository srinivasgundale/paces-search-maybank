import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./routes/AppRouter";
//import ThemeContextProvider from "./context/ThemeContextProvider";
const App = () => {
  return (
    <Provider store={store}>
      {/* <ThemeContextProvider> */}

      <AppRouter />

      {/* </ThemeContextProvider> */}
    </Provider>
  );
};

export default App;
