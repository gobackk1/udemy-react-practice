import React from "react";
import ReactDOM from "react-dom";
// createStore: Storeを作る
import { createStore, applyMiddleware } from "redux";
// 作成したStoreを全コンポーネントに渡す機能を持つProvider
import { Provider } from "react-redux";
import "./index.css";
import reducer from "./reducers";
import EventsIndex from "./components/events_index";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";

// ここで作成するstoreはアプリで唯一のものになる
// アプリ内部の全てのstateは、このstoreに集約されている
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // Providerでラップしたコンポーネント全てが、storeにアクセスできるようになる
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
