const btn = document.querySelector(".btn");
btn.addEventListener("click", ()=> {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        document.querySelector(".bishkek").innerHTML = data.bishkek;
        document.querySelector(".osh").innerHTML = data.osh;
        document.querySelector(".djalal").innerHTML = data.djalal;
        document.querySelector(".naryn").innerHTML = data.naryn;
        document.querySelector(".talas").innerHTML = data.talas;
        document.querySelector(".karakol").innerHTML = data.karakol;
    })
});