import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Whay use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'What do you use React?',
        content: 'You use react by creating component '
    },
]

export default () => {
  return (
    <div>
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};