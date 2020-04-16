import React from "react";
import { render } from "@testing-library/react";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bbb">bbb</label>
      <input type="text" onChange={() => console.log("clicked")} />
    </React.Fragment>
  );
}

export default App;
