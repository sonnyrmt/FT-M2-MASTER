import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose } = props;
  const maxCelsius = Math.round(max - 273);
  const minCelsius = Math.round(min - 273);
  const image = `http://openweathermap.org/img/wn/${img}@2x.png`;

  return (
    <div className={style.containerWeather}>
      <button className={style.btnClose} onClick={onClose}>X</button>
      <h2>{name}</h2>
      <div className={style.weather}>
        <div className={style.minMax}>
          <p>Min</p>
          <p>{minCelsius}°</p>
        </div>
        <div className={style.minMax}>
          <p>Max</p>
          <p>{maxCelsius}°</p>
        </div>
        <img src={image} alt="weatherImg" />
      </div>
    </div>
  );
}
