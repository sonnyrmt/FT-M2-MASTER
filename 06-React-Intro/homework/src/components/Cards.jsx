import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div>
      {props.cities.map((city) => (
        <Card
          name={city.name}
          max={city.main.temp_max}
          min={city.main.temp_min}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  );
}
