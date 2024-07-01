let bodyEle=document.body
//console.log(bodyEle);

let buttonEle=document.getElementById("button");
let colorNameEle=document.getElementById("colorName");
//console.log("narendra");

buttonEle.addEventListener("click",function(){
    let letters="0123456789ABCDEF";
    let directions=["to bottom","to top","to right","to left"];
    let direction=directions[Math.floor(Math.random()*4)];
    let color1="#";
    let color2="#";
    for (i=0;i<6;i++){
        color1=color1+letters[Math.floor(Math.random()*16)];
        color2=color2+letters[Math.floor(Math.random()*16)];
    };
    bodyEle.style.backgroundImage = `linear-gradient(${direction}, ${color1}, ${color2})`;
    colorNameEle.textContent = `Direction: ${direction}, Color1: ${color1}, Color2: ${color2}`;
})