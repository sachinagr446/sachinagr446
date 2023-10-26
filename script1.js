let turn="X";
let gameover=false;
const swap=()=>{
    if(turn=="X"){
        return "O";
    }
    else{
        return "X";
    }
}
const checkWin = ()=>{
    let box1 = document.getElementsByClassName("box1");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((box1[e[0]].innerText === box1[e[1]].innerText) && (box1[e[2]].innerText === box1[e[1]].innerText) && (box1[e[0]].innerText !== "") ){
            document.getElementsByClassName('turns')[0].innerText = box1[e[0]].innerText + " Won";
            gameover = true;
          
        
        }
    })

}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let box1 = element.querySelector('.box1');
    element.addEventListener('click', ()=>{
        if(box1.innerText===''){
            box1.innerText= turn;
           turn = swap();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("turns")[0].innerText= "Turn For "+turn;
            }
        }
    })

})

reset.addEventListener("click", ()=>{
    let box1 = document.querySelectorAll('.box1');
Array.from(box1).forEach(element => {
    element.innerText="";
    turn="X";
    document.getElementsByClassName("turns")[0].innerText= "Turn For "+turn;
    gameover=false;
    
})
})