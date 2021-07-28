const color=["red","blue","orange","pink"];
const btn= document.querySelector("input");
const colorname= document.querySelector(".color-name");


function changeColor(){
    const random = Math.floor(Math.random()*color.length)

    document.body.style.backgroundColor= color[random];
    colorname.innerText=color[random];

}

btn.addEventListener('click',changeColor)







