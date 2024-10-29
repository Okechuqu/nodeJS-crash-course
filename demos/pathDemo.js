import path from "path";
import url from "url";

const filePath = url.fileURLToPath(import.meta.url);
// console.log(filePath, path.dirname(filePath))

// basename() - returns the last file/path of the path
console.log(path.basename(filePath));

// dirname() - returns the last file/path of the directory.
console.log(path.dirname(filePath));

// extname() - returns the extension of the file/path.
console.log(path.extname(filePath));

// parse() - parses the file/path as a json
console.log(path.parse(filePath));

// join() - joins all the path segments together.
const filePath2 = path.join(path.dirname(filePath), "dir1", "dir2", "test.txt");
console.log(filePath2);

// resolve() - resolves/joins the path from the current working directory.
const filePath3 = path.resolve(path.dirname(filePath), "dir1", "dir2", "test.txt");
console.log(filePath3);
