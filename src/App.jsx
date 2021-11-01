import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Notes from "./components/Cards/Notes";
import Add from "./components/AddCard/AddCard";
import "./App.css"

function App() {
  return (
    <div className="root">
      <Header />
      <Add />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
