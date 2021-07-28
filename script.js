

const color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn= document.querySelector("input");
const colorname= document.querySelector(".color-name");

function changeColor(){
  
   let colornum="#";
    for(let i=0;i<6;i++){ colornum+=color[random()]}
        console.log(colornum)
        document.body.style.backgroundColor=colornum;
        colorname.innerText=colornum;
    }
function random(){
    return Math.floor(Math.random()*color.length);
}
console.log(random())
btn.addEventListener('click',changeColor)




