let userscore=0;
let computerscore=0;
const Allchoice=document.querySelectorAll(".choice");
const msgchoice=document.querySelector("#move");
const userp=document.querySelector("#user");
const comp=document.querySelector("#comp");
const computerchoice=()=>{
    const option=["rock","scissors","paper"]
    const index=Math.floor(Math.random()*3);
    return option[index];
}
const gamedraw=()=>{
    console.log("DRAW");
    msgchoice.innerText="Draw!";
    msgchoice.style.backgroundColor="blue";

}
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userp.innerText=userscore;
        console.log("Yoouwin!");
        msgchoice.innerText="YouWin!"
        msgchoice.style.backgroundColor="green";
    }
    else{
        computerscore++;
        comp.innerText=computerscore;
        console.log("Youlost!");
        msgchoice.innerText="YouLost!"
        msgchoice.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("userchoice is ",userchoice);
    let computersch=computerchoice();
    console.log("compters choice is",computersch);
    if(userchoice==computersch){
        gamedraw();
    }
    else{
        let userwin="true";
        if(userchoice==="rock"){
            userwin=computersch==="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=computersch==="scissor"?false:true;
        }
        else{
            userwin=computersch==="rock"?false:true;
        }
        showwinner(userwin);
    }
   
};

Allchoice.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);


    })
})