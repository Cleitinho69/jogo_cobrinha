const tela = document.querySelector("#tela");


var tamx = tela.clientWidth;
var limite_tela = tela.offsetTop;
var tamy = tela.clientHeight;
var dirx = 1;
var diry = 0;
var bolinhas = [];

class Cabeca {
  constructor(){
    this.bolinha = new Bolinha;
    this.movx = Math.floor(Math.random() * (tamx - this.bolinha.tamanho));
    this.movy = Math.floor(Math.random() * (tamy - this.bolinha.tamanho));
    this.mover = setInterval(this.movimento);
    
    this.bolinha.eu.setAttribute("id", "cabeca");
  }

  movimento = () => {
    // Movimento no eixo x
    if (
      (this.bolinha.posx < tamx - this.bolinha.tamanho && dirx == 1) ||
      (dirx == -1 && this.bolinha.posx > 0 + this.bolinha.tamanho)
    ) {
      this.movx += 5 * dirx;
    } else if (dirx == 1) {
      this.movx += (tamx - this.movx - this.bolinha.tamanho) * 0.3;
    } else if (dirx == -1) {
      this.movx += (-this.movx) * 0.5;
    }
    // Movimento no eixo y
    if (
      (this.bolinha.posy < tamy && diry == 1) ||
      (diry == -1 && this.bolinha.posy > this.bolinha.tamanho + limite_tela)
    ) {
      this.movy += 5 * diry;
    } else if (diry == -1) {
      this.movy -= (this.movy) * 0.3;
    } else if (diry == 1) {
      this.movy += (tamy - this.movy - this.bolinha.tamanho) * 0.3;
    }

  };
}

class Bolinha {
  constructor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.tamanho = 40;

    this.creat();
  }

  creat = () => {
    this.eu = document.createElement("div");
    tela.append(this.eu);
    this.eu.setAttribute("class", "bolinha");
    this.eu.style = `
    background-color: rgb(${this.r},${this.g},${this.b});
    width: ${this.tamanho}px;
    height: ${this.tamanho}px;
    `;

    setInterval(() => {
      this.posx = this.eu.offsetLeft;
      this.posy = this.eu.offsetTop;
    });
  };
}


setInterval(() => {
  var cabeca = document.querySelector("#cabeca");

  cabeca.style.left = `${bolinhas[0].movy}px`;
  cabeca.style.top = `${bolinhas[0].movx}px`;
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

    case "w":
      dirx = 0;
      diry = -1;
      break;

    case "s":
      dirx = 0;
      diry = 1;
      break;

    case "d":
      dirx = 1;
      diry = 0;
      break;

    case "a":
      dirx = -1;
      diry = 0;
      break;
  }
});

var start = document.querySelector("#btn_start");

start.addEventListener('click', () => {
  var Cobra = document.createElement('div')
  bolinhas.push(new Cabeca)
})

var cancel = document.querySelector('#btn_cancel');

cancel.addEventListener('click', () => {
  bolinhas.splice(0)
  var bolinha = document.querySelector('#cabeca')

  tela.removeChild(bolinha)
})