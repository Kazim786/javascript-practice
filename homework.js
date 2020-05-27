//DC Homework

//Tip calculator:

var pay = prompt("How much do you want to pay?")
var quality = prompt("How was the quality? Good, Fair, or Bad?")


function tipAmount(pay, quality){
    pay= Number(pay);
    var tip;
    if(quality === "Good"){
        tip = pay * .20
        alert(tip)
    }
    else if(quality === "Fair"){
        tip = pay * .15
        alert(tip)
        
    }
    else if (quality === "Bad"){
        tip = pay * .10
        alert(tip)
    }
return tip

}

tipAmount(pay, quality);