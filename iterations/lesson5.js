const coding = ["java", "js", "cpp", "swift", "rb", "python"]
coding.forEach(function ( item ) {
    // console.log(`So the famous language for development are ${ item}`);
    
})
//--------------------------------------------------------------------------------------------------
// arrow function

coding.forEach((value) => {
    // console.log(`So the famous language for development are ${value}`);
})
//--------------------------------------------------------------------------------------------------------------
// now with function reference giving
function printing(item){
    // console.log(item);
    
}
// coding.forEach(printing)
//-------------------------------------------------------------------------------------
// FOR EACH HAVE FOR THAN ONE PARAMETRE 
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
    
})
//-----------------------------------------------------------------
// In objects of array
myCoding = [
    {
        languageName: "c++",
        languageFile : "cpp"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "javascript",
        languageFile: "js"
    }
]

myCoding.forEach( (item) => {
    console.log(`file name is ${item.languageName} and its extention is ${item.languageFile}`);
    
})