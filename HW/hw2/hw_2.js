
//*********** ПЕРВОЕ ЗАДАНИЕ - SetTimeout *****************

const block = document.querySelector(".block")


let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX <= 445 && positionY == 0) {
        positionX += 10;
        block.style.left = `${positionX}px`;
        setTimeout(move, 100);
        console.log(positionX)
    }else if (positionX >= 445 && positionY <=445){
        positionY += 10;
        block.style.top = `${positionY}px`
        setTimeout(move, 100);
        console.log(positionY);
    }else if (positionY >= 445 && positionX != 0){
        positionX -= 10;
        block.style.left = `${positionX}px`;
        setTimeout(move, 100);
        console.log(positionX)
    }else if (positionX == 0 && positionY != 0){
        positionY -= 10;
        block.style.top = `${positionY}px`
        setTimeout(move, 100);
        console.log(positionY);
    }
}
move()


//*********** ВТОРОЕ ЗАДАНИЕ - ИНТЕРВАЛ *****************


// let i = 0;
// const interval = setInterval(() => {
//     i++;
//     console.log(i + " " + "seconds left");
// }, 1000);
// setTimeout(() => {
//     clearInterval(interval);
// }, 20000);

