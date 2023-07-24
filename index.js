const fs = require('fs');
const inquirer = require('inquirer');


const questions = [    {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
},
{
    type: 'input',
    name: 'location',
    message: 'Where are you from?'
},
{
    type: 'input',
    name: 'Bio',
    message: 'Tell me something about youself!'
},
{
    type: 'input',
    name: 'Linkedin',
    message: 'What is your Linkedin URL?'
},
{
    type: 'input',
    name: 'Github',
    message: 'What is your GitHub URL?'
}
];


inquirer
    .prompt(questions)
    .then((answers) => {
        const template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1 class = header>Portfolio Generator</h1>
            <section class = info>
            <h2>${answers.name}</h2>
            <h2>${answers.location}</h2>
            <h2>${answers.bio}</h2>
            <h2>${answers.Linkedin} </h2>
            <h2>${answers.Github} </h2>
            </section>
        </body>
        </html>
        `;  

        fs.writeFile('index.html', template, (err) => {
            console.log(err)
        })
    })