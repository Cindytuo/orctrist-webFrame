/**
 * 请求域名处理环境判断
 */

export default {
  host:
    process.env.NODE_ENV === 'production'
      ? 'http://gateway.ytbxjj.com'
      : 'http://spcare-api.medbanks-test.com',
};
