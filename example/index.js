import SortableList from "../lib/index.js";
import ReactDOM from "react-dom/client";
import React, { Component } from "react";

class App extends Component {
  render() {
    let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

    return (
      <div>
        <SortableList data={items} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
