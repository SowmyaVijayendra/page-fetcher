const fs = require("fs");
const request = require("request");
let userUrl = process.argv[2]; // fetch URL
let localFilePath = process.argv[3]; //fetch local file path
let content;

const writeContent = () => {
  return new Promise((resolve, reject) => {
    request(userUrl, (error, response, body) => {
      if (error) {
        return reject(error);
      } else {
        content = body;
        console.log(body);
        fs.writeFile(localFilePath, content, (err) => {
          if (err) return reject(err);
          else {
            return resolve(`Downloaded and saved ${content.toString().length} bytes to ${localFilePath}`);            
          }
        });
      }
    });
  }); 
};

writeContent()
.then((message) => console.log(message))
.catch((err) => console.log(err));