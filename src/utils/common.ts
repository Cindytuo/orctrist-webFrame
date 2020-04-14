import reqHostName from '../../config/env';

/**
 * 单层级对象转数组
 * @param obj
 */
export const obj2Arr = (obj: object) => {
  let arr = [];
  for (let key in obj) {
    const tmpItem = {
      name: key,
      value: obj[key],
    };
    arr.push(tmpItem);
  }
  return arr;
};

/**
 * 通过参数名获取url中的参数值
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {string} name 参数名
 * @param  {boolean} hash 是否是hash
 * @return {string}  参数值]
 */
export function getQueryString(name, hash?: any) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r;

  if (hash) {
    r = location.hash.split('?')[1] && location.hash.split('?')[1].match(reg);
  } else {
    r = location.search.substr(1).match(reg);
  }

  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
/**
 * 错误日志
 * @param params
 */
export const traceLog = params => {
  let result = '';
  params.requestId = `traceLog${Date.now()}`;
  // params.scene = params.scene || (window.BUZZ && window.BUZZ.scene);
  for (let item in params) {
    if (params[item] && String(params[item])) {
      result += `&${item}=${params[item]}`;
    }
  }
  if (result) {
    result = '?' + result.slice(1);
  }
  let img = new Image();
  let _currHost = reqHostName.host;
  img.src = `${_currHost}/api/trading-order/outer/trace/${result}`;
};
/*将100000转为100,000.00形式*/
export const formatMoney = (money, rate = 100) => {
  if (money && money != null) {
    if (rate) {
      money = +money / +rate;
    }
    money = String(money);
    var left = money.split('.')[0],
      right = money.split('.')[1];
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
    var temp = left
      .split('')
      .reverse()
      .join('')
      .match(/(\d{1,3})/g);
    return (
      (Number(money) < 0 ? '-' : '') +
      temp
        .join(',')
        .split('')
        .reverse()
        .join('') +
      right
    );
  } else if (money === 0) {
    return '0.00';
  } else {
    return '0.00';
  }
};
/*将100000转为100,000形式*/
export const formatNum = num => {
  let rltNum = num.toLocaleString();
  return rltNum;
};

export const simpleClone = obj => {
  if (obj) {
    return JSON.parse(JSON.stringify(obj));
  } else {
    return obj;
  }
};
/**
 * 图片字段格式化成本地可读
 * @param imgs
 */
export const formatImgsToLocal = imgs => {
  const imgObj = {};
  if (imgs) {
    for (let i in imgs) {
      if (i === 'healthAdvice' || i === 'shareTitle' || i === 'shareExplain') {
        imgObj[i] = imgs[i];
      } else {
        let tmpArr = [];
        imgs[i] &&
          imgs[i].map((item, index) => {
            if (item.fileUrl) {
              const tmpItem = {};
              tmpItem.name = item.fileName;
              tmpItem.url = item.fileUrl;
              tmpItem.uid = index + '-' + item.fileName + '-' + new Date().getTime();
              tmpItem.status = 'done';
              tmpItem.flag = true;
              tmpArr.push(tmpItem);
            }
          });
        imgObj[i] = tmpArr;
      }
    }
  }
  return imgObj;
};
/**
 * 图片字段格式化成提交格式
 * @param imgs
 */
export const formatImgsToServer = imgs => {
  let imgObj = {};
  if (imgs) {
    for (let i in imgs) {
      if (i === 'healthAdvice' || i === 'shareTitle' || i === 'shareExplain') {
        imgObj[i] = imgs[i];
      } else {
        let tmpArr = [];
        imgs[i] &&
          imgs[i].map((item, index) => {
            if (item.url) {
              const tmpItem = {};
              tmpItem.fileName = item.name;
              tmpItem.fileUrl = item.url;
              tmpItem.displayOrder = index;
              tmpArr.push(tmpItem);
            }
          });
        imgObj[i] = tmpArr;
      }
    }
  }
  return imgObj;
};

/**
 * 校验富文本是否为空
 */
export const checkEmptyHtmlTxt = htmlTxt => {
  let result = htmlTxt.replace(/\s/g, '').replace(/<p><\/p>/g, '');
  if (result) {
    return htmlTxt;
  } else {
    return '';
  }
};
