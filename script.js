/*기존의 색에서 랜덤으로 해결
const color=["red","blue","orange","pink"];
const btn= document.querySelector("input");
const colorname= document.querySelector(".color-name");


function changeColor(){
    const random = Math.floor(Math.random()*color.length)

    document.body.style.backgroundColor= color[random];
    colorname.innerText=color[random];

}

btn.addEventListener('click',changeColor)*/

/*const color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn= document.querySelector("input");
const colorname= document.querySelector(".color-name");

function changeColor(){
    const colornum="#";
    //#에다가 랜덤한 color[i]를 붙이기?
    //해결안 1) 그냥 6개를 연달아서 붙이기 
    //결과: 랜덤은 나오지만 한줄로일치되는친구만나와  
    const random = Math.floor(Math.random()*color.length);
    let newcolor= colornum+color[random]+color[random]+color[random]+color[random]+color[random]+color[random];
    document.body.style.backgroundColor=newcolor;
    colorname.innerText=newcolor;
    console.log(newcolor)

}
btn.addEventListener('click',changeColor)*/

/*🤔그러면 for로 돌려서 그걸 여러개 붙여볼까? 
//for인경우 랜덤으로 붙는게 아니라 순서대로 붙는다는 문제발생해서 
랜덤이 적용되지 않음 

function changeColor(){
    let colornum="#";  
    for(i=0; i<7;i++){
     colornum+=color[i];
     if(colornum.length==7){
        document.body.style.backgroundColor=colornum;
        colorname.innerText=colornum; }*/



/*const color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn= document.querySelector("input");
const colorname= document.querySelector(".color-name");

function changeColor(){
    const random = Math.floor(Math.random()*color.length);
    console.log(random)
   let colornum="#";
    for(let i=0;i<6;i++){ colornum+=color[random]}
        console.log(colornum)
        document.body.style.backgroundColor=colornum;
        colorname.innerText=colornum;
    }
function random(){
    return
}

btn.addEventListener('click',changeColor)*/

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

/*
const color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let r= Math.round(Math.random()*color.length);
function random2() {return Math.round(Math.random()*color.length)}
random2()
console.log(r)

let empty="#"; 
for(i=0;i<2;i++){
    empty += color[random2()]
    console.log(empty);
}

empty="#"; 
for(i=0;i<2;i++){
    empty += color[r]
    console.log(empty);
}
*/




