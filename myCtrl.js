artistNameApp.controller("myCtrl", function($scope, $http) {
  $scope.artistName ="The Beatles"
  $http.get('https://api.discogs.com/database/search?artist=' + $scope.artistName + '&per_page=3&token=mSyljxyHzMecUOywspInRcIuBbfiLBmgAKgyJXrR')
  .then(function(response){

    $scope.myWelcome = response.data.results;
    // NEED TO FIGURE THIS OUT var jsonData = JSON.parse(this.response);
    ///////////////
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h3 = document.createElement('h3');
      h3.textContent = $scope.myWelcome.title;
      console.log($scope.myWelcome.title);

      const img = document.createElement('img');
      img.src = $scope.myWelcome.cover_image;
      //console.log(data.results.cover_image);
  });
  $scope.newArtist = function(response){
    if($scope.artistName){
        console.log("hi");
      console.log($scope.artistName);
    //$scope.artistName = '';
    $http.get('https://api.discogs.com/database/search?artist=' + $scope.artistName + '&per_page=3&token=mSyljxyHzMecUOywspInRcIuBbfiLBmgAKgyJXrR')
    .then(function(response){
      $scope.myWelcome = response.data.results;
      ///////////////

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h3 = document.createElement('h3');
        h3.textContent = $scope.myWelcome.title;
        //vvv This is undefined when I try to log it vvv
        console.log($scope.myWelcome.title);

        const img = document.createElement('img');
        img.src = $scope.myWelcome.cover_image;
        //console.log(data.results.cover_image);
    });
  }
  }

});
