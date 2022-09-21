import * as dotenv from "dotenv";
const path = __dirname + "/../.env.test";
console.log(path);
const setup = () => dotenv.config({ path });

export default setup;
