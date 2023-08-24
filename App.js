import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import Chennai from "./components/Chennai";
import Rameshwaram from "./components/Rameshwaram";
import Kodaikanal from "./components/Kodaikanal";
import Ooty from "./components/Ooty";
import Kaniyakumari from "./components/Kanyakumari";
import Kumbakonam from "./components/Kumbakonam";
import Madurai from "./components/Madurai";
import Yercaud from "./components/Yarcaud";
import Theni from "./components/Theni";
import Hogenakkal from "./components/Hogenakkal";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <CarouselComponent></CarouselComponent>
      <Chennai></Chennai>
      <Rameshwaram></Rameshwaram>
      <Kodaikanal></Kodaikanal>
      <Ooty></Ooty>
      <Kaniyakumari></Kaniyakumari>
      <Kumbakonam></Kumbakonam>
      <Madurai></Madurai>
      <Yercaud></Yercaud>
      <Theni></Theni>
      <Hogenakkal></Hogenakkal>
    </BrowserRouter>
  );
};

export default App;
