import React from "react";
import {} from "react-router-dom";

function Protected(props) {
  const { Componet } = props;
  return (
    <div>
      <Componet />
    </div>
  );
}

export default Protected;
