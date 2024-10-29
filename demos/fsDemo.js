// import fs from "fs";

// readFile() - callback
/*
fs.readFile("./text.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

// readFileSync() - Synchronous version
/*
const data = fs.readFileSync("./text.txt", "utf8");
console.log(data, "text");
*/

import fs from "fs/promises";

// readFile - Promise .then()
/*
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/
// readFile - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile() - async/await
const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "It works for now");
    console.log("first write");
  } catch (error) {
    console.log(error);
  }
};

// appendFile() - async/await
const appendFile = async () => {
  try {
    await fs.appendFile(
      "./text.txt",
      "\nThis Text has been written to the specified file at "
    );
    console.log("Text file appended");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
