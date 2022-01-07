import "./App.css";
import React, { useState } from "react";
import WorkSlider from "./components/WorkSlider";
import SocialSlider from "./components/SocialSlider";
import { FaUserCircle } from "react-icons/fa";

function App() {
  const [workMode, setMode] = useState(true);
  // let heading = <h2 className="heading-secondary">Work</h2>;
  let heading;
  const headingClass = "pt-16 pl-10 text-white";
  let slider;
  let logoClickHandler = () => {
    setMode(!workMode);
  };
  if (workMode) {
    heading = <h2 className={headingClass}>Work</h2>;
    slider = <WorkSlider />;
  } else {
    heading = <h2 className={headingClass}>Social</h2>;
    slider = <SocialSlider />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {heading}
        <div onClick={logoClickHandler} className="mt-24 ml-12 ">
          <FaUserCircle className="text-8xl"></FaUserCircle>
        </div>
        {slider}
      </header>
    </div>
  );
}

export default App;
