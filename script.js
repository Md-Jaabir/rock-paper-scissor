let playerSelection;
let score=0;
let game=document.querySelector(".game");
let result=document.querySelector(".result");
let rules=document.querySelector(".rules");
let yourChoiceBox=document.querySelector(".result .your-choice .choice-button .inside");
let aiChoiceBox=document.querySelector(".result .the-house-picked .choice-button .inside");
let scoreBox=document.querySelector(".scoreboard .scorebox h1");
let retryBox=document.querySelector(".retry-box");
let resultBox=document.querySelector(".retry-box h1");
let choices=["rock","paper","scissors"];
let aiChoice;

function select(item){
    playerSelection=item;
    game.classList.add("hide");
    result.classList.remove("hide");
    yourChoiceBox.innerHTML=`<img src="images/icon-${playerSelection}.svg" alt="${playerSelection}">`;
    yourChoiceBox.parentElement.id=playerSelection;
    aiChoose();
}

function aiChoose(){
    let randomNum=Math.floor(Math.random()*3);
    let winner;
    console.log(randomNum);
    aiChoice=choices[randomNum];
    setTimeout(()=>{
        aiChoiceBox.innerHTML=`<img src="images/icon-${aiChoice}.svg" alt="${aiChoice}">`;
        aiChoiceBox.parentElement.id=aiChoice;
        document.querySelector(".result .the-house-picked").classList.remove("not-picked");
        console.log(checkWinner(playerSelection,aiChoice));
        setTimeout(()=>{
            winner=checkWinner(playerSelection,aiChoice);
            if(winner==="you"){
                score++;
                console.log(score);
                document.querySelector(".your-choice .choice-button .round").classList.add("active");
            }else if(winner==="ai" && score>0){
                score--;
                document.querySelector(".the-house-picked .choice-button .round").classList.add("active");
            }
            setScore(score);
            retryBox.classList.remove("hide");
            resultBox.innerHTML=winner==="you"?"YOU WON":winner==="ai"?"YOU LOSE":"DRAWN";
        },1000);
    },1000);
}

function setScore(score){
    scoreBox.innerHTML=score;
}

function openRules(){
    rules.classList.remove("hide");
}

function closeRules(){
    rules.classList.add("hide");
}

function retry(){
    result.classList.add("hide");
    game.classList.remove("hide");
    document.querySelector(".result .the-house-picked").classList.add("not-picked");
    retryBox.classList.add("hide");
    document.querySelector(".the-house-picked .choice-button .round").classList.remove("active");
    document.querySelector(".your-choice .choice-button .round").classList.remove("active");
}

function checkWinner(yourChoice,aiChoice){
    let winner;
    if(aiChoice===yourChoice) return "draw";
    if(yourChoice==="rock"){
        if(aiChoice==="paper"){
            winner="ai";
        }else{
            winner="you"
        }
    }else if(yourChoice==="paper"){
        if(aiChoice==="scissors"){
            winner="ai";
        }else{
            winner="you"
        }
    }else if(yourChoice==="scissors"){
        if(aiChoice==="rock"){
            winner="ai";
        }else{
            winner="you"
        }
    }
    return winner;
}