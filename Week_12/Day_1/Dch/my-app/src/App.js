
import './App.css';
import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div>
       <Carousel />
    </div>
  );
}
render(<App />, document.getElementById("root"));
export default App;
