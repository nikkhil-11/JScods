class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username , email , password){
        super(username)
        this.email = email;
        this.password = password
    }

    addNewcourse(){
        console.log(`A new course is added by the ${this.username}`);
        
    }
}

const data =  new teacher("Shubh" , "shubhmishra@7113", 654321)

data.addNewcourse()

const data2 = new user("Chachu")
data2.logMe()