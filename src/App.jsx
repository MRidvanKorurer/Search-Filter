import "./App.css";
import Card from "./Card";
import Data from "./Data.json";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <div className="head">
        <h1>KURTLAR VADİSİ KONSEY ÜYELERİ</h1>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ara..."
        />
      </div>
      <div>
        <Card search={search} Data={Data} />
      </div>
    </div>
  );
}

export default App;
