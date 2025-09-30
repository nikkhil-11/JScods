// console.log("WE ARE CHECKING SCOPES");

function one(){
    const userName ="Nikhil mishra"
    function Two() {
        const webSite = "Youtube"
        console.log(userName);
    }
    // console.log(webSite);
    Two()
}
one()
