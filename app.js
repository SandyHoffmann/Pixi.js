const Application = PIXI.Application;
let keysDiv;
const app = new Application({
    width:500,
    height:500,
    antialias: true
});

app.renderer.backgroundColor = 0x233950;

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const arbusto  = new Graphics()
arbusto.beginFill(0xAA33BB)
.lineStyle(4, 0xFFEA00, 1)
.drawRect(200,200,100,120)
.endFill();
app.stage.addChild(arbusto)

class Keyboard {
    constructor () {
      this.pressed = {};
    }
    
    watch (el) {
      el.addEventListener('keydown', (e) => {
        this.pressed[e.key] = true;
        console.log(el)
      });
      el.addEventListener('keyup', (e) => {
        this.pressed[e.key] = false;
      });
    }
  }


let estado = 'idle'

let keys = false
window.addEventListener("keydown", keysDown);
window.addEventListener("keyup", keysUp);
app.ticker.add(gameLoop);

let personagemAndando;
let adicionado = false


function keysDown(e){
    if(e.code == 'KeyD'){
      if (personagemAndando && !personagem.animando){
        personagemAndando.stop()
        app.stage.removeChild(personagemAndando) 
      }
      if (!personagem.animando){
        console.log(personagem.animando)
        estado = 'andarDireita'
        personagemAndando = Personagem(estado)
        app.stage.addChild(personagemAndando)
        personagem.animando = true
        personagemAndando.x = personagem.x
        personagemAndando.y = personagem.y
        personagem.x+=10
        personagemAndando.x = personagem.x
      }
      personagem.x+=10
      personagemAndando.x = personagem.x
    }
    else if(e.code == 'KeyA'){
      if (personagemAndando && !personagem.animando){
        personagemAndando.stop()
        app.stage.removeChild(personagemAndando) 
      }
      if (!personagem.animando){
        estado = 'andarEsquerda'
        console.log(estado)
        personagemAndando = Personagem(estado)
        app.stage.addChild(personagemAndando)
        personagem.animando = true
        personagemAndando.x = personagem.x
        personagemAndando.y = personagem.y
        personagem.x-=10
        personagemAndando.x = personagem.x
      }
      personagem.x-=10
      personagemAndando.x = personagem.x
    }
    else if(e.code == 'KeyS'){
      if (personagemAndando && !personagem.animando){
        personagemAndando.stop()
        app.stage.removeChild(personagemAndando) 
      }
      if (!personagem.animando){
        estado = 'andarFrente'
        console.log(estado)
        personagemAndando = Personagem(estado)
        app.stage.addChild(personagemAndando)
        personagem.animando = true
        personagemAndando.x = personagem.x
        personagemAndando.y = personagem.y
        personagem.y+=10
        personagemAndando.y = personagem.y
      }
      personagem.y+=10
      personagemAndando.y = personagem.y
    }
    else if(e.code == 'KeyW'){
      if (personagemAndando && !personagem.animando){
        personagemAndando.stop()
        app.stage.removeChild(personagemAndando) 
      }
      if (!personagem.animando){
        estado = 'andarAtras'
        console.log(estado)
        personagemAndando = Personagem(estado)
        app.stage.addChild(personagemAndando)
        personagem.animando = true
        personagemAndando.x = personagem.x,
        personagemAndando.y = personagem.y
        personagem.y-=10
        personagemAndando.y = personagem.y
      }
      personagem.y-=10
      personagemAndando.y = personagem.y
    }
}

function keysUp(e){
    if (personagemAndando && personagem.animando){
      personagemAndando.stop()
      app.stage.removeChild(personagemAndando) 
    }
    keys = false
    personagem.animando = false
    estado = 'idle'
    console.log(estado)
    personagemAndando = Personagem(estado)
    app.stage.addChild(personagemAndando)
    personagemAndando.x = personagem.x,
    personagemAndando.y = personagem.y
}

function draw(animations){

}
function gameLoop(){
    
}
// function setup() {
//     let sheet = PIXI.Loader.shared.resources["spritesheet.json"].spritesheet;
//     console.log(sheet._frames)
//     for (let f of sheet._frames){
//       let texture = PIXI.Texture.from(f);
//       textureArray.push(texture);
//     }
//     animatedSprite = new PIXI.AnimatedSprite(sheet._frames);
//   }
  