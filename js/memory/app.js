// array to hold objects with name and image path
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

// random sort
cardArray.sort(() => 0.5 - Math.random());

// grabbing the grid ID div and result ID div
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector('#result')


// mutable arrays for storing choices and ID of choices in separate arrays
let cardsChosen = [];
let cardsChosenId = [];

// array for cards already picked and matched
const cardsWon = [];


const createBoard = () => {

    // creates one image tag for each object in card array and assigns attributes of src w/ file path and data=id with i
    // also adds event listener to listen for a click which will call flipcard function
    // then appends each card to gridDisplay which is div with ID of grid
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
};

// creates gameboard
createBoard();

 function checkForMatch() {

    // assigns cards as anything with img tag
   const cards = document.querySelectorAll("img");

//  assigns choices as option 1 and 2
   const optionOneId = cardsChosenId[0];
   const optionTwoId = cardsChosenId[1];

//    if chosen cards have MATCHING ID'S, then you picked the same image twice. the cards will reset their attributes back to blank
// equivalent of flipping back over and an alert will be sent
   if (optionOneId == optionTwoId) {
     cards[optionOneId].setAttribute("src", "images/blank.png");
     cards[optionTwoId].setAttribute("src", "images/blank.png");
     alert("You have clicked the same image!");

// if cards names are matching, then images will get set to a white image AND the event listener listening for 'click'
// will be ignored when flicard is called for those 2 cards...an alert will be sent
   } else if (cardsChosen[0] === cardsChosen[1]) {
     alert("You found a match");
     cards[optionOneId].setAttribute("src", "images/white.png");
     cards[optionTwoId].setAttribute("src", "images/white.png");
     cards[optionOneId].removeEventListener("click", flipCard);
     cards[optionTwoId].removeEventListener("click", flipCard);
     cardsWon.push(cardsChosen);


    //  else you picked two non matches and the cards will be reflipped and you will be alerted
   } else {
     cards[optionOneId].setAttribute("src", "images/blank.png");
     cards[optionTwoId].setAttribute("src", "images/blank.png");
     alert("Sorry, try again");
   }

//    empties choices
   cardsChosen = [];
   cardsChosenId = [];
   resultDisplay.textContent = cardsWon.length;
   if (cardsWon.length === cardArray.length / 2) {
     resultDisplay.textContent = "Congratulations! You found them all!";
   }
 }


// function for dealing with cards flipped
function flipCard() {
    // whatever is clicked, cardID is it's ID number
    let cardId = this.getAttribute('data-id')

    // pushes that card's name to cardsChosen array
    cardsChosen.push(cardArray[cardId].name)
    // pushes ID number to ID array
    cardsChosenId.push(cardId)
    // sets the attribute of clicked cards src to it's image from holder array...basically when clicked, itll "flip" and reveal
    // it's image based on corresponding id number
    this.setAttribute('src', cardArray[cardId].img)

    // if cardsCHosen by you is 2, then it'll call check for match function to chekc if theyre matching after 1 second timeout

    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 100)
    }
  }
