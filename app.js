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


let imagens = ["img/000.png","img/001.png", "img/002.png", "img/003.png"]


let keys = false
window.addEventListener("keydown", keysDown);
window.addEventListener("keyup", keysUp);
app.ticker.add(gameLoop);
let textureArray = [];

for (let i=0; i < 4; i++)
{
     let texture = PIXI.Texture.from(imagens[i]);
     textureArray.push(texture);
};
let animatedSprite = new PIXI.AnimatedSprite(textureArray);
animatedSprite.animationSpeed = 0.167; 
animatedSprite.play();

function keysDown(e){
    keys = true
    app.stage.addChild(animatedSprite)}

function keysUp(e){
    keys = false
    app.stage.removeChild(animatedSprite)
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
  