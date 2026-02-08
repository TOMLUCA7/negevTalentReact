import { useState } from "react";

const Exercise1 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const alertUser = () => {
    if (age < 18) {
        alert("You're too young to enter the bar");
        return;
    }
    alert(`Come in ${name}, you're ${age} - that's good enough`);
    setName("");
    setAge("");
  };

  return (
    <div >
      <input
      style={{margin: "10px"}}
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="name"
      />
      <input
        id="age-input"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="age"
      />    
      <button onClick={alertUser}>Go to Bar</button>
    </div>
  );
};
export default Exercise1;
