// const  marvelHeroes = ["Thor","Ironman","Hulk"]
// const dcHeroes = ["batman", "superman", "flash"]
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[3][0]);// for accesing the particular part of merged array
// allheroes = marvelHeroes.concat(dcHeroes)
// console.log(allheroes);
// const newHoroes = [...dcHeroes,...marvelHeroes]//spread operator acts same as concat function but we can combine more than two arrays
// console.log(newHoroes);
const nestedArr = [1,2,3,[4,5,6],6,7,[8,9,[10,11]]]
const sortedArr = nestedArr.flat(1)
// console.log(sortedArr);
console.log(Array.isArray("hitesh"));//checking that array is existing or not (output wil be in boolean)
console.log(Array.from("hitesh"))// converting the string into the array 

let score = 100
let score2 = 200
let score3 = 300    

console.log(Array.of(score, score2, score3))// converting different elements to an array
