let boxes = document.querySelectorAll('.box')
let player = "x"

function changePlayer ()
 if (player == "x") {
     player = "o"
 } else {
     player = "x"
 }

 boxes.forEach(function(box) {
     box.onclick = function (event) {
         if (event.target) {
             event.target 
             changePlayer
         } else
     }
 }