const redis = require("redis");

const redisCreateClient = async (config) => {
  try {
    const client = redis.createClient({
      url: `redis://${config.host}:${config.port}`,
    });
    await client.connect();
    await client.select(config.db);
    console.log("redis connect success");
    return client;
  } catch (err) {
    console.log("redis connect error");
    throw err;
  }
};
module.exports = {
  redisCreateClient,
};
