import React, { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(input);
      }}
    >
      <input className={style.input} onChange={handleChange} type="text" placeholder="Ciudad..." />
      <input className={style.btnSend} type="submit" value="Agregar" />
    </form>
  );
}