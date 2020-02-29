//set up a few variables
var char = "abcdefghijklmnopqrstuvwxyz";
var charUpper = char.toUpperCase();
var num = "0123456789";
var sym = "!@#$%^&*_+";

var passwordDisply = document.getElementById("disply");

var pwd = "";
//only generate password when click the button

submit.addEventListener("click",function(e){

    e.preventDefault();

    //button is clicked , then the prompt is shown up

    alert("Please choose your password criteria by answering the following questions.");


    var length = prompt("Please choose the length of password(between 8 and 128)")
    
    //the function will start when the length entered is number and between 8 to 128
    if (length >= 8 && length <= 128){
        alert("The length of password is "+ length);
        var passwordTotal = "";
        //console.log(passwordTotal);
        //choose character types:lowercase,uppercase,numeric,special characters//
        var confirmLowerCase = confirm("Do you want to include lowercase?");
        if (confirmLowerCase){
            alert("Lowercase included")
            passwordTotal=passwordTotal+ char;
        }
        else {
            alert("Lowercase not included");
        }

        var confirmUperCase = confirm ("Do you want to include Uppercase?");

        if (confirmUperCase){
            alert("Uppercase included");
            passwordTotal=passwordTotal+ charUpper;
        }
        else {
            alert("Uppercase not included");
        }

        var confirmNumber = confirm ("Do you want to include number?");

        if (confirmNumber){
            alert("Number included");
            passwordTotal=passwordTotal+ num;
        }
        else{
            alert("Number not included");
        }
        var confirmSpecial = confirm ('Do you want to include special characters?');
     
        if (confirmSpecial){
            alert("Special character included");
            passwordTotal=passwordTotal+ sym;
        }
        else{
            alert("Special character not included");
        }
        
        //create a loop to generate random characters
        //The user needs to select at least one type of character
        if(passwordTotal !==""){
            var pwd = "";
            function password(){
                for(var i=0;i<length;i++){
                    pwd += passwordTotal.charAt(Math.floor(Math.random()* passwordTotal.length));
                }
                return pwd;
            }
            password();
            // put the password in the disply in html
            passwordDisply.innerText = pwd;
        }
        else{
            alert("You  need to choose at least one character type!");
        }
    }
    else{
        alert("Please enter a number between 8 to 128 ");  
    }







    



















})














