import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ReactTooltip />
      <div style={{ width: "200px", heigh: "100px", background: "red" }}>
        Count : {count}
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        data-tip="hello world"
      >
        Add One
      </button>
    </div>
  );
};
