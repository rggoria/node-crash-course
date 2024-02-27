// const fs = require("fs");
// const path = require("path");

// fs.readFile("./files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile("./files/reply.txt", "This is an example", (err) => {
//   if (err) throw err;
//   console.log("Write complete");
// });

// fs.appendFile("./files/reply.txt", "\n\nThis is an Append", (err) => {
//   if (err) throw err;
//   console.log("Append complete");
// });

// fs.rename("./files/reply.txt", "./files/rename.txt", (err) => {
//   if (err) throw err;
//   console.log("Rename complete");
// });

// fs.unlink("./files/reply.txt", (err) => {
//   if (err) throw err;
//   console.log("Unlink complete");
// });

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.unlink(path.join(__dirname, "files", "reply.txt"), (err) => {
//   if (err) throw err;
//   console.log("Unlink complete!");
// });

// console.log("Hello...");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete!");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete!");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete!");
//           }
//         );
//       }
//     );
//   }
// );

// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// });

const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nThis is Append Promise reply!"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseRename.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseRename.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

console.log("Hello...");
