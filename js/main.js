// var myHttp = new XMLHttpRequest;
// myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?q=pizza');
// myHttp.send();
// var recipes =[];
// myHttp.onreadystatechange = function () {
//     if (myHttp.readyState === 4) {
//         // Parse the response JSON
//         var result = JSON.parse(myHttp.response);
//          productList = result.recipes;
//         // console.log(productList);
//         displayData(productList);
//     }
// }


// console.log(productList);

var pizzaRecipes = [];
 async function getPizza(){
    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    var data =await response.json();
    pizzaRecipes= data.recipes;
    console.log(data);
    console.log(pizzaRecipes);
    
    displayData(pizzaRecipes);
  }

  var pastaResipes = [];
async function getPasta() {
    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pasta');
    var data = await response.json();
    pastaResipes = data.recipes;
    displayData( pastaResipes);
}

var cornResipes = [];
async function getCorn(){
    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=corn');
    var data = await response.json();
    cornResipes = data.recipes;
    displayData(cornResipes);
}

var dataContainer = document.querySelector('.dataContainer');
        function displayData(arr) {
     

            let cardData = "";

            for (var i = 0; i < arr.length; i++) {
                cardData += `
    <div class="col-md-4">
            <div class="card">
                <img src=${arr[i].image_url} class="w-100 img-height"  alt="home">
                <h3>${arr[i].title}</h3>
                <p>${arr[i].social_rank} </p>
            </div>
          </div>
    `
            }
            dataContainer.innerHTML = cardData;
        }

    
        


// var dataContainer = document.querySelector('.dataContainer');
// console.log(dataContainer);


// displayData();