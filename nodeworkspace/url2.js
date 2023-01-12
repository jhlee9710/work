var querystring = require('querystring');
var url = require('url');

var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160')
//쿼리 문자열을 쿼리 객체로 변환해 리턴
console.log(querystring.parse(parsedObject.query));