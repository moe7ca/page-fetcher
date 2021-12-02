const request = require('request');
const fs = require('fs');

let args = process.argv.slice(2);
let url = args[0];
let location = args[1];

let filename = location.split("/".pop);
let filePath = location.replace('/' + filename, '');

if (fs.existsSync(filePath)) {
  request(url, (error, response, body) => {
    fs.writeFile(location, body, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`downloaded and save ${body.length} bytes to ${location}`);
      }
    });
  });
} else {
  console.log("Invalid Path");
}
