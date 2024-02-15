import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Information from "./pages/Information";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/contact":
      component = <Contact />;
      break;
    case "/information":
      component = <Information />;
      break;
    case "/about":
      component = <About />;
      break;
    default:
      component = <Homepage />;
      break;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {component}
      </header>
    </div>
  );
}

export default App;
