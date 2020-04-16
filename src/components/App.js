import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";
class App extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// Stateの情報から、このコンポーネントで必要なものを取り出して、コンポーネント内のPropsにマッピングする機能を持つ関数
const mapStateToProps = state => ({ value: state.count.value });

// あるアクションが発行された時に、ReducerにActionTypeに応じた状態遷移を実行させるための関数
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
