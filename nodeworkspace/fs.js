var fs = require('fs');

// fs.readFile() 비동기처리
// fs.readFileSync 동기처리

var text = fs.readFileSync('textfile.txt', 'utf-8');
console.log(text);

fs.readFile('textfile.txt', 'utf-8', function(error,data){
    console.log(data);
});

var data = 'Hello world..!!';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf-8', function(error){
    console.log('sync complete');
});

fs.writaFileSync('TestFileOtherWriteSync.txt', data, 'utf-8');
console.log('sync complete');