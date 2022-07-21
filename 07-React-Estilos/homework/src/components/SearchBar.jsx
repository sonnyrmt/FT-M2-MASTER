import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={style.containerInput}>
      <input className={style.input} type="text" placeholder="Ciudad.."></input>
      <button className={style.btnSend} onClick={props.onSearch}>Agregar</button>
    </div>
  );
};