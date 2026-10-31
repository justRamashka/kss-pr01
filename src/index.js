import os from "node:os";
const greeting = "Привіт, клієнт-серверний світ!";

if (os.platform() === "win32") {
  console.log("Windows");
}
console.log(greeting);
