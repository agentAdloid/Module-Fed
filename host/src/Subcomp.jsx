import React from "react";
import { power } from "remote/power";
const Subcomp = () => {
  let x = 2,
    y = 3;
  console.log(`power of ${x}^${y} is ${power(2, 3)}`);
  return <div>Subcomp</div>;
};

export default Subcomp;
