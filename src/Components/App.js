import React from "react";
import Color from "./Color";
import data from "../colors.json";
// Object.keys(data).map((key) =>
//   data[key].map((colorCode) => {
//     console.log(colorCode);
//   })
// );
const App = () => {
  return Object.keys(data).map((key) => <Color name={key} allColors={data[key] } />);
};

export default App;
