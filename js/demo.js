let users=[];

fetch("https://my-json-server.typicode.com/SameerJoshiFlexiloans/my-json-server/users")
.then(response=>{
    return response.json();
})
.then(data =>{
    users=data;
    console.log(users);
});


let value="";
document.getElementById('fetch').addEventListener("click",function(){
    fetchUser();
})

function findUser(user){
    let info=user.split(" ");
    setTimeout(()=>{
        users.map((single)=>{
            if(single.firstname==info[0] && single.lastname==info[1]){
                document.getElementById('userInfo').innerHTML="<div class='card ms-auto me-auto' style='width:50%' id='user-info-card'><div class='card-header bg-info text-white' style='font-size: 30px;'>"+single.firstname+"</div><div class='card-body bg-light'><p class='card-text'>Last Name: "+single.lastname+"</p><br><p class='card-text'>Mobile: "+single.mobile+"</p></div><div class='card-footer bg-secondary text-white'>City: "+single.city+"</div></div>";
            }
        });
    },1000);
    waitingQueueOn("user-view");
}

function fetchUser(){
    navActivator('navfetch');
    value="<table class='table table-hover'><thead><tr><th>FirstName</th><th>Last Name</th><th>Mobile No.</th><th>City</th></tr></thead><tbody>";

    users.map((user) => {
        value+="<tr><td><a id='show' onclick='findUser(`"+user.firstname+" "+user.lastname+" "+user.mobile+" "+user.city+"`)' href='#'>"+user.firstname+"</a></td><td>"+user.lastname+"</td><td>"+user.mobile+"</td><td>"+user.city+"</td></tr>";
    })
    value+="</tbody></table>";

    setTimeout(()=>{
        document.getElementById("userData").innerHTML=value;
        waitingQueueOff("fetch");
    },1000);
    waitingQueueOn("fetch");
}

function addUser(){
    let [fname,lname,mobile,city] = valueInputter("other");

    if(fname.length>2 && lname.length > 2 && mobile.length > 2 && city.length > 2){
        setTimeout(function (){
            users.push({firstname:fname,lastname:lname,mobile:mobile,city:city});
            fetchUser();
            clearInputs();
            waitingQueueOff('add');
        },2000);
        waitingQueueOn('add');
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
        waitingQueueOff('delete');
    },2000)
    waitingQueueOn('delete');
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
            clearInputs();
            waitingQueueOff('update');
        },2000);
        waitingQueueOn('update');
    }
    else if(fname.length>2 && lname.length > 2 && mobile.length > 2 && city.length > 2 && final == -1){
        document.getElementById('wrong').innerHTML="User does not found";
    }
    else{
        document.getElementById('wrong').innerHTML="Please enter valid values";
    }
}

function optionValueSetter(){
    document.getElementById('mobile').style.display="block";
    document.getElementById("city").style.display="block";
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
    if(value=="fetch"){
        navActivator("navfetch");
        fetchUser();
    }
    else if(value=="add"){
        document.getElementById("add").style.display="block";
        document.getElementById('delete').style.display="none";
        document.getElementById('update').style.display="none"
        optionValueSetter();
        navActivator("navadd");
    }
    else if(value=="delete"){
        document.getElementById("delete").style.display="block";
        document.getElementById('add').style.display="none";
        document.getElementById('update').style.display="none";
        document.getElementById('mobile').style.display="none";
        document.getElementById("city").style.display="none";
        document.getElementById('lmobile').style.display="none";
        document.getElementById('lcity').style.display="none";
        navActivator("navdelete");
    }
    else if(value == 'home'){
        navActivator("navhome")
    }
    else{
        document.getElementById("update").style.display="block";
        document.getElementById('add').style.display="none";
        document.getElementById('delete').style.display="none";
        optionValueSetter();
        navActivator("navupdate");
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

function waitingQueueOff(operation){
    if(operation == "fetch"){
        document.getElementById('fetch-value').innerHTML="Fetch";
        document.getElementById("waiting-fetch").style.display="none";
    }
    else if(operation == 'add'){
        document.getElementById('add-value').innerHTML="Add";
        document.getElementById("waiting-add").style.display="none";
    }
    else if(operation == 'delete'){
        document.getElementById('delete-value').innerHTML="Delete";
        document.getElementById("waiting-delete").style.display="none";
    }
    else if(operation == 'update'){
        document.getElementById('update-value').innerHTML="Update";
        document.getElementById("waiting-update").style.display="none";
    }
    else if(operation == 'user-view'){
        document.getElementById('waiting-user-info').style.display="none";
    }
}

function waitingQueueOn(operation){
    if(operation == "fetch"){
        document.getElementById("waiting-fetch").style.display="flex";
        document.getElementById('fetch-value').innerHTML="";
    }
    else if(operation == 'add'){
        document.getElementById("waiting-add").style.display="flex";
        document.getElementById('add-value').innerHTML="";
    }
    else if(operation == 'delete'){
        document.getElementById("waiting-delete").style.display="flex";
        document.getElementById('delete-value').innerHTML="";
    }
    else if(operation == 'update'){
        document.getElementById("waiting-update").style.display="flex";
        document.getElementById('update-value').innerHTML="";
    }
    else if(operation == 'user-view'){
        document.getElementById('waiting-user-info').style.display="flex";
    }
}

function navActivator(option){
    let active=document.querySelector(".active");
    active.classList.remove("active");
    document.getElementById(option).classList.add("active");
}