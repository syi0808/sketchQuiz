import React, { useEffect, useRef } from "react";
import Start from "../../socket/obj/Start";
import socket from "../../socket";
import * as S from './styles'

const Draw = () => {
  const obj = useRef();
  useEffect(() => {
    obj.current = new Start();
  }, []);

  const onClickColor = (color) => {
    console.log(color);
    socket.emit("change/color", color);
    obj.current.ctx.beginPath();
    obj.current.ctx.strokeStyle = color;
  };

  const onClickWeight = (weight) => {
    socket.emit("change/weight", weight);
    obj.current.ctx.beginPath();
    obj.current.ctx.lineWidth = weight;
  };

  const onClickLinestyle = (style) => {
    obj.current.ctx.beginPath();
    if (style === "eraser") {
      obj.current.erase();
    } else if (style === "line") {
      obj.current.line();
    }
  };

  const onClickBgColor = (color) => {
    socket.emit("change/bgColor", color);
    obj.current.bgFill(color);
  };

  const onClickClear = () => {
    socket.emit("clear");
    obj.current.allClear();
  };

  return (
    <>
      <button onClick={() => onClickColor("black")}>black</button>
      <button onClick={() => onClickColor("red")}>red</button>
      <button onClick={() => onClickColor("orange")}>orange</button>
      <button onClick={() => onClickColor("yellow")}>yellow</button>
      <button onClick={() => onClickColor("green")}>green</button>
      <button onClick={() => onClickColor("blue")}>blue</button>
      <button onClick={() => onClickColor("darkblue")}>blackblue</button>
      <button onClick={() => onClickColor("purple")}>purple</button>
      <br />
      <button onClick={() => onClickWeight(1)}>1</button>
      <button onClick={() => onClickWeight(4)}>2</button>
      <button onClick={() => onClickWeight(7)}>3</button>
      <button onClick={() => onClickWeight(14)}>4</button>
      <button onClick={() => onClickWeight(22)}>5</button>
      <br />
      <button onClick={() => onClickLinestyle("line")}>line</button>
      <button onClick={() => onClickLinestyle("eraser")}>eraser</button>
      <br />
      <button onClick={onClickClear}>ClearAll</button>
      <br />
      <button onClick={() => onClickBgColor("black")}>black</button>
      <button onClick={() => onClickBgColor("red")}>red</button>
      <button onClick={() => onClickBgColor("orange")}>orange</button>
      <button onClick={() => onClickBgColor("yellow")}>yellow</button>
      <button onClick={() => onClickBgColor("green")}>green</button>
      <button onClick={() => onClickBgColor("blue")}>blue</button>
      <button onClick={() => onClickBgColor("darkblue")}>blackblue</button>
      <button onClick={() => onClickBgColor("purple")}>purple</button>
    </>
  );
};

export default Draw;