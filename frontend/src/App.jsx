import NavBar from "./components/NavBar";
import NavBarPc from "./components/NavBarPC";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Header from "./components/Header";
import CardArtiste from "./components/CardArtiste";

function App() {
  return (
    <div>
      <NavBar />
      <NavBarPc />
      <Header />
      <SearchBar />
      <div className="flex overflow-scroll">
        <CardArtiste />
      </div>
    </div>
  );
}

export default App;
