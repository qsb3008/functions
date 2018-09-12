// 两位数补零
let fixed2 = function (int) {
  let _int = Math.floor(int);
  if (_int < 10) {
    return `0${_int}`;
  } else {
    return `${_int}`;
  }
};

let test = function (text) {
  console.log('text : ', text)
}

let test2 = function (text) {
  console.log('text2 : ', text)
}

module.exports = {
  fixed2,
  test,
  test2
}
