module.exports = {
  // redis 配置
  redis: {
    default: {
      host: "127.0.0.1",
      port: 6379,
      password: "",
      db: 0,
    },
  },
  // 消息队列频道设置
  mqList: [
    {
      // 消息频道名称
      name: "QUEUE_MY_MQ",
      // 阻塞式取值超时配置
      brPopTimeout: 100,
      // 开启任务数 此配置需要 PM 启动生效
      instances: 1,
      // redis 配置key
      redis: "default",
      // 任务
      taskName: "",
    },
  ],
};
