const myObj = {
    java : "js",
    cpp: "c++",
    rb : "rubby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);    
}
//**************************************************************************************** */
// On ARRAY
const arrLang = ["js", "rb", "cpp", "py", "java"]
for (const key in arrLang) {
    console.log(arrLang[key]);    
}