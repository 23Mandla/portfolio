import Home from "./componets/Home/Home.js";
import Navbar from "./componets/Navbar/Navbar.js";

function App() {
  return (
    <div className="fixed grid grid-cols-5 top-0 left-0 h-screen w-full holder">
      <div className="">
        <Navbar />
      </div>
      <div className="col-span-4 pt-[7%]">
        <Home />
      </div>
    </div>
  );
}

export default App;
