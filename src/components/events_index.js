import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../actions";
import _ from "lodash";
class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{this.renderEvents()}</tbody>
      </table>
    );
  }
}

// Stateの情報から、このコンポーネントで必要なものを取り出して、コンポーネント内のPropsにマッピングする機能を持つ関数
const mapStateToProps = state => ({ events: state.events });

// あるアクションが発行された時に、ReducerにActionTypeに応じた状態遷移を実行させるための関数
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// 省略形
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
