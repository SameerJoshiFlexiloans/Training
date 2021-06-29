let users=[
    {firstname:"Sameer",lastname:"Joshi",mobile:9421509117,city:"Mumbai"},
    {firstname:"Tanmay",lastname:"Joshi",mobile:9922463919,city:"Aurangabad"},
    {firstname:"Rajesh",lastname:"Jadhav",mobile:1234567890,city:"Aurangabad"}
];

fetch("https://mocki.io/v1/fb361900-0ad8-4719-ab73-29fc0718d241")
.then(response=>{
    return response.json();})
.then(data =>{
    users=data["data"];
});


let value="";
document.getElementById('fetch').addEventListener("click",function(){
    fetchUser();
})

function findUser(user){
    let info=user.split(" ");
    users.map((single)=>{
        if(single.firstname==info[0] && single.lastname==info[1]){
            document.getElementById('info').innerHTML="Name: "+single.firstname+"<br>Last Name: "+single.lastname+"<br>Mobile: "+single.mobile+"<br>City: "+single.city;
        }
    })
}

function fetchUser(){
    value="<table class='table table-hover'><thead><tr><th>FirstName</th><th>Last Name</th><th>Mobile No.</th><th>City</th></tr></thead><tbody>";

    users.map((user) => {
        value+="<tr><td><a id='show' onclick='findUser(`"+user.firstname+" "+user.lastname+" "+user.mobile+" "+user.city+"`)' href='#'>"+user.firstname+"</a></td><td>"+user.lastname+"</td><td>"+user.mobile+"</td><td>"+user.city+"</td></tr>";
    })
    value+="</tbody></table>";

    setTimeout(()=>{
        document.getElementById("userData").innerHTML=value;
        document.getElementById('info').innerHTML="";
    },1000);
    document.getElementById('info').innerHTML="Fetching";
}

function addUser(){
    let [fname,lname,mobile,city] = valueInputter("other");

    if(fname.length>2 && lname.length > 2 && mobile.length > 2 && city.length > 2){
        setTimeout(function (){
            users.push({firstname:fname,lastname:lname,mobile:mobile,city:city});
            fetchUser();
            clearInputs();
        },2000);
        document.getElementById("info").innerHTML="Adding";
        document.getElementById("wrong").innerHTML="";
    }
    else{
        document.getElementById('wrong').innerHTML="Please enter valid values";
    }
}

function deleteUser(){
    let [fname,lname] = valueInputter("delete");
    setTimeout(function(){
        users=users.filter((user) => user.firstname != fname || user.lastname != lname );
        fetchUser();
        clearInputs();
    },2000)
    document.getElementById("info").innerHTML="Removing";
    document.getElementById("wrong").innerHTML="";
}

function updateUser(){
    let [fname,lname,mobile,city] = valueInputter("other");
    let final=-1;
    users.map((user,index) => {
        if(user.lastname == lname && user.firstname == fname){
            final=index;
        }
    });
    if(fname.length>2 && lname.length > 2 && mobile.length > 2 && city.length > 2 && final != -1){
        setTimeout(()=>{
            users[final].firstname=fname;
            users[final].lastname=lname;
            users[final].mobile=mobile;
            users[final].city=city;
            fetchUser();
            clearInputs()
        },2000);
        document.getElementById("info").innerHTML="Updating";
        document.getElementById("wrong").innerHTML="";
    }
    else if(fname.length>2 && lname.length > 2 && mobile.length > 2 && city.length > 2 && final == -1){
        document.getElementById('wrong').innerHTML="User does not found";
    }
    else{
        document.getElementById('wrong').innerHTML="Please enter valid values";
    }
}

function optionValueSetter(){
    document.getElementById('mobile').style.display="initial";
    document.getElementById("city").style.display="initial";
    document.getElementById('lmobile').style.display="inline-block";
    document.getElementById('lcity').style.display="inline-block";
}

function valueInputter(option){
    if(option=="other"){
        let fname=document.forms["users"]["fname"].value;
        let lname=document.forms["users"]["lname"].value;
        let mobile=document.forms["users"]["mobile"].value;
        let city=document.forms["users"]["city"].value;
        return [fname,lname,mobile,city];
    }
    else{
        let fname=document.forms["users"]["fname"].value;
        let lname=document.forms["users"]["lname"].value;
        return [fname,lname];
    }
}

function clearInputs(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("mobile").value="";
    document.getElementById("city").value="";
    document.getElementById("fname").className="form-control";
    document.getElementById("lname").className="form-control";
    document.getElementById("mobile").className="form-control";
    document.getElementById("city").className="form-control";
}

function option(value){
    if(value=="fetch") fetchUser();
    else if(value=="add"){
        document.getElementById("add").style.display="initial";
        document.getElementById('delete').style.display="none";
        document.getElementById('update').style.display="none"
        optionValueSetter();
    }
    else if(value=="delete"){
        document.getElementById("delete").style.display="initial";
        document.getElementById('add').style.display="none";
        document.getElementById('update').style.display="none";
        document.getElementById('mobile').style.display="none";
        document.getElementById("city").style.display="none";
        document.getElementById('lmobile').style.display="none";
        document.getElementById('lcity').style.display="none";
    }
    else{
        document.getElementById("update").style.display="initial";
        document.getElementById('add').style.display="none";
        document.getElementById('delete').style.display="none";
        optionValueSetter();
    }
}

function validator(){
    let [fname,lname]=valueInputter("delete");
    if(/^[A-Za-z]+$/.test(fname)){
        document.getElementById("fname").className="form-control is-valid";
        console.log("inside");
    }
    else{
        document.getElementById("fname").className="form-control is-invalid";
    }

    if(/^[A-Za-z]+$/.test(lname)){
        document.getElementById("lname").className="form-control is-valid";
        console.log("inside");
    }
    else{
        document.getElementById("lname").className="form-control is-invalid";
    }
}