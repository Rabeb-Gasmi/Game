const col=document.querySelectorAll('.column');
const win=[
  [0,1,2], 
  [3,4,5], 
  [6,7,8], 
  [0,3,6],
  [1,4,7], 
  [2,5,8], 
  [0,4,8], 
  [2,4,6]
];
let turn=true;
let column=[];

let player1={
    symbol:'<i class="fa fa-close"></i>',
    played: [],
    score:0
}
let player2={
    symbol:'<i class="fa fa-circle-o">o</i>',
    played: [],
    score:0
}




for(let i=0; i<9; i++){
    col[i].addEventListener('click',()=>{
     if(isEmpty(i)){
        if(turn){    
            addSymbol(player1, i);
            winner(player1);
            turn=false;
        }else{
            addSymbol(player2, i);
            winner(player2);
            turn=true;

        }
     }else {
            alert("choisir un case vide");
        }
        // col[i].innerHTML='<i class="fa fa-close"></i>';
    })
}
function addSymbol(player, i){
    col[i].innerHTML=player.symbol;
    player.played.push(i);
    column.push(i);
}
function winner(player){
win.some(combo =>{
    if(combo.every(index=>player.played.includes(index))){
        alert('you are a winner');
    }
})
}
function isEmpty(i){
    if(column.includes(i)){
        return false;
    }
    else {return true};

}