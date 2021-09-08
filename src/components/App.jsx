import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  return (
    <div className="root">
      <Header />
      <div className="cards">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
