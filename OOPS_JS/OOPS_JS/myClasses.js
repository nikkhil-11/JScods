

// class user {
//     constructor(username , email, password) {
//         this.username = username;
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
    
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const data = new user("Nikhil", "nikhilmishra@5693@gmail.com", 1123456)
// console.log(data.encryptPassword());
// console.log(data.changeUserName());

///BEHIND THE SCENES---------------------------------------------------------------------------

function User(username , email, password){
        this.username = username;
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}


const newData = new User("shaktiman", "shaktiman@email.com", 5623) 

console.log(newData.encryptPassword())
console.log(newData.changeUserName())