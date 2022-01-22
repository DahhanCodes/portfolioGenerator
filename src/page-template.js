//creating a string that will then be used to generate an HTML page
//can make it more dynamic by adding arguments to the function expression
//Interpolation is the substitution of text for a variable we build into a string
// ' ` ' is used to embed js expressions into the string 
const generatePage= (firstName, gitHubName, eMail, phone) => {
    // the ' ` ' has to be on the same line as the return or it wont work
    return `
    <!DOCTYPE html>
    <html lang= "en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title> Portfolio Demo </title>
    </head>

    <body>
        <div>
            <div>
                <h1>${firstName}</h1>
            </div>
            <div>
                <h2> 
                    <a href="https://github.com/${gitHubName}">GitHub </a> 
                </h2>
            </div>
            <div>
                 <h3>${eMail}</h3>
            </div>
            <div>
                <h4>${phone}</h4>
            </div>
        </div>
    </body>
    </html>
    
    `;
 
};
module.exports= generatePage;