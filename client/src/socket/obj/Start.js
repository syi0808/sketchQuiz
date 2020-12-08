import socket from "../index";

class Start {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);

    this.dy = this.canvas.getBoundingClientRect().top;
    this.dx = this.canvas.getBoundingClientRect().left;

    this.bgColor = "white";

    this.resize();

    this.canvas.onmousedown = (e1) => {
      this.drawAndSocket(e1)
      this.canvas.onmousemove = (e2) => {
        this.drawAndSocket(e2)
      };
    };

    this.canvas.onmouseup = () => {
      this.canvas.onmousemove = () => {};
      socket.emit("out");
    };

    socket.on("show", (posi) => {
      this.x = posi.x;
      this.y = posi.y;
      this.draw(
        this.ctx,
        this.x - this.dx - window.scrollX,
        this.y - this.dy - window.scrollY
      );
    });

    socket.on("cursor/out", () => {
      this.ctx.beginPath();
    });

    socket.on("canvas/clear", () => {
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = "black";
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      this.canvas.style.background = "white";
    });

    socket.on("canvas/change/color", (color) => {
      this.ctx.strokeStyle = color;
    });

    socket.on("canvas/change/weight", (weight) => {
      this.ctx.lineWidth = weight;
    });

    socket.on("canvas/change/bgColor", (color) => {
      this.bgFill(color);
      this.bgColor = color;
    });

    socket.on("canvas/change/kind", (style) => {
      this.ctx.strokeStyle = this.bgColor;
    });

    window.onload = () => {
      socket.emit("clear");
    };
  }

  drawAndSocket(e) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.draw(this.ctx, this.x, this.y);
    console.log(this.x, this.y);
    socket.emit("draw", {
      x: this.x + this.dx + window.scrollX,
      y: this.y + this.dy + window.scrollY,
    });
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  allClear() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.bgColor = "white";
  }

  erase() {
    this.ctx.save();
    this.ctx.strokeStyle = this.bgColor;
  }

  line() {
    this.ctx.restore();
  }

  bgFill(color) {
    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.bgColor = color;
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.stageWidth, 0);
    this.ctx.lineTo(this.stageWidth, this.stageHeight);
    this.ctx.lineTo(0, this.stageHeight);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.restore();
  }

  draw(ctx, x, y) {
    console.log(this.dy);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(x - this.dx + window.scrollX, y - this.dy + window.scrollY);
    ctx.stroke();
  }
}

export default Start;
