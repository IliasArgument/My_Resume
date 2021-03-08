import "./App.css";
import Cards from "../Card/Card";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import MyInfo from "../MyInfo/MyInfo";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <MyInfo />
          <About />
            <Skills />
          <Cards />
      <Footer />
    </div>
  );
}

export default App;

