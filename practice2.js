// var userInfo = {
//     username: "Kazim",
//     password: 123456
// };

// var database = [{
//     username: "Kazim",
//     password: "123456"
// }, {username: "andy33",
//     timeline: "sdfsdf"
    // },
    // {username: "anne32",
    // timeline: "asdf"
    // },
    // {username: "amanda34",
    // timeline: "asds"
    // }];

// var database = [userInfo]
// var newsfeed = [
    // {username: "andy33",
    // timeline: "sdfsdf"
    // },
    // {username: "anne32",
    // timeline: "asdf"
    // },
    // {username: "amanda34",
    // timeline: "asds"
    // }
// ]

// var usernamePrompt = prompt("enter username")
// var passPrompt = prompt("enter password")

// function authentify(user, pass){
// if(user === database[0].username && 
//     pass === database[0].password){
//     console.log(newsfeed);
// } 
// else {
// alert("try again");
// }

// }

// authentify(usernamePrompt, passPrompt);

//Loop practice

// var todos = [
//     "clean room",
//     "brush",
//     "exercise",
//     "study",
//     "eat"
// ];

// for (var i = 0; i < todos.length; i++) {
//     // todos[i] = todos[i] + "!"; adds ! after every activity
//     todos.pop();
// }


//to cross activities off from the list
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//     // todos[i] = todos[i] + "!"; adds ! after every activity
//     todos.pop();
// }

// var counterOne = 0;
// while (counterOne < 10){
//     console.log(counterOne);
//     counterOne++
// }

// var counterOne = 10;
// while (counterOne > 0){
//     console.log(counterOne);
//     counterOne--
// }

// var counterTwo = 10
// do{
//     console.log(counterTwo)
//     counterTwo--;

// }while(counterTwo > 0)


//comparing for loop with forEach
// var todosLength = todos.length;
// for(var i=0; i < todosLength; i++ ){
//     console.log(i)
// }


//for each loop
// todos.forEach(function(i) {
//     console.log(i)
// })
    

// *******************

//facebook clone with loops


var database = [
    {
    username: "Kazim",
    password: "123456"
    }, 
    {username: "andy33",
    password: "7777"
    },
    {username: "anne32",
    password: "8989"
    },
    {username: "amanda34",
    password: "4555"
    }];


var newsfeed = [
    {username: "andy33",
    timeline: "sdfsdf"
    },
    {username: "anne32",
    timeline: "asdf"
    },
    {username: "amanda34",
    timeline: "asds"
    }
]

var usernamePrompt = prompt("enter username")
var passPrompt = prompt("enter password")


//To see if the user is valid
function isUserValid (user, pass){
    for(var i = 0; i < database.length; i++){
        if(user === database[i].username && 
            pass === database[i].password){
            return true;
        } 
    }
    return false;
}

//once the isUserValid function verifies the user this function takes the result of isUserValid function and then determines if they can see the newsfeed
function authentify(user, pass){
if(isUserValid(user, pass)){
    console.log(newsfeed)
}
    else{
        alert("try again :/")
    }

}

authentify(usernamePrompt, passPrompt);


