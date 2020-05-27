//DC Homework

//Tip calculator:

// var pay = prompt("How much do you want to pay?")
// var quality = prompt("How was the quality? Good, Fair, or Bad?")


// function tipAmount(pay, quality){
//     pay= Number(pay);
//     var tip;
//     if(quality === "Good"){
//         tip = pay * .20
//         alert(tip)
//     }
//     else if(quality === "Fair"){
//         tip = pay * .15
//         alert(tip)
        
//     }
//     else if (quality === "Bad"){
//         tip = pay * .10
//         alert(tip)
//     }
// return tip

// }

// tipAmount(pay, quality);

//******************************** */

//Leetspeak

var string = prompt("Enter a sentence or word")

function leetspeak(string){
    if(string.includes("A")){
        string = string.replace("A", "4")
        // return string
    }
    else if(string.includes("E")){
        string = string.replace('E', '3')
        // return string
    }
    else if(string.includes("G")){
        string = string.replace("G", "6")
        // return string
    }
    else if(string.includes("I")){
        string = string.replace("I", "1")
        // return string
    }
    else if(string.includes("O")){
        string = string.replace("o", "0")
        // return string
    }
    else if(string.includes("S")){
        string = string.replace("S", "5")
        // return string
    }
    else if(string.includes("T")){
        string = string.replace("T", "7")
        // return string
    }
    return string
    
}

alert(leetspeak(string));