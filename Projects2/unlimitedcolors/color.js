//how to generate the random colors??
const randomColor = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6 ; i++){
         color += hex[Math.floor(Math.random()*16)]
    }
    return color
} 

const brush = function(){
    document.body.style.backgroundColor = randomColor();
}

let stopThis= null;
document.querySelector('#start').addEventListener('click',function(){
   stopThis = setInterval( brush , 100)
})
 
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(stopThis)
})