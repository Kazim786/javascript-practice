var usersList = [
    { username: "Kaz144",
      password: 123456
        }, 
    { username: "kf_rambo",
      password: 456789
    
}];
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
listInObj.myInfo[0] = "sssn";
//output: 
"sssn"
listInObj
{myInfo: Array(3)}myInfo: (3) ["sssn", "age", "hobbies"]__proto__: Object
listInObj.myInfo.push("family");
4
listInObj
{myInfo: Array(4)}myInfo: (4) ["sssn", "age", "hobbies", "family"]__proto__: Object