import { READ_EVENTS } from "../actions";
import _ from "lodash";

// 初期状態のオブジェクトを用意する
const initialState = { value: 0 };

// reducerは関数として定義
// 受け取ったactionのtypeに応じて、状態を変更して、結果returnする
export default (events = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};
