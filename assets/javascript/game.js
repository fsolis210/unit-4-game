// Random number needs to be created at the start of game
$(document).ready(function(){
    var rando=Math.floor(Math.random()*25+86-7)


$("#randomNumber").text(rando);

// Create variables for gems (with random numbers), totals, wins and losses
var gemYellow= Math.floor(Math.random()*15+1)
var gemRed= Math.floor(Math.random()*15+1)
var gemGreen= Math.floor(Math.random()*15+1)
var gemBlue= Math.floor(Math.random()*15+1)

var playerTotal=0;
var wins=0;
var losses=0;

$("#numWins").text(wins);
$("#numLosses").text(losses);


function reset(){
    rando=Math.floor(Math.random()*25+86-7);
    
    $("#randomNumber").text(rando);
    gemYellow= Math.floor(Math.random()*15+1);
    gemRed= Math.floor(Math.random()*15);
    gemGreen= Math.floor(Math.random()*15);
    gemBlue= Math.floor(Math.random()*15);
    playerTotal=0;
    $("#playersTotal").text(playerTotal);

    }

// add wins
function winner(){
    wins++;
    $("#numWins").text(wins);
    reset()
}

// add losses
function loser(){
    losses++;
    $("#numLosses").text(losses);
    reset()
}

// add click commands to gems
$("#yellow").on("click", function(){
    playerTotal = playerTotal + gemYellow;
    $("#playersTotal").text(playerTotal);
        if (playerTotal == rando)
        winner();
        if (playerTotal > rando)
        loser();
})

$("#red").on("click", function(){
    playerTotal = playerTotal + gemRed;
    $("#playersTotal").text(playerTotal);
        if (playerTotal == rando){
        winner();
        }
        if (playerTotal > rando){
        loser();
        }
})

$("#green").on("click", function(){
    playerTotal = playerTotal + gemGreen;
    $("#playersTotal").text(playerTotal);
        if (playerTotal == rando){
        winner();
        }
        if (playerTotal > rando){
        loser();
        }
})

$("#blue").on("click", function(){
    playerTotal = playerTotal + gemBlue;
    $("#playersTotal").text(playerTotal);
        if (playerTotal == rando){
        winner();
        }
        if (playerTotal > rando){
        loser();
        }
})
})


