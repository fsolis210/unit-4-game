// Random number needs to be created at the start of game
$(document).ready(function(){
    var rando=Math.floor(Math.random()*25+86-7)


$("#randomNumber").text(rando);
})
// Create random n umbers for each jewel
