const tela = document.querySelector("#tela");


const tamx = tela.clientWidth;
const limite_tela = tela.offsetTop;
const tamy = tela.clientHeight;
var cabeca = document.querySelector("#cabeca");
var dirx = 0;
var diry = 1;
var bolinhas = [];

class Bolinha {
  constructor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.tamanho = 40;
    this.movx = 0;
    this.movy = 0;
    this.creat();
    this.mover = setInterval(this.movimento);
  }

  movimento = () => {
    // Movimento no eixo x
    if (
      (this.posx < tamx - this.tamanho && dirx == 1) ||
      (dirx == -1 && this.posx > 0 + this.tamanho)
    ) {
      this.movx += 5 * dirx;
    } else if (dirx == 1) {
      this.movx += tamx - this.movx - this.tamanho;
    } else if (dirx == -1) {
      this.movx += -this.movx;
    }
    // Movimento no eixo y
    if(
      (this.posy < tamy && diry == 1) ||
      (diry == -1 && this.posy > this.tamanho+limite_tela)
    ) {
      this.movy += 5 * diry;
    } else if (diry == -1) { 
      this.movy -= (this.movy)*0.3;
    } else if (diry == 1) {
      this.movy += (tamy - this.movy - this.tamanho)*0.3;
    }

  };

  creat = () => {
    const bolinha = document.createElement("div");
    tela.append(bolinha);
    bolinha.setAttribute("id", "cabeca");
    bolinha.style = `
    background-color: rgb(${this.r},${this.g},${this.b});
    width: ${this.tamanho}px;
    height: ${this.tamanho}px;
    margin-left: ${this.movx}px;
    margin-top: ${this.movy}px;
    `;

    setInterval(() => {
      this.posx = bolinha.offsetLeft;
      this.posy = bolinha.offsetTop;
    });
  };
}

class Cabeca {
  constructor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.tamanho = 40;
    this.movx = 0;
    this.movy = 0;
    this.creat();
    this.mover = setInterval(this.movimento);
  }

  movimento = () => {
    // Movimento no eixo x
    if (
      (this.posx < tamx - this.tamanho && dirx == 1) ||
      (dirx == -1 && this.posx > 0 + this.tamanho)
    ) {
      this.movx += 5 * dirx;
    } else if (dirx == 1) {
      this.movx += tamx - this.movx - this.tamanho;
    } else if (dirx == -1) {
      this.movx += -this.movx;
    }
    // Movimento no eixo y
    if(
      (this.posy < tamy && diry == 1) ||
      (diry == -1 && this.posy > this.tamanho+limite_tela)
    ) {
      this.movy += 5 * diry;
    } else if (diry == -1) { 
      this.movy -= (this.movy)*0.3;
    } else if (diry == 1) {
      this.movy += (tamy - this.movy - this.tamanho)*0.3;
    }

  };

  creat = () => {
    const bolinha = document.createElement("div");
    tela.append(bolinha);
    bolinha.setAttribute("id", "cabeca");
    bolinha.style = `
    background-color: rgb(${this.r},${this.g},${this.b});
    width: ${this.tamanho}px;
    height: ${this.tamanho}px;
    margin-left: ${this.movx}px;
    margin-top: ${this.movy}px;
    `;

    setInterval(() => {
      this.posx = bolinha.offsetLeft;
      this.posy = bolinha.offsetTop;
    });
  };
}


setInterval(() => {
  var cabeca = document.querySelector("#cabeca");
  
  cabeca.style.margin = `${bolinhas[0].movy}px 0 0 ${bolinhas[0].movx}px`;
});

window.addEventListener("keydown", (event) => {
  key = event.key;

  switch (key) {
    case "ArrowUp":
      dirx = 0;
      diry = -1;
      break;

    case "ArrowDown":
      dirx = 0;
      diry = 1;
      break;

    case "ArrowRight":
      dirx = 1;
      diry = 0;
      break;

    case "ArrowLeft":
      dirx = -1;
      diry = 0;
      break;
  }
});

var start = document.querySelector("#btn_start");

document.addEventListener("DOMContentLoaded", () => {
  bolinhas.push(new Cabeca());
});

