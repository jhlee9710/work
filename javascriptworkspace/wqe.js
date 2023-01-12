// Asynchronous Java Script and XML
// - xml 형식의 데이터 비동기 처리
// - json(JavaScript Object Notation) 
    // : 문자형식의 데이터를 효율적으로 주고 받는 구조
    // : 배열이나 객체형식으로 작성되어지는 데이터

// { } : 객체
// [ ] : 배열
    
[ {} ]
{ [] }


{
    "name":"고등어", "age":45, "address":"서울"     // key : value
}
접근방식 : object.name / object["name"]

[
    "html", "java", "javascript"
]
접근방식 : object[indexNumber]

{
    "firstName":"홍",
    "lastName":"길동",
    "books":["java","html","jsp"]
}
접근방식 : object.book[indexNumber]

[
    {"city":"서울", "hotplace":"홍대"},
    {"city":"부산", "hotplace":"해운대"},
    {"city":"제주도", "hotplace":"서귀포"}
]
접근방식 : object[indexNumber].city / object[indexNumber]["city"]

$.ajax({
    type : 'post', // 타입 (get, post, put 등등)
    url : "/test", // 요청할 서버url
    async : true, // 비동기화 여부 (default : trye)
    headers : { // Http header
        "Content-Type" : "application/json",
        "X.HTTP-Method-Override" : "POST"
    },
    dataType : 'text', // 데이터 타입 (html, xml, json, text 등등)
    data : JSON.stringify({ // 보낼 데이터 (Object, String, Array)
        "no" : no,
        "name" : name,
        "nick" : nick
    }),
    success : function(result) { // 결과 성공 콜백함수
        console.log(result);
    },
    error : function(request, status, error) { // 결과 에러 콜백함수
        console.log(error)
    }
})