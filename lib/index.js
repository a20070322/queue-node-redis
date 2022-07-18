const systemArg = require("minimist")(process.argv.slice(2));
const config = require("../config");
const { bootstrap } = require("./core");

// 程序自检

// 判断是否输入了 频道名称
if (!systemArg.name) {
  console.error("ERROR: channel name cannot be empty");
  process.exit(99);
}

// 频道队列配置
const mqConfig =
  config.mqList.find((item) => item.name === systemArg.name) ?? false;

// 如果config不存在
if (!mqConfig) {
  console.error("ERROR: configuration not obtained");
  process.exit(99);
}

// node index.js --name QUEUE_MY_MQ
bootstrap(mqConfig);
