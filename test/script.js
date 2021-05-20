
// ***USING JAVA SCRIPT***


// var d = document.getElementById('fetch-dog-img');
// var i = document.getElementById('dog-img');

// d.addEventListener('click', ()=>{
//     var xhrRequest = new XMLHttpRequest();  //creating a new request
//     xhrRequest.onload = ()=>{                    //what to do when request is loaded
//         // console.log(xhrRequest.response);
//        var responeJSON = JSON.parse(xhrRequest.response);
//        var imageUrl = responeJSON.message;
//         i.setAttribute("src",imageUrl);

//     };
//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);  //setting what to do when open
//     xhrRequest.send();    //sending the request
// });


// ***USING JQUERY***

function fetch(){
$.ajax({
    url:'https://dog.ceo/api/breeds/image/random',
    method: 'GET',
    success: function(data){
        var imageUrl = data.message;
        $('#dog-img').attr('src', imageUrl);
    }
}).fail(function(){
    console.log('API REQ EROOR');
});
}

$('#fetch-dog-img').click(fetch);