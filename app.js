let boxes=document.querySelectorAll('.cell');
let resetbtn=document.querySelector('#reset');
let newGame=document.querySelector('#new-button');
let msgcontainer=document.querySelector('.message');
let msg=document.querySelector('#msg');
let turn=0;
let gamewinning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame=()=>{
    turn=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        if(turn){
            box.innerHTML="X";
            turn=false;
            
        }else{
            box.innerHTML="O";
            turn=true;
        }
        box.disabled=true;
        checkwinner();
    })
});
const disableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const showwinner=(a)=>{
    msg.innerHTML=`${a} is the winner`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    
}
const checkwinner=()=>{
    for(let pattern of gamewinning){
        let a=boxes[pattern[0]].innerHTML;
        let b=boxes[pattern[1]].innerHTML;
        let c=boxes[pattern[2]].innerHTML;
        if (a!="" && b!="" && c!="" && a==b && b==c){
            console.log("winner");
            showwinner(a);
        
        }
    }
    };
resetbtn.addEventListener('click',resetgame);
newGame.addEventListener('click',resetgame);