const fs = require("fs");
const request = require("request");
let userUrl = process.argv[2];
console.log(userUrl);
let localFilePath = process.argv[3];
console.log(localFilePath);
let content;

request(userUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    content = body;
    console.log(body);
    fs.writeFile(localFilePath, content, (err) => {
      if (err) console.log(err);
      else {
        console.log(
          `Downloaded and saved ${
            content.toString().length
          } bytes to ${localFilePath}`
        );        
      }
    });
  }
});

