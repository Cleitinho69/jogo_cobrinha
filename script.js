const tela = document.querySelector("#tela");

const tamx = tela.clientHeight;
const tamy = tela.clientWidth;
var dirx = 1;
var diry = 0;

class Bolinha {
  constructor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.tamanho = 20 + "px";
    this.posx = this.offsetLeft - 20;
    this.posy = this.offsetTop - 20;
    this.movx = this.movx;
    this.movy = this.movy;
    this.mov = setInterval(this.movimento(), 500);
  }

  movimento = () => {
    if (this.movx < tamx || this.movx > 0) {
      this.movx += this.posx + 10 * dirx;
    }

    if (this.movy < tamx || this.movy > 0) {
        this.movy += this.posy + 10 * diry;
      }
  }

  creat=()=>{
    
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
