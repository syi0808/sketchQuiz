import socket from "../index";

class Start {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    this.canvas.onmousedown = (e1) => {
      this.ctx.beginPath();
      this.canvas.onmousemove = (e2) => {
        this.x = e2.clientX;
        this.y = e2.clientY;
        this.draw(this.ctx, this.x, this.y);
        console.log(this.x, this.y);
        socket.emit("draw", { x: this.x, y: this.y });
      };
    };

    this.canvas.onmouseup = () => {
      this.canvas.onmousemove = () => {};
      socket.emit("out");
    };

    socket.on("show", (posi) => {
      this.x = posi.x;
      this.y = posi.y;
      this.draw(this.ctx, this.x, this.y);
    });

    socket.on("cursorOut", () => {
      this.ctx.beginPath();
    });

    socket.on("canvasClear", () => {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    });

    window.onload = () => {
      socket.emit("clear");
    };
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  draw(ctx, x, y) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

export default Start;
