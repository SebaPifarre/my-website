import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar title="test" />
      <h1>Dynamic Navbar</h1>
      <p>
        {Array(40)
          .fill()
          .map((_, index) => (
            <p key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          ))}
      </p>
    </>
  );
}

export default App;
