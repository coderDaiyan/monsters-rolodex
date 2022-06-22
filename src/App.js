import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList.component";
import SearchBox from "./components/searchBox/searchBox.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(filtered);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="App-Title">Monsters Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
