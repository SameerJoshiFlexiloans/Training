let users = require("../data.json");
const fs = require("fs/promises")

// console.log(typeof users);

module.exports.addUser = (Info)=>{
    return new Promise((resolve,reject)=>{
        users.data.push(Info);
        fs.writeFile("../data.json",JSON.stringify(users)).then(data=>resolve("done")).catch(err=>reject(err));
    });
}

module.exports.deleteUser = (Info)=>{
    return new Promise((resolve,reject)=>{
        users.data=users.data.filter((user) => user.firstname != Info.firstname || user.lastname != Info.lastname);
        fs.writeFile("../data.json",JSON.stringify(users)).then(data=>resolve("done")).catch(err=>reject(err));
    })
}

module.exports.updateUser = Info=>{
    return new Promise((resolve,reject)=>{
        let final=-1;
        users.data.map((user,index) => {
            if(user.lastname == Info.lastname && user.firstname == Info.firstname){
                final=index;
            }
        });
        if(final!=-1){
            users.data[final].firstname=Info.firstname;
            users.data[final].lastname=Info.lastname;
            users.data[final].mobile=Info.mobile;
            users.data[final].city=Info.city;
        };
        fs.writeFile("../data.json",JSON.stringify(users)).then(data=>resolve("done")).catch(err=>reject(err));
    })
}