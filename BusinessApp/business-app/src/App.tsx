import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import TopNav from "./components/nav/TopNav";
import HomePage from "./pages/Home";
import About from "./pages/About";
import { NavItem } from "./model/types";

let links: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "about" },
  { name: "Contact", url: "contact" },
];

function App() {
  return (
    <Fragment>
      <div>
        <TopNav links={links} />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <div className="App"></div>
    </Fragment>
  );
}

export default App;
