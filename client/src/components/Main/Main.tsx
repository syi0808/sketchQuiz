import React, { FC, useEffect, useRef } from "react";
import Start from "../../socket/obj/Start";

const Main: FC = () => {
  useEffect(() => {
    new Start();
  }, []);

  return <></>;
};

export default Main;
