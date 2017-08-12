function add(a, b) {
  var aList = a.split('').reverse();
  var bList = b.split('').reverse();
  var max = Math.max(aList.length, bList.length);
  var flag = 0;
  var result = [];

  for (var i = 0; i < max; i++) {
    var tmp = (parseInt(aList[i]) || 0) + (parseInt(bList[i]) || 0) + flag;
    flag = 0;
    if (tmp > 9) {
      tmp = tmp % 10;
      flag = 1;
    }
    result.push(tmp);
  }

  if (flag === 1) {
    result.push(flag);
  }

  return result.reverse().join('');
}

module.exports = add
