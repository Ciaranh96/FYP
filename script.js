// Access root-div in index.html
const app = document.getElementById('root');

// Create a new div element
const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(container);

// Create & assign new request variable
var request = new XMLHttpRequest();

//Open a connection to API
request.open('GET','https://api.discogs.com//artists/108713',true);
request.open('GET','https://api.discogs.com/database/search?artist=' + 'nirvana' + '&per_page=3&token=mSyljxyHzMecUOywspInRcIuBbfiLBmgAKgyJXrR',true);
request.onload = function () {

  //Access JSON
  var data = JSON.parse(this.response);

  // TESTING
   console.log(data.results);
   console.log(data.results[0]);
   //console.log(data.results[0].genre);
  /////////////////////////
  if (request.status >= 200 & request.status < 400) {
    console.log("pass");
  }else {
    console.log("massive error");
  }
}
// Send request
request.send();
