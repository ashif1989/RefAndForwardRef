import "./styles.css";
import { useRef, useState } from "react";
import Child from "./Child";

export default function App() {
  let inputRef = useRef(null);
  // const [focus, setFocus] = useState(null);

  let handleOnClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Using useRef</h1>
      <Child inputRef={inputRef} />
      {/* <label>Name: </label>
      <input type="text" ref={inputRef}></input> */}
      <br />
      <button onClick={handleOnClick}>Focus</button>
    </div>
  );
}
