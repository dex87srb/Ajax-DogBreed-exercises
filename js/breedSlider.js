//nisam uspeo da popunim select iz JS-a,nego preko HTML-a, nece da mi uzme selectedIndex, tacnije opcije. Radi mi normalno kad popunim
//opcije, ali kad dodam eventListener onda su mi opcije prazne(selectedIndex). Zakomentarisao sam dole dodatno za popunjavanje bez upisanih elemenata iz HTML-a.
//tako da svaka pomoc je dobrodosla

var dogList = document.getElementById("doggoDropDown");
var listImageContainer = document.getElementById("listImageContainer");
var selectedBreed;
var urlImage;

dogList.addEventListener("change", getData);

function getData() {
  var newRequest = new XMLHttpRequest();

  selectedBreed = dogList.options[dogList.selectedIndex].value;

  urlImage = `https://dog.ceo/api/breed/${selectedBreed.toLowerCase()}/images`;

  newRequest.open("GET", urlImage);

  newRequest.onload = function () {
    if (newRequest.status === 200) {
      var url = JSON.parse(newRequest.responseText).message;

      getImageURL(url);
    }
  };
  newRequest.send();
}

//helper functions

//getImageURL
function getImageURL(data) {
  //get random number
  let randomNumberURL = data[Math.floor(Math.random() * data.length)];
  listImageContainer.innerHTML = `<img src="${randomNumberURL}"/>`;
}

/*
var arraySelect = [
  { name: "Chow" },
  { name: "Akita" },
  { name: "African" },
  { name: "Beagle" },
  { name: "Borzoi" },
];*/

//createListItems
/*
function createListItems(data) {
  var dogBreedSelect = document.createElement("select");
  dogBreedSelect.setAttribute("id", "doggoDropDown");
  dogBreedSelect.setAttribute("name", "breed");
  document.querySelector("main").appendChild(dogBreedSelect);

  let output = "";
  data.forEach((key) => {
    output += `<option value="${key.name}">${key.name}</option>`;
    document.getElementById("doggoDropDown").innerHTML = output;
  });
}*/

//createListItems(arraySelect);
//dogList.addEventListener('change', getData);
