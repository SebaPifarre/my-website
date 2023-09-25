import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";


function App() {
  return (
    <>
      <section className="banner" id="home">
        <NavBar />
        <Home />
      </section>
    </>
  );
}

export default App;
