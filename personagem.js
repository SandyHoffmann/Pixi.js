let and = "img/personagemandando/"

let personagem = {
    x: 0, y: 0,
    vx: 0, vy: 0,
    estado: 'idle',
    animando: false,
    cycles: {
      'runLeft': [5,6,7,6],
      'runRight': [1,2,3,2]
    }
  };
  
function andar(imagens){
    let textureArray = [];
        for (let i=0; i < 4; i++)
        {
            let texture = PIXI.Texture.from(imagens[i]);
            textureArray.push(texture);
        };
        let animatedSprite = new PIXI.AnimatedSprite(textureArray);
        animatedSprite.animationSpeed = 0.167; 
        animatedSprite.play();
        return animatedSprite
}

function Personagem(estado){
    if (estado == 'andarDireita'){
        let imagens = [`${and}/Andandodireita/000.png`,`${and}/Andandodireita/001.png`, `${and}/Andandodireita/002.png`, `${and}/Andandodireita/003.png`]
        let animatedSprite = andar(imagens)
        return animatedSprite
    }
    if (estado == 'andarEsquerda'){
        let imagens = [`${and}/Andandoesquerda/000.png`,`${and}/Andandoesquerda/001.png`, `${and}/Andandoesquerda/002.png`, `${and}/Andandoesquerda/003.png`]
        let animatedSprite = andar(imagens)
        return animatedSprite
    }
    if (estado == 'andarFrente'){
        let imagens = [`${and}/Andandofrente/000.png`,`${and}/Andandofrente/001.png`, `${and}/Andandofrente/002.png`, `${and}/Andandofrente/003.png`]
        let animatedSprite = andar(imagens)
        return animatedSprite
    }
    if (estado == 'andarAtras'){
        let imagens = [`${and}/Andandotras/000.png`,`${and}/Andandotras/001.png`, `${and}/Andandotras/002.png`, `${and}/Andandotras/003.png`]
        let animatedSprite = andar(imagens)
        return animatedSprite
    }
    if (estado == 'idle'){
        let textureArray = [];
        let imagens = [`${and}/idle/000.png`,`${and}/idle/001.png`]
        for (let i=0; i < 2; i++)
        {
            let texture = PIXI.Texture.from(imagens[i]);
            textureArray.push(texture);
        };
        let animatedSprite = new PIXI.AnimatedSprite(textureArray);
        animatedSprite.animationSpeed = 0.167; 
        animatedSprite.play();
        return animatedSprite
    }

};

