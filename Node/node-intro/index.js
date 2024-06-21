import os from "os";
import fs from "fs";
import crypto from "crypto";

console.log(os.release());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.freemem() / (1024 * 1024 * 1024));
console.log(os.version());
console.log(os.machine());

fs.writeFileSync("log.txt", "App crashed due to email system failure.");
fs.appendFileSync("log.txt", "/App started running.../");

const randomText = crypto.randomBytes(64).toString("hex");
console.log(randomText);

// console.log(process.env);

