const tela = document.querySelector("#tela");

const tamx = tela.clientWidth;
const tamy = tela.clientHeight;
var cabeca = document.querySelector('#cabeca');
var dirx = 1;
var diry = 0;
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
    console.log(this.posx)
    if (this.posx < (tamx - this.tamanho) || dirx == -1 && this.posx > 0) {
      this.movx = this.movx + (tamx * 0.01) * dirx;
    }else{
      this.movx+=((tamx-this.movx)-this.tamanho)
    }
    if (this.posy < (tamy - this.tamanho) && this.posy > 0) {
      this.movy += this.posy + (tamx * 0.0001) * diry;
    }
  }

  creat = () => {
    const bolinha = document.createElement('div')
    tela.append(bolinha);
    bolinha.setAttribute('id', 'cabeca');
    bolinha.style = `
    background-color: rgb(${this.r},${this.g},${this.b});
    width: ${this.tamanho}px;
    height: ${this.tamanho}px;
    margin-left: ${this.movx}px;
    margin-top: ${this.movy}px;
    `;

    setInterval(()=>{
      this.posx = bolinha.offsetLeft;
      this.posy = bolinha.offsetTop;
    })
  }
}

setInterval(()=>{
  var cabeca = document.querySelector('#cabeca');
  
  cabeca.style.marginLeft=bolinhas[0].movx+'px';
},)

window.addEventListener("keydown", (event) => {
  key = event.key;

  switch (key) {
    case "ArrowUp":
      dirx = 0;
      diry = 1;
      break;

    case "ArrowDown":
      dirx = 0;
      diry = -1;
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

var start = document.querySelector('#btn_start');

document.addEventListener('DOMContentLoaded', () => {
  bolinhas.push(new Bolinha());
})
