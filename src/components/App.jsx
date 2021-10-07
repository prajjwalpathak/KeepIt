import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Add from "./Add";

function App() {
  return (
    <div className="root">
      <Header />
      <Add />
      <div className="cards">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
