var computerSelection;
var result;
var computer = 0;
var User     = 0;
var playerSelection;
var Comment = document.getElementById("resultMSG");


function getComputerChoice(){
    var number = Math.floor(Math.random()*3);
    switch(number){
                case 0:
            computerSelection = "rock";
            document.getElementById("computer_selection_img").src = "files/rock_left.png";
            document.getElementById("computerSlectionCard").innerHTML = "ROCK";
                        break;
                case 1:
            computerSelection = "paper";
            document.getElementById("computer_selection_img").src = "files/paper_left.png";
            document.getElementById("computerSlectionCard").innerHTML = "PAPER";
                        break;
                case 2:
            computerSelection = "scissor";
            document.getElementById("computer_selection_img").src = "files/scissor_left.png";
            document.getElementById("computerSlectionCard").innerHTML = "SCISSOR";
                        break;
    }console.log(computerSelection);
}


function playRound(playerSelection,computerSelection){
    
    switch(computerSelection){
        case "rock":
            switch(playerSelection){
                case "rock": result="draw"; 
                        break;
                case "paper": result="won";Comment.innerHTML = "Won, Paper beats Rock";         
                        break;
                case "scissor": result="lose"; Comment.innerHTML = "Lost, Rock beats Scissor"; 
                        break;
                    default : result="invalid";
            }break;
        case "paper":
            switch(playerSelection){
                case "rock": result="lose";Comment.innerHTML = "Lost, Paper beats Rock";
                        break;
                case "paper": result="draw";
                        break;
                case "scissor": result="won";Comment.innerHTML = "Won, Scissor beats Paper";
                        break; 
                default : result="invalid" ;
            }break; 
        case "scissor":
            switch(playerSelection){
                case "rock": result="won";Comment.innerHTML = "Won, Rock beats Scissor";
                        break;
                case "paper": result="lose";Comment.innerHTML = "Lost, Scissor beats Paper";
                        break;
                case "scissor": result="draw"; 
                        break;  
                default : result="invalid";    
            }break;    
    }console.log(playerSelection, result);
    
    switch(playerSelection){
                case "rock": document.getElementById("user_selection_img").src = "files/rock.png";
                    document.getElementById("userSlectionCard").innerHTML = "ROCK";
                        break;
                case "paper":document.getElementById("user_selection_img").src = "files/paper.png";
                  document.getElementById("userSlectionCard").innerHTML = "PAPER";
                        break;
                case "scissor":document.getElementById("user_selection_img").src = "files/scissor.png"; 
                        document.getElementById("userSlectionCard").innerHTML = "SCISSOR";}
    
}

function gameOver(){
    return User === 5 || computer === 5 
}

function remainingGames(){
    
    if(User>computer){
        var remaining = 5-User;
         document.getElementById("remainingGames").innerHTML = "Great, "+remaining+" Points to win";
        }else if(computer>User){
            var remaining = 5-computer;
            if(remaining < 3){document.getElementById("remainingGames").innerHTML = "Hurry, Only "+remaining+" Points to lose";}
              else{document.getElementById("remainingGames").innerHTML = "Falling Behind";}
        }else if(User=computer){
            document.getElementById("remainingGames").innerHTML = "Score Level";}    
        
}

function userWonMsg(){
     document.getElementById("message").style = "display:none;";
     document.getElementById("message1").style = "display:none;";
     document.getElementById("score_card_id").style = "display:none;";
     document.getElementById("VS").style = "background-image: url(files/test_files/yellow_bg.jpg);";
     document.getElementById("resultBox_ID").className = "resultBoxVisible";
     document.getElementById("wonID").style = "display:flex;";
    document.getElementById("stars_id").style = "display:flex;";
     document.getElementById("computerSlectionCard").innerHTML = "...";
    document.getElementById("userSlectionCard").innerHTML = "...";
    document.getElementById("resetBtn").style = "visibility: visible;";
}
function userLostMsg(){
     document.getElementById("message").style = "display:none;";
     document.getElementById("message1").style = "display:none;";
     document.getElementById("score_card_id").style = "display:none;";
     document.getElementById("VS").style = "background-image: url(files/test_files/dark_bg.jpg);";
     document.getElementById("resultBox_ID").className = "resultBoxVisible";
     document.getElementById("lostID").style = "display:flex;";
    document.getElementById("stars_id").style = "display:none;";
     document.getElementById("computerSlectionCard").innerHTML = "...";
    document.getElementById("userSlectionCard").innerHTML = "...";
    document.getElementById("resetBtn").style = "visibility: visible;";
}

function resetClass(){
    document.getElementById("tie_flash").classList.remove("tie_score_flash_purple");
    document.getElementById("tie_flash").classList.remove("tie_score_flash_red");
    document.getElementById("u_win_flash").classList.remove("user_side_flash");
    document.getElementById("c_win_flash").classList.remove("computer_side_flash");
    
}

const rock_btn = document.getElementById("rock_btn");
const paper_btn = document.getElementById("paper_btn");
const sci_Btn = document.getElementById("scissor_btn");

rock_btn.addEventListener("click",() => handleClick("rock"));
paper_btn.addEventListener("click",() => handleClick("paper"));
sci_Btn.addEventListener("click",() => handleClick("scissor"));


function handleClick(playerSelection){
    
    if(gameOver()){
        return winnerMsg();
    }
    resetClass();
    getComputerChoice();
    playRound(playerSelection, computerSelection);  
    
    switch(result){
           case "won": User++;
                       document.getElementById("user_score_id").innerHTML = User; 
                      document.getElementById("u_win_flash").classList.add("user_side_flash");
                     document.getElementById("tie_flash").classList.add("tie_score_flash_red");
                        
                        break;
        
           case "lose": computer++; 
                        document.getElementById("computer_score_id").innerHTML = computer; 
            document.getElementById("c_win_flash").classList.add("computer_side_flash");
            document.getElementById("tie_flash").classList.add("tie_score_flash_purple");
            
                        break;
             
           case "draw": document.getElementById("tie_flash").classList.add("tie_score_tie");
            Comment.innerHTML = "TIE";
                        break;} 
    remainingGames();
    if(gameOver()){
        return winnerMsg();
    }
    console.log(User, computer);
}

function winnerMsg(){
    if(User>computer){
        console.log("You won");
        userWonMsg();
        
    }else if(computer>User){
        console.log("Computer won");
        userLostMsg();
    }
    else{
        console.log("Match Draw")
}}
    
function resetBtn(){
    computer = 0;
    User     = 0;
    document.getElementById("computer_score_id").innerHTML = 0;
    document.getElementById("user_score_id").innerHTML = 0;
    document.getElementById("computerSlectionCard").innerHTML = "...";
    document.getElementById("userSlectionCard").innerHTML = "...";
    document.getElementById("remainingGames").innerHTML = "5 Points to win";
    document.getElementById("message").style = "display:flex;";
     document.getElementById("message1").style = "display:flex;";
     document.getElementById("score_card_id").style = "display:flex;";
     document.getElementById("VS").style = "background-image: url(files/test_files/versus2.jpg);";
     document.getElementById("resultBox_ID").className = "resultBoxHidden";
    document.getElementById("tie_flash").className = "tie_score";
     document.getElementById("wonID").style = "display:none;";
    document.getElementById("wonID").innerHTML = "Game Won<br>Congrats";
    document.getElementById("stars_id").style = "display:none;";
}
