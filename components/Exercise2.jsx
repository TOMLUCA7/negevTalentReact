import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const dropDown = () => {
    return (
      <select
        id="select-input"
        onChange={(e) => setFruit(e.target.value)}
        value={fruit}
      >
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="mango">Mango</option>
        <option value="grape">Grape</option>
      </select>
    )
  }

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {dropDown()}
      <p>{name} selected {fruit}</p>
    </div>
  );
};
export default Exercise2;
