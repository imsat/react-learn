import React, { Component, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Whay use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "What do you use React?",
    content: "You use react by creating component ",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];


export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />  
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
