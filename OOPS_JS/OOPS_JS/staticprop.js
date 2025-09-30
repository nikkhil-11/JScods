class User {
    constructor(username ){
        this.username = username
    }

    logMe(){
        console.log(`UserName is${this.username}`);
        
    }

    createID(){
        return `123`
    }
}

const nikhil = new User("Manraj")
// console.log(nikhil.createID())


class Teacher extends User{
    constructor(username , email ){
        super(username)
        this.email = email
    }
}

 const iphone = new Teacher ("suraj","manraj@gmail.com")
// console.log(iphone)
console.log(iphone.createID())