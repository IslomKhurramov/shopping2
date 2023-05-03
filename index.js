//core package
import fs from "fs";

fs.readFile("sample.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
