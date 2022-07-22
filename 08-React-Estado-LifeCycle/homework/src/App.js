import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main) {
          const ciudad = {
            name: recurso.name,
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
          };
          setCities([...cities, ciudad]);
        } else {
          alert("No se encontro la ciudad");
        }
      });
  }

  function onClose(id) {
    setCities(cities.filter((city) => city.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
