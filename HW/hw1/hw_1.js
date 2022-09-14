const personal_ID = document.querySelector(".personal_ID");
const input_ID = document.querySelector(".input_ID");
const ID_result = document.querySelector(".ID_result")

const idRegExp = /^(0|1)\d{13}$/;

input_ID.addEventListener("click", () => {
    if(idRegExp.test(personal_ID.value)){
        ID_result.innerText = "Верно";
        ID_result.style.color = "green";
    }else {
        ID_result.innerText = "Ошибка";
        ID_result.style.color = "red";
    }
})


//
// const click = document.querySelector(".click");
// const block = document.querySelector(".block");
// const wrapper = document.querySelector(".wrapper")
//
// let position = 0;
//
//
// const count = () => {
//     position +=10;
//     block.style.left = position + 'px'
//     console.log(position)
//     if (position <= 445) {
//         count()
//     }
// };
//
// click.addEventListener("click", count)
//





