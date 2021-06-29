var final = document.getElementById("final");
let error="";
var user={
    firstname:"",
    lastname:"",
    mobilenumber:"",
    company:"",
    city:"",
    password:""
}

function Checker(param1){
    let nameChecker = function(param1) {
        if(typeof(param1)=="string"){
            if(param1.length > 1){
                return true;
            }
            else{
                error+=param1+" is wrong<br>";
                return false;
            }
        }
        else{
            error+=param1+" is wrong<br>";
            return false;
        }
    }
    
    let numberChecker = function(param1) {
        if(typeof(param1)=="number"){
            if(param1.toString().length == 10){
                return true;
            }
            else{
                error+=param1+" is wrong<br>";
                return false;
            }
        }
        else{
            error+=param1+" is wrong<br>";
            return false;
        }
    }
    
    let passwordChecker = (param1) => {
        if(typeof(param1)=="string"){
            if(param1.length >= 8){
                return true;
            }
            else{
                error+=param1+" is wrong<br>";
                return false;
            }
        }
        else{
            error+=param1+" is wrong<br>";
            return false;
        }
    }
    Validator(nameChecker(user.firstname),nameChecker(param1[1]),numberChecker(parseInt(param1[2])),
        () => { 
            if(typeof(param1[3]) == "string"){
                if(param1[3].length > 1){
                    return true;
                }
                else{
                    error+=param1+" is wrong<br>";
                    return false;
                }
            }
            error+=param1+" is wrong<br>";
            return false;}, 
        nameChecker(param1[4]),passwordChecker(param1[5]));
}

function Splitter(param1){
    let splittedValues = param1.split(" ");
    user={
        firstname:splittedValues[0],
        lastname:splittedValues[1],
        mobilenumber:splittedValues[2],
        company:splittedValues[3],
        city:splittedValues[4],
        password:splittedValues[5]
    }
    Checker(splittedValues);
}

function Validator(param1,param2,param3,param4,param5,param6){
    if(param1 && param2 && param3 && param4 && param5 && param6){
        final.innerHTML="Done";
    }
    else{
        final.innerHTML=error;
    }
}

document.getElementById('submitData').addEventListener("click",function(){
    let value = document.getElementById("info").value;
    Splitter(value);
});