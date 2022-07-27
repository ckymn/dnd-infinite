import SortableList from "../lib/sortableList";
import ReactDOM from "react-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    let colors = ["Red", "Green", "Blue", "Yellow", "Black", "White", "Orange"];

    return (
      <div>
        <SortableList data={colors} />
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
