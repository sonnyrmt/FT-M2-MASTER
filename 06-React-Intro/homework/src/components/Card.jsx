import React from "react";

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose } = props;
  const maxCelsius = Math.round(max - 273);
  const minCelsius = Math.round(min - 273);
  const image = `http://openweathermap.org/img/wn/${img}@2x.png`;

  return (
    <div className="container-weather">
      <button onClick={onClose}>X</button>
      <h1>{name}</h1>
      <div>
        <p>Min</p>
        <p>{minCelsius}°</p>
      </div>
      <div>
        <p>Max</p>
        <p>{maxCelsius}°</p>
      </div>
      <img src={image} alt="weatherImg" />
    </div>
  );
}
