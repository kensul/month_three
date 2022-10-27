const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");
const kzt = document.querySelector("#kzt");


const convert = (elem, target, target2, target3) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2);
                target2.value = (elem.value / response.euro).toFixed(2);
                target3.value = (elem.value / response.kzt).toFixed(2);
            } else if (elem === euro) {
                target.value = (elem.value * response.euro).toFixed(2)
                target2.value = (elem.value * response.euro / response.usd).toFixed(2)
                target3.value = (elem.value * response.euro / response.kzt).toFixed(2)
            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value * response.usd / response.euro).toFixed(2)
                target3.value = (elem.value * response.usd / response.kzt).toFixed(2)
            } else if (elem === kzt) {
                target.value = (elem.value * response.kzt).toFixed(2)
                target2.value = (elem.value * response.kzt / response.usd).toFixed(2)
                target3.value = (elem.value * response.kzt / response.euro).toFixed(2)
            }

            // elem.value === "" ? (target.value = "") : null;
            // elem.value === "" ? (target2.value = "") : null;
            // elem.value === "" ? (target3.value = "") : null;
            elem.value === "" ? (target.value = "") || (target2.value = "") || (target3.value = "") : null;
        });
    });
};

convert(som, usd, euro, kzt);
convert(euro, som, usd, kzt);
convert(usd, som, euro, kzt);
convert(kzt, som, usd, euro);

