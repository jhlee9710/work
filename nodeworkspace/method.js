var http = require('http');

http.createServer(function(request,response){
    if(request.method == 'GET'){
        console.log('GET방식의 요청입니다.');
    }else if(reqiest.method == 'POST'){
        console.log('POST방식의 요청입니다.');
    }
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/')
})