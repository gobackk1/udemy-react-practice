import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { postEvent } from "../actions";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      ></TextField>
    );
  }
  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push("/");
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = {
      margin: 12
    };
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
        <RaisedButton
          label="Submit"
          type="submit"
          style={style}
          disabled={pristine || submitting || invalid}
        ></RaisedButton>
        <RaisedButton
          label="Cancel"
          style={style}
          containerElement={<Link to="/"></Link>}
        ></RaisedButton>
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

const mapDispatchToProps = { postEvent };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
