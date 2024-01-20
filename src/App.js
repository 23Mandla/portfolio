import React, { useState } from "react";
import Home from "./componets/Home/Home.js";
import About from "./componets/About/About.js";
import Work from "./componets/Work/Work.js";
import Contact from "./componets/Contact/Contact.js";
import Navbar from "./componets/Navbar/Navbar.js";

function App() {
  const [component, setComponent] = useState(null);

  //pass the component name as a string from navbar component.
  const handleComponent = (component) => {
    setComponent(component);
  };

  
 const renderComponent = () => {
  switch (component) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "Work":
      return <Work />;
    case "Contact":
      return <Contact  />;
    default:
      return <Home />;
  };
}

  return (
    <div className="fixed grid grid-cols-5 top-0 left-0 h-screen w-full holder">
      <div className="">
        <Navbar handleComponent={handleComponent} />
      </div>
      <div className="col-span-4 pt-[5%]">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
