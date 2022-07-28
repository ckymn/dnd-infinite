import SortableList from "../lib/index.js";
import ReactDOM from "react-dom/client";
import React, { Component } from "react";

class App extends Component {
  render() {
    let colors = [
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
      "Red",
      "Green",
      "Blue",
      "Yellow",
      "Black",
      "White",
      "Orange",
    ];

    return (
      <div>
        Colors Sort
        <SortableList data={colors} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
