//file system require
//built it no need for an installation
// only packages require installation
const fs = require('fs');
const generatePage= require('./src/page-template.js')
//slice returns everything from the returns everything from and including the first argument up until but not including the second argument
const profileDataArgs = process.argv.slice(2);
//assignment destructuring 
const [userName, gitHub, email, cell] = profileDataArgs;



fs.writeFile('./index.html', generatePage(userName,gitHub,email,cell), err => 
{
    //if error exists show error message
    //err is an object
    //the object can have a name for the error and a type 
    //IMPORTANT TO KNOW
    if(err) throw err; 
    console.log('Portfolio complete! Check out index.html to see the output!')
})
//===





// console.log(profileDataArgs)
// const animalArray= ["dog", "cat", "bird"]
// animalArray.push('cow')
// const personObj ={name: "Moustafa", age:"23"};
// personObj.age= 24;
// personObj.occupation= "developer";
// personObj.cell="+1(905)-464-7718"
// personObj.Email="moustafaeldahhan@gmail.com"
// console.log(personObj)
// //Arrow functions replace the normal function statement
// //Arrow function can't be used as the main functions
// const printProfileData = (profileDataArr) => {
//     profileDataArr.forEach(profileItem => 
//         console.log(profileItem));
//     };
// printProfileData([personObj]);
// //example
// const addNums =(numOne,numTwo) => numOne + numTwo;
// const sum = addNums(2,5);
// console.log(sum)