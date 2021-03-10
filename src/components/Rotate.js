import { useState } from "react";

function Rotate({ value }) {
  const [number, setNumber] = useState(value ?? "");
  return (
    <div className="rotate">
      <div
        style={{
          backgroundColor: "black",
          width: "100px",
          height: "100px",
          margin: "10px",
          transform: `rotate(${number + "deg"})`,
        }}
      ></div>
      <input
        type="range"
        min={0}
        max={360}
        value={number}
        onInput={(event) => setNumber(event.target.value)}
      />
    </div>
  );
}
export default Rotate;
