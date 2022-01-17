//slice returns everything from the returns everything from and including the first argument up until but not including the second argument
const profileDataArgs = process.argv.slice(2, process.argv.legnth);
console.log(profileDataArgs)
const animalArray= ["dog", "cat", "bird"]
animalArray.push('cow')
const personObj ={name: "Moustafa", age:"23"};
personObj.age= 24;
personObj.occupation= "developer";
personObj.cell="+1(905)-464-7718"
personObj.Email="moustafaeldahhan@gmail.com"
console.log(personObj)
//Arrow functions replace the normal function statement
//Arrow function can't be used as the main functions
const printProfileData = (profileDataArr) => {
    profileDataArr.forEach(profileItem => 
        console.log(profileItem));
    };
printProfileData([personObj]);
//example
const addNums =(numOne,numTwo) => numOne + numTwo;
const sum = addNums(2,5);
console.log(sum)