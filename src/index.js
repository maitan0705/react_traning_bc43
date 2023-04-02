import React from "react";
import ReactDOM from "react-dom/client";
import DemoClass from "./component/DemoClass";
import Content from "./component/HomeComponent/Content";
import Footer from "./component/HomeComponent/Footer";
import Header from "./component/HomeComponent/Header";
import Home from "./component/HomeComponent/Home";
import Navigation from "./component/HomeComponent/Navigation";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import ChonXe from "./State/ChonXe";
import DemoLogin from "./State/DemoLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <Home />
    <Header />
    <div className="d-flex">
      <div className="w-25">
        <Navigation />
      </div>
      <div className="w-75">
        <Content />
      </div>
    </div>
    <Footer /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent/> */}
    <DemoLogin/>
    <ChonXe/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
