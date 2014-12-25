/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    for (var row = 0; row < 16; row++){
        for (var col = 0; col < 16; col++){
            $('#mainGrid').append("<div></div>"); // should append divs
        }
    }
    $("div").css("background-color","red");
});

