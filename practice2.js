// var userInfo = {
//     username: "Kazim",
//     password: 123456
// };

var database = [{
    username: "Kazim",
    password: "123456"
}];

// var database = [userInfo]
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

function authentify(user, pass){
if(user === database[0].username && 
    pass === database[0].password){
    console.log(newsfeed);
} 
else {
alert("try again");
}

}

authentify(usernamePrompt, passPrompt);