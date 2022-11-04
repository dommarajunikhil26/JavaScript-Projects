let buttonClicked=document.querySelectorAll(".btns");
let totalScore=0;
buttonClicked.forEach(function(event){
    event.addEventListener('click', e =>{
        const buttonSelected=event.value;
        let comChoice=computerChoice();
        let score=calculateScore(buttonSelected,comChoice);
        totalScore+=score;
        playerscore(totalScore);
        result(score);
        if(event.value==="end"){
            endButtonClicked();
        }
    })
})

function computerChoice(){
    let randomNumber=Math.floor(Math.random()*3);
    const outputArray=["Rock","Paper","Scissors"];
    let randomChoice=outputArray[randomNumber];
    return randomChoice;
}
function calculateScore(player,com){
    if(player===com){
        return 0;
    }
    else if(player==="Rock" && com==="Scissors"){
        return 1;
    }
    else if(player==="Scissors" && com==="Paper"){
        return 1;
    }
    else if(player==="Paper" && com==="Rock"){
        return 1;
    }
    else if(player=="end"){
        return 0;
    }
    else{
        return -1;
    }
}
function playerscore(totalScore){
    document.querySelector(".playerScore").innerHTML="Your Score: "+totalScore;
}
function result(score){
    if(score===1){
        document.querySelector(".result").innerHTML="You Win!";
    }
    else if(score===-1){
        document.querySelector(".result").innerHTML="You Lost!";
    }
    else{
        document.querySelector(".result").innerHTML="It's a Draw!";
    }
}
function endButtonClicked(){
    document.querySelector(".playerScore").innerHTML='';
    document.querySelector(".result").innerHTML='';
    totalScore=0;
}