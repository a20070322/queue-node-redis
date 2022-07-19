const { redisCreateClient } = require("../utils/redis");
const config = require("../config");

/** 生成 1000 条测试消息 */
const mockMq = async (key) => {
  const client = await redisCreateClient(config.redis.default);
  for (let i = 0; i < 1000; i++) {
    // 向队列中 push 消息
    await client.lPush(key, "test" + i);
  }
  // 获取队列长度
  const count = await client.lLen(key);
  console.log(`生成1000条测试消息完成,目前共有${count}条消息`);
  // 关闭redis连接
  client.quit();
};

mockMq("QUEUE_MY_MQ");
