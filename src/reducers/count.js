import { INCREMENT, DECREMENT } from "../actions";

// 初期状態のオブジェクトを用意する
const initialState = { value: 0 };

// reducerは関数として定義
// 受け取ったactionのtypeに応じて、状態を変更して、結果returnする
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
