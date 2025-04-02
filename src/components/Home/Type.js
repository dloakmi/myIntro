import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Deep Dark Fantasy",
          "Freestyle Rapper",
          "Yellow Book Developer",
          "Black Chicken Father Big Monster",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
