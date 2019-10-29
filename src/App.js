import React, { useState } from "react";
import useFetch from "./useFetch"

function Button () {
  const [buttonText, setButtonText] = useState("click me!");
  const users = useFetch('https://jsonplaceholder.typicode.com/users/');
  const [data, setData] = useState([]);
  function handleClick() {
      getData();

  }
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setData(data)
  }
  return (
      <div>
        <button onClick={handleClick}>{"Fetch Data"}</button>
        <ul>
          {data.map(el => (
              <li key={el.id}>{el.title}</li>
          ))}
        </ul>
        <ul>
          {users.map(el => (
              <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
  );
}
export default Button;