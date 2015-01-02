/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    createNewGame();
    addHover();
});

function resetGame(){
    $("#mainGrid").empty(); // get rid of previous grid
    createNewGame();
}

function createNewGame(){ 
    // find squareDim
    var squaresPerSide = prompt("Enter how many square you want per side (1-100):");
    if (squaresPerSide < 1)return;
    else if(squaresPerSide > 100)return;
    
    var squareDim = Math.round($("#mainGrid").width()/squaresPerSide); // used to be floor, not sure
    console.log("squareDim == " + squareDim);
    // must adjust squareDim to more accurately reflect the dimension
    
    generateGrid(squaresPerSide);
    addHover();
    adjustSquare(squareDim);
    adjustMainGrid(squareDim,squaresPerSide);
}

function generateGrid(squaresPerSide){
    for (var rowLoop = 0; rowLoop < squaresPerSide; rowLoop++){
        for (var colLoop = 0; colLoop < squaresPerSide; colLoop++){
            $("<div class='square'></div>").appendTo("#mainGrid");
            console.log(rowLoop + "," + colLoop);
        }
    }
}

function adjustSquare(newDim){
    // find out what the proper dim
    $(".square").css({ 
        width:newDim,// of px
        height:newDim
    });
}

// Set the mainGridDim to reflect rounding errors
function adjustMainGrid(squareDim,squaresPerSide){
    var mainGridDim = (squareDim * squaresPerSide);
    $("#mainGrid").css({
        width:mainGridDim,
        height:mainGridDim
    });
}

function addHover(){
    $( ".square" ).hover(function() {
        $( this ).addClass("hovered");
    });
}
