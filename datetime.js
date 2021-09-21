import React, { useState } from "react";
import moment from "moment";
import Datetime from "react-datetime";
import "./datetime.css";

const Date = () => {
  const [momentoutput, setmomentoutput] = useState(null);
  const handlechange = (e) => {
    setmomentoutput({ ...moment(e) });
  };

  const handleclick = () => {
    if (momentoutput != null) console.log(momentoutput._d);
  };
  return (
    <div>
      <Datetime onChange={handlechange} />
      <button onClick={handleclick}>click</button>
    </div>
  );
};

export default Date;
