import React, { Component } from "react";
import { render } from "@testing-library/react";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bbb">class</label>
//         <input type="text" onChange={() => console.log("clicked")} />
//       </React.Fragment>
//     );
//   }
// }
// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bbb">functional</label>
//       <input type="text" onChange={() => console.log("clicked")} />
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Miaw</div>;
};

export default App;
