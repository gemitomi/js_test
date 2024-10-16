const dataJson = require('../data.json');
console.log(typeof dataJson);
console.log(dataJson);

var fs = require("fs");
const your = "Tomasso Rosso";
var sampleObject = { your };

fs.writeFile("./object.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {  console.error(err);  return; };
    console.log("File has been created");
});