import React from "react";
import AutoComplete from "./auto-complete/AutoComplete.jsx";

const Suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli fruit",
  "Vanilla",
  "Watermelon",
];

const App = () => {
  return (
    <div className="App">
      <AutoComplete suggestions={Suggestions} />
    </div>
  );
};

export default App;
