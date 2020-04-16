import React, { Component } from "react";
import { render } from "@testing-library/react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {
      name: "taro",
      age: 10
    },
    {
      name: "hanako",
      age: 12
    },
    {
      name: "shogo",
      age: 3
    }
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} yeas old!
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default App;
