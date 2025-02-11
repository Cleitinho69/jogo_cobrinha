const tela = document.querySelector("#tela");

const tamx = tela.clientHeight;
const tamy = tela.clientWidth;
var dirx = 1;
var diry = 0;
var bolinhas = [];

class Bolinha {
  constructor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.tamanho = 20;
    this.movx = 100;
    this.movy = 100;
    this.creat();
    this.mover();
  }
  
  mover=()=>{
    setInterval(this.movimento,500)
  }

  movimento = () => {
    console.log(this.movx)
    if (this.posx < (tamx-this.tamanho) && this.posx > 0) {
      this.movx += this.posx + (tamx*0.05) * dirx;
    }
    if (this.posy < (tamy-this.tamanho) && this.posy > 0) {
      this.movy += this.posy + (tamx*0.05) * diry;
    }
  }
  
  creat=()=>{
    const bolinha = document.createElement('div')
    tela.append(bolinha);
    bolinha.setAttribute('id','cabeca')
    bolinha.style= `
    background-color: rgb(${this.r},${this.g},${this.b});
    width: ${this.tamanho}px;
    height: ${this.tamanho}px;
    margin-left: ${this.movx}px;
    margin-top: ${this.movy}px;
    `;

    this.posx = bolinha.offsetLeft - 20;
    this.posy = bolinha.offsetTop - 20;
  }
}

window.addEventListener("keydown", (event) => {
  key = event.key;

  switch (key) {
    case "ArrowUp":
      dirx = 1;
      diry = 0;
      break;

    case "ArrowDown":
      dirx = -1;
      diry = 0;
      break;

    case "ArrowRight":
      dirx = 0;
      diry = 1;
      break;

    case "ArrowLeft":
      dirx = 0;
      diry = -1;
      break;
  }
});

var start = document.querySelector('#btn_start');

document.addEventListener('DOMContentLoaded',()=>{
  bolinhas.push(new Bolinha());
})
