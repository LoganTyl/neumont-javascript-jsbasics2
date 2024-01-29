var quoteLine = document.getElementById('frontPageQuote');

// const linkToJSON = "scripts/quotes.json";
const linkToJSON = "C:/Users/Logan Tyler/Desktop/Classes/Quarter 7/Front-End Implementation/SASS Responsive/scripts/quotes.json";

// function loadXMLDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let jsonText = JSON.stringify(this.responseText);
//             console.log(jsonText.quotes);
//         }
//     };
//     xhttp.open("GET", linkToJSON, true);
//     xhttp.send();
// }
// function myFunction(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
//       out += '<a href="' + arr[i].url + '">' + 
//       arr[i].display + '</a><br>';
//     }
//     document.getElementById("id01").innerHTML = out;
//   }

// window.onload = loadXMLDoc;

// function loadJSON(callback) { //attempt with XMLHttpRequest
//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', linkToJSON, true); // Replace 'appDataServices' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 /*&& xobj.status == "200"*/) {
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
// }

// var testjson = (function() { //attempt with Ajax
//     var json = null;
//     $.ajax({
//       'async': false,
//       'global': false,
//       'url': linkToJSON,
//       'dataType': "json",
//       'success': function(data) {
//         json = data;
//       }
//     });
//     return json;
//   })();

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }


function init() {
    // loadJSON(function(response) { //testing for XML
    //  // Parsing JSON string into object
    //    var actual_JSON = JSON.parse(response);
    // //    console.log(actual_JSON);
    //     quoteLine.innerHTML = actual_JSON;
    // });
    // console.log(testjson); //testing for Ajax
    // console.log(['json', testjson]);
    $.getJSON(linkToJSON, function(json){ //random snippet I found; getting CORS error
        console.log(json.quotes);
    })
//     readTextFile(linkToJSON, function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });
// fetch(linkToJSON)
//     .then(function(resp) {
//         return resp.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
}

window.onload = init();