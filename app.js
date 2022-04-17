const inquirer = require ('inquirer')
const Choices = require('inquirer/lib/objects/choices')
console.log(inquirer)

const promptUser = ()=> {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput){
                    return true
                }
                else{
                    console.log('Please enter your name!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your Github user name?',
            validate: gitHubInput => {
                if (gitHubInput){
                    return true
                }
                else {
                    console.log ('Please enter your Github user name!')
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        },

        {
            type: 'input',
            name: 'cell',
            message: 'What is your cell phone number'

        },

        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to add some information about yourself for an "About" section?',
            default: true


        },
        
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            //when acts like an if statement, recieves an object representing all the answers that the user provided
            //will check the answer that concern this argument
            when: ({confirmAbout})=> {
                if (confirmAbout){
                    return true
                }
                else{
                    return false
                }
            }
        }

    ])
}



const promptProject = portfolioData => {
    if (!portfolioData.projects){
        
        portfolioData.projects=[];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: projectNameInput =>{
                if (projectNameInput){
                    return true
                }
                else{
                    console.log('Please enter your project name!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'proDescrip',
            message: 'Project description:',
            validate: descripInput => {
                if (descripInput){
                    return true
                }
                else{
                    console.log('Please enter a desription for the project!')
                    return false
                }
            }

        },

        {
            type: 'input',
            name: 'tableContents',
            message: 'Enter section titles',
            validate: descripInput => {
                if (descripInput){
                    return true
                }
                else{
                    console.log('Please enter a desription for the project!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'pageLink',
            message: 'Enter the Github link to your project. (Required)',
            validate: pageLinkInput => {
                if (pageLinkInput){
                    return true
                }
                else{
                    console.log('Please enter the Github link for your project')
                }
            }

        },
        //confirm returns a boolean 
        //can set a default property
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },

        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }

    ])
}

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        
            const pageHtml = generatePage(portfolioData)
            fs.writeFile('./index.html', pageHtml, err => 
            {
        //if error exists show error message
        //err is an object
        //the object can have a name for the error and a type 
        //IMPORTANT TO KNOW
        if(err) throw err; 
        console.log('Portfolio complete! Check out index.html to see the output!')
    })

        console.log(portfolioData);
    })
    
const fs = require('fs');
const generatePage = require('./src/page-template.js')    
    
    
    
    // .then(projectData => {
    //     portfolioData.projects.push(projectData)
    //     if (projectData.confirmAddProject){
    //         //important to add portfolioData as an argument
    //         //if it wasn't a new array will be created and existing project data will be lost
    //         return promptProject(portfolioData);
    //     }else {
    //         //must return to be able to use it in the HTML
    //         return portfolioData
    //     }
    // })
    // .then (projectAnswers => console.log(projectAnswers));






// //file system require
// //built it no need for an installation
// // only packages require installation

// //asda
//const pageHtml = generatePage()
// //======================================================================================================
// //slice returns everything from the returns everything from and including the first argument up until but not including the second argument
// //const profileDataArgs = process.argv.slice(2);
// //assignment destructuring 
// //const [userName, gitHub, email, cell] = profileDataArgs;
// //======================================================================================================






//fs.writeFile('./index.html', generatePage(userName,gitHub,email,cell), err => 
//{
    //if error exists show error message
    //err is an object
    //the object can have a name for the error and a type 
    //IMPORTANT TO KNOW
    //if(err) throw err; 
    //console.log('Portfolio complete! Check out index.html to see the output!')
//})
//===





// // console.log(profileDataArgs)
// // const animalArray= ["dog", "cat", "bird"]
// // animalArray.push('cow')
// // const personObj ={name: "Moustafa", age:"23"};
// // personObj.age= 24;
// // personObj.occupation= "developer";
// // personObj.cell="+1(905)-464-7718"
// // personObj.Email="moustafaeldahhan@gmail.com"
// // console.log(personObj)
// // //Arrow functions replace the normal function statement
// // //Arrow function can't be used as the main functions
// // const printProfileData = (profileDataArr) => {
// //     profileDataArr.forEach(profileItem => 
// //         console.log(profileItem));
// //     };
// // printProfileData([personObj]);
// // //example
// // const addNums =(numOne,numTwo) => numOne + numTwo;
// // const sum = addNums(2,5);
// // console.log(sum)
// // echo fileName/ > .gitignore (command line to move a file to a gitignore)