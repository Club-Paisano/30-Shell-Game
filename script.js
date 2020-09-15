//jshint esversion: 6
/*
Author: Anthony Noel

-This page is a remake of the classic game Shell Game, choose which the virus is under?

Future Dev:


*/

const tileButtons = Array.from(document.querySelectorAll("button.tile"));
const newGameButton = document.querySelector("button.newGame");

let tiles;
let wasAPreviousGame = false;


const resetGame = () => {
  //Add in the span back in
  tileButtons.forEach(tileButton =>{
    //Remove any active/virus class
    const specificClass = (tileButton.classList.contains("virus")? "virus" : "active");
    tileButton.classList.remove(specificClass);
    //Create a span element
    //Append it to the button
    tileButton.append(document.createElement("span"));
  });

};

const randNum = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const displayContent = (element, content = "empty") => {
  //Take out the spans

  //If content is "virus", add a class of virus
  //Else add a class of Active
  // if(content === "virus") element.parentElement.classList.add("virus");
  // else element.parentElement.classList.add("active");

  tileButtons.forEach((tileButton,i) => {
    //Take out all the spans
    tileButton.innerHTML = "";
    //If the tile at that index has the virus, display it
    //Else just active a class of active
    if(tiles[i] === "*") tileButton.classList.add("virus");
    else tileButton.classList.add("active");
  });
};


const game = () => {
  //Reset the Game settings if needed
  if(wasAPreviousGame) resetGame();

  //Get a randomly generated location for the virus
  tiles = ["","",""];
  tiles[`${randNum(0,2)}`] = "*";
  console.log([tiles]);
  //Add eventlisteners to the buttons depending on where in the array the virus is
  //Active class is a space without a virus and virus class is a space with the virus
  tileButtons.forEach((tileButton,i) =>{
    //If the tile in that index has a virus give is an eventlistener displayContent("virus")
    //Else give a displayContent()
    const virusCheck = (tiles[i] === "*")? "virus" : "empty";
    tileButton.addEventListener("click",(e) => displayContent());


    wasAPreviousTrue = true;
  });


};

const initPage = () => {
  //Start a Game
  game();
  //Add an eventlistener to the newgame Button
  newGameButton.addEventListener("click",() => {
    resetGame();
    game();
  });
};

initPage();
