const redis = require("redis");
const configure = require("./configure")

// const config = configure({"redis": {"host": "10.10.10.10"}})
const config = configure()
const client = redis.createClient(config.redis);

module.exports = client
