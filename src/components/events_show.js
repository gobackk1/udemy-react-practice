import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getEvent, deleteEvent, putEvent } from "../actions";
import { Link } from "react-router-dom";

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error }
    } = field;
    console.log(field);
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  async onSubmit(values) {
    // await this.props.postEvent(values);
    this.props.history.push("/");
  }
  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    console.log(submitting);

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          ></Field>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          ></Field>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            disabled={pristine || submitting}
          />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>
            Delete
          </Link>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = "please Enter a title";
  if (!values.body) errors.body = "please Enter a body";

  return errors;
};
// const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = { deleteEvent };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
