const boxes = document.querySelectorAll('.box')
let myPlayer = "x"
const xArray = []
const oArray = []
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function changePlayer () {
 if (myPlayer == "x") {
     myPlayer = "o"
 } else {
     myPlayer = "x"
 }
}

function checkforWinner (myArray) {
        final_result = myArray.every(function(element) {
            return win[2].includes(element)
        })
        if (final_result == true) {
            alert('We have a winner')
        }
    
}
        
//    for (let i = 0; i < win.length; i++) {
//         if (myArray.every((e) => win.includes(e))) {
//             alert('We have a winner!')
//         }
//     }


boxes.forEach(function(box) {  
    box.onclick = function() {
        if (box.innerHTML == '' && myPlayer == 'x') {         
            box.innerHTML = 'x'
            cellID = box.id.replace('c','') 
            xArray.push(cellID)
            checkforWinner(xArray) 
    
        } else if (box.innerHTML == '' && myPlayer == 'o') {          
            box.innerHTML = 'o'
            cellID = box.id.replace('c','')
            oArray.push(cellID)
            checkforWinner(oArray) 

        } else if (box.innerHTML == 'x' || box.innerHTML == 'o') {
            alert ('Sorry dude, you cannot click on the same box again')
        } 
        changePlayer() 
    }       
})


// let player = 1
// const box = document.getElementsByClassName('box')

// for (let i = 0; i < box.length; i++) {
//     if (player % 2 == 0) {
//         box[i].onclick = function () {
//             if (box[i].innerHTML == '') {
//                 box[i].innerHTML = 'x'
//             } else {
//                 alert('Sorry dude, you cannot click on the same box again')
//             }   
//         } 
//     } 
//     else {
//         box[i].onclick = function () {
//             if (box[i].innerHTML == '') {
//                 box[i].innerHTML = 'o'
//             } else {
//                 alert('Sorry dude, you cannot click on the same box again')
//             }           
//         }
//     }
//     player++
// }

