import React, { useEffect, useRef } from "react";
import Start from "../../socket/obj/Start";

const Main = () => {
  useEffect(() => {
    new Start();
  }, []);

  return <></>;
};

export default Main;
