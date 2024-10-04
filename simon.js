let gameseq=[];
let userseq=[];

let btns=["red","green","yellow","purpal"]

let started=false;
let level=0;

let h2= document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game stareted");
        started=true;

        levelUp();

    }

 
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function levelUp(){
    userseq=[];
    level++
    h2.innerText=`Levle ${level}`;
//Random btn choose

 let randindx=Math.floor(Math.random()*4);
 let randcolor=btns[randindx];
 let randbtn=document.querySelector(`.${randcolor}`);
 gameseq.push(randcolor)
 console.log(gameseq);

    btnflash(randbtn);
}

function checkans(indx){
    // console.log(`currant levle ${level}`);

    
    if(gameseq[indx] === userseq[indx]){
        if(gameseq.length == userseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`game over! your score is <b> ${level}</b> <br>plese Restart any key to press `;

        let body = document.querySelector("body");
        body.style.backgroundColor="red"
        setTimeout(function(){
            body.style.backgroundColor="white"  
        }, 150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}