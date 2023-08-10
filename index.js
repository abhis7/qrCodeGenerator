import inquirer from 'inquirer';
import qr from 'qr-image';
//var qr = require('qr-image');
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
    message: "type in your url : ",
    name: "url"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers);
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });