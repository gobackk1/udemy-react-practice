import {
  READ_EVENTS,
  DELETE_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  CREATE_EVENT
} from "../actions";
import _ from "lodash";

// reducerは関数として定義
// 受け取ったactionのtypeに応じて、状態を変更して、結果returnする
export default (events = {}, action) => {
  switch (action.type) {
    case UPDATE_EVENT:
    case CREATE_EVENT:
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENTS:
      delete events[action.id];
      return events;
    case READ_EVENT:
      console.log(action.response);
      const data = action.response.data;
      return { ...events, [data.id]: data };
    default:
      return events;
  }
};
