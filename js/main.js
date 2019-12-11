window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js', {scope:'/urpoor/'});
    }
    document.getElementById("income").value = localStorage.getItem('i');
    document.getElementById("time").value = localStorage.getItem('t');
}

function doMagic(){
    let str = "Yeah, you are poor!"
    if(income.value != "" && time.value != "" && price.value != ""){
        let i = parseFloat(income.value);
        let t = parseFloat(time.value);
        let p = parseFloat(price.value);

        obj = {
            'i': i,
            't': t
        }
        localStorage.setItem('i', i);
        localStorage.setItem('t', t);

        let cost_per_hour = i/t;
        let hours_worked = p/cost_per_hour;

        str = "You worked "+ Math.ceil(hours_worked) + " hours for this!<br>~" + Math.round(hours_worked/8) + " days"   
    }
    txt.innerHTML = str;
}

let income = document.getElementById("income");
let time = document.getElementById("time");
let price = document.getElementById("price");
let txt = document.getElementById("txt");

income.addEventListener("keyup", doMagic());
time.addEventListener("keyup", doMagic);
price.addEventListener("keyup", doMagic);
