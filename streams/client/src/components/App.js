import React from "react";
import { BrowserRouter, HashRouter, MemoryRouter, Routes, Route, Link, NavLink} from "react-router-dom";



const PageOne = () => {
  return (
    <div className="">
        <div className="">Page One</div>
        <NavLink to='/page-2'>Page 2</NavLink>
    </div>
  )
};

const PageTwo = () => {
  return (
    <div className="">
        <div className="">Page Two</div>
        <NavLink to='/' >Page 1</NavLink>
    </div>
  );
};

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PageOne />} />
          <Route path="page-2"  element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
