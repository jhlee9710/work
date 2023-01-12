var crypto = require('crypto');

// var shasum = crypto.createHash('sha256');
// shasum.update('crypto_hash');
// var output = shasum.digest('hex');

// console.log('crypto_hash', output);

var key = "아무도 알지 못하는 나만의 비밀";
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes192',key);
cipher.update(input, 'utf-8','base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192',key);
decipher.update(cipheredOutput, 'base64', 'utf-8');
var decipheredOutput = decipher.final('utf-8');

console.log('원래 문자 : ', input);
console.log('암호화 후 : ', cipheredOutput);
console.log('암호화 해제후 : ', decipheredOutput);

