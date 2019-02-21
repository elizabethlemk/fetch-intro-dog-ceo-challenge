


console.log('%c HI', 'color: firebrick')
// Styling

document.querySelector("body").style.textAlign = "center"
document.body.style.backgroundImage = "url('https://previews.123rf.com/images/coffeeein/coffeeein1611/coffeeein161100374/65979814-cute-dogs-vector-pattern-illustrations-on-colored-background.jpg')";
document.querySelector('#dog-image-container').style.marginLeft = "auto"
document.querySelector('#dog-image-container').style.marginRight = "auto"
document.querySelector('#dog-image-container').padding = "5px"
document.querySelector("ul").style.listStyleType = "none"
document.querySelector("h1").style.fontSize = "140px"
document.querySelector("h1").style.color = "white"
document.querySelector("h1").style.fontFamily = "Indie Flower"

document.querySelector("h1").style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073";

function changeOffHover (event) {
  event.target.style.color = 'black';
  event.target.style.fontSize = '40px';
  // event.target.style.textShadow = "none"
}

function changeOnHover(event) {
  event.target.style.fontSize = '50px';
  // event.target.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073";
}


// Dog Images
const imgUrl = fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response) {
  return response.json();

}).then(function (parsed) {
  for (var i = 0; i < parsed.message.length; i++) {
    addImgToContainer(parsed.message[i])
  }
})

function addImgToContainer(img) {
  const imgDiv = document.querySelector('#dog-image-container')
  const newImg = document.createElement('img')
  imgDiv.append(newImg)
  newImg.src = img
  newImg.style.width = "24.3%"
  newImg.style.marginLeft = "auto"
  newImg.style.marginRight = "auto"
  newImg.style.height = "290px"
  newImg.style.padding = "2px"
  newImg.style.size = "cover"
  newImg.style.backgroundPosition = "50% 50%"
  newImg.style.border = "2px solid white"
}


// Dog breeds
const breedUrl = fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response) {
  return response.json();
}).then(function (parsed) {
  for (let key in parsed.message) {
    if (parsed.message[key].length > 0){
      for (var i = 0; i < parsed.message[key].length; i++) {
        addBreedToUl(`${parsed.message[key][i]} ${key}`);
      }
    }else{
      addBreedToUl(key);
    }
  }
})

function addBreedToUl(breed) {
  const breedUl = document.querySelector('#dog-breeds');
  const newBreed = document.createElement('li');
  breedUl.append(newBreed);
  newBreed.innerText = breed;
  newBreed.style.fontSize = "40px"
  newBreed.addEventListener('click', changeColor);
  newBreed.addEventListener('mouseover', changeOnHover);
  newBreed.addEventListener('mouseout', changeOffHover);
}


// Change li color
function changeColor(event) {
  console.log(event.target);
  event.target.style.color = 'white';
  event.target.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073";
}


// Filter Breeds
const dropOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function addDropdown(option) {
  const breedSelect = document.querySelector('#breed-dropdown');
  const breedOptions = document.createElement('option');
  breedOptions.innerText = option;
  breedSelect.append(breedOptions);
}

for (let i = 0; i < dropOptions.length; i++) {
  addDropdown(dropOptions[i]);
}

let allLi = document.getElementById('breed-dropdown')
allLi.addEventListener('change', listenDropdown)

function listenDropdown (event) {
  // console.log(event.target.value)
  let newLi = document.getElementsByTagName("li")
  for (var i = 0; i < newLi.length; i++) {
    let firstL = newLi[i].textContent.split('')[0]
    if (firstL == event.target.value){
      newLi[i].style.display= "block";
      newLi[i].style.margin = "auto"
      newLi[i].style.marginBottom = "3px"
    } else {

      newLi[i].style.display = "none";
    }
  }
}
