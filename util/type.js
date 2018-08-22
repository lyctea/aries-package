/*
* 数据类型检查，支持以下类型判断
* Boolean Number String Function Array Date RegExp Object Error Null Undefined
*
* */

var class2type = {};

'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(' ').map(function(item, index) {
  class2type['[object ' + item + ']'] = item.toLowerCase();
});

export function type(obj) {
  //兼容 IE6
  if (obj === null) {
    return obj + '';
  }

  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj;
}
