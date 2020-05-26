var usersList = [
    { username: "Kaz144",
      password: 123456
        }, 
    { username: "kf_rambo",
      password: 456789
    
}];
//adding to the object that is inside of a list
usersList[0].name = "Kazim";
// output: 
"Kazim"
usersList
(2) [{…}, {…}]0: {username: "Kaz144", password: 123456, name: "Kazim"}1: {username: "kf_rambo", password: 456789}length: 2__proto__: Array(0)
var listInObj = {
    myInfo: ["ssn", "age", "hobbies"]
};
// output: 
undefined
//making changes to a list thats inside of an object
listInObj.myInfo[0] = "sssn";
//output: 
"sssn"
listInObj
{myInfo: Array(3)}myInfo: (3) ["sssn", "age", "hobbies"]__proto__: Object
listInObj.myInfo.push("family");
4
listInObj
{myInfo: Array(4)}myInfo: (4) ["sssn", "age", "hobbies", "family"]__proto__: Object

//function inside of an object

user.shouts = function(){
    console.log("AHHHHH");
}
ƒ (){
    console.log("AHHHHH");
}
user
{name: "John", age: 34, hobby: "mma", favoriteFood: "Biryani", shouts: ƒ}
user.shouts()
AHHHHH