// Access root-div in index.html
const app = document.getElementById('root');

// Create a new div element
const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(container);

// Create & assign new request variable
var request = new XMLHttpRequest();

var uInput = document.getElementById('test');

//Open a connection to API
//request.open('GET','https://api.discogs.com//artists/108713',true);
request.open('GET','https://api.discogs.com/database/search?artist=nirvana&per_page=3&token=mSyljxyHzMecUOywspInRcIuBbfiLBmgAKgyJXrR',true);
request.onload = function () {

  //Access JSON
  var data = JSON.parse(this.response);

  // TESTING
  // console.log(data);
  // console.log(data.results[0]);
  // console.log(data.results[0].genre);
  /////////////////////////
  if (request.status >= 200 & request.status < 400) {
    for(var i=0;i<3;i++){
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h3 = document.createElement('h3');
      h3.textContent = data.results[i].title;

      const p = document.createElement('p');
      // data.profile = data.profile.substring(0,500);
      // p.textContent = data.profile;

      const img = document.createElement('img');
      img.src = data.results[i].cover_image;

      container.appendChild(card);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(img);
    //  console.log(data);
    }
  }else {
    const errorMessage = document.createElement('h2');
    errorMessage.textContent = 'Erroooooooor';
    app.appendChild(errorMessage);
  }
}
console.log(uInput);
// Send request
request.send();
