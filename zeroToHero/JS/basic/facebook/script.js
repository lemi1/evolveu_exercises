var database = [
    {
        username: 'lemi',
        password:'disney'
    }
];

var newsFeed = [
    {
        username:'roz',
        timeline:'i hate coding'
    }
    {
        username:'jeff',
        timeline:'i love coding'
    }
];
var userNamePrompt = prompt('what is your username?');
var passwordPrompt = prompt('what is your password');

function signIn( user, pass){
    if(user === database[0].username 
        &&
         pass === database[0].password){
             console.log(newsFeed);

         }else{
             alert('sorry, wrong username and password')
         }
}

signIn(userNamePrompt,passwordPrompt);