// const { redisCreateClient } = require("./utils/redis");
// const test = async () => {
//   const client = await redisCreateClient({
//     host: "127.0.0.1",
//     port: 6379,
//     db: 0,
//   });
// };
// test();

const system = require("minimist")(process.argv.slice(2));

console.log(system);
