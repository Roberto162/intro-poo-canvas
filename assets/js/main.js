const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor= textcolor;
  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textcolor;
    // Medir ancho del texto
let textWidth = context.measureText(this.text).width;

// Diámetro interno seguro del círculo
let maxTextWidth = this.radius * 2 * 0.8; 
// 0.8 = margen interno (para que no toque borde)

// Solo dibuja si cabe
if (textWidth <= maxTextWidth) {
    context.fillText(this.text, this.posX, this.posY);
}

    context.closePath();
  }
}
let minRadius = 30; // suficiente para texto 20px
let randomRadius = Math.floor(Math.random() * 54) + minRadius;

let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;
let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "#1f9b4f", "Tec", "rgb(66, 135, 245)", "#b1811b");
miCirculo.draw(ctx);

function colorRandom() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "green", "Tec", "rgb(83, 186, 52)","#873654");
miCirculoRandom.draw(ctxRandom);

let MaxCircles=10;
 let arrayCircle = [];

for (let i = 0; i < MaxCircles; i++) {

  let randomRadius = Math.floor(Math.random() * 10 + 20);

  let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;

  let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, colorRandom(), i + 1, colorRandom(),"rgb(65,100,200)");

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);

}
