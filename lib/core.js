const { redisCreateClient } = require("../utils/redis");
async function bootstrap(mqConfig, redisConfig) {
  try {
    // 创建redis连接
    const client = await redisCreateClient(redisConfig);
    // 通过死循环阻塞程序
    while (true) {
      let res = null;
      console.log("队列执行");
      try {
        // 从队列中获取任务, 采用阻塞式获取任务 最大阻塞时间为config.queue.timeout
        res = await client.brPop(mqConfig.name, mqConfig.timeout);
        if (res === null) {
          continue;
        }
        console.log("TODO:: Task processing");
      } catch (error) {
        console.log("ERROR: redis brPop error", error);
        continue;
      }
    }
  } catch (err) {
    // 处理程序异常
    console.log("ERROR: ", err);
    process.exit(1);
  }
}
module.exports = {
  bootstrap,
};
