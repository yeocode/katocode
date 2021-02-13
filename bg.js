const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const numeber = Math.floor(Math.random() * IMG_NUMBER);
    return numeber;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();