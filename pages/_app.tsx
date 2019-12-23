import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withReduxStore, { Store } from "../store/with-redux-store";
import "../index.scss";

interface Props {
  reduxStore: Store;
}
class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
