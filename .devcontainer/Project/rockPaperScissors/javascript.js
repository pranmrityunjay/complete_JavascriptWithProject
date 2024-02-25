let userScore=0;
let compScore=0;

prevScore=document.querySelector("#user-score");
L=document.querySelector("#Computer-score")


const small=document.querySelectorAll('.small')
const message=document.querySelector("#message")

const ShowWinner=(userWin)=>{
    if(userWin){
        userScore++;
        message.innerHTML="You Win"
        prevScore.innerHTML=userScore;

    
    }
    else{
        compScore++;
        L.innerHTML=compScore;

    message.innerHTML="compuerWin"
    }
    

}
const drawGame=()=>{
    message.innerHTML="game draw"

}
const genComputerChoice=()=>{
    const option=["rock","paper","scissors"]
    const temp=Math.floor((Math.random())*3);
    return option[temp];
}
const playGame=(userChoice)=>{
    const compChoice=genComputerChoice();
    if(userChoice==compChoice)
    drawGame();
else{
    let userWin=true;
    if(userChoice=="rock"){
        if(compChoice=="paper")
        userWin = compChoice === "paper" ? false : true;

    }
    else if(userChoice=="paper"){
        if(compChoice=="rock")
        userWin=true;
        if(compChoice=="scissors")
        userWin=false;


    }

    else{
        if(compChoice=="paper")
        userWin=true;
        if(compChoice=="rock")
        userWin=false;


    }

    ShowWinner(userWin);
    
}
    


}
small.forEach((each)=>{
    // console.log(each)
    each.addEventListener("click",(E)=>{
        // const id=each.getAttribute('id')
        const userChoice=each.getAttribute("id")
        playGame(userChoice)



        
        

    })

})