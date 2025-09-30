function setUserName(username){
    this.username = username;
}

function createUser(username , email, password){
    setUserName.call(this,username)
    this.email = email;
    this.password = password;
}

const nikhil = new createUser("nikhil", "nikhilmishra@7113","123")
console.log(nikhil)