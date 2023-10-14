let password = "Crislene"
let pass = prompt("Enter your password");
if(password.length == 8){
    console.log("Welcome");
}
else if(password.length <= 8){
    console.log("Password is too short");
}
else if(password.length >= 8){
    console.log("Too long password & password should be 8 characters");
}
else{
    console.log("Please provide a password");
}