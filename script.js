let gameseq = [];
let userseq = [];

let btn = ["green", "pink", "blue", "red"];

let p = document.querySelector("p");

let level = 0;

let body = document.querySelector("body");

body.addEventListener(
  "mousedown",
  function () {
    console.log("i am started");

    levelup();
  },
  { once: true },
);

function levelup() {
  // making the call for the level
  level++;
  console.log(`level ${level}`);
  p.innerText = level;

  // generating random number
  let randomind = Math.floor(Math.random() * 4);
  let randomcol = btn[randomind];
  let random = document.querySelector(`.${randomcol}`);

  // level up fn 
  gameseq.push(randomcol);
  console.log(gameseq);

  random.classList.add("flash");

  setTimeout(function () {
    random.classList.remove("flash");
  }, 1000);

  userseq = [];
}

// user clicks finder engine
let boxes = document.querySelectorAll('.boxes div');

for(box of boxes){
  box.addEventListener('click', userclick)
};


// adding clicks into array and checking the clicks 

function userclick() {
  let btnpress = this.classList[0];
  userseq.push(btnpress);
  console.log(userseq);

  checkans(userseq.length -1);

};


function checkans(index) {

  if(userseq[index] === gameseq[index]) {

    console.log("right click");

    if(userseq.length === gameseq.length) {
      setTimeout(function() {
        levelup();
      },500);
    }

  } else {

    body.style.background = "red";

    setTimeout(function(){
      gamerest();
    },600);

  }

}

function gamerest() {

  let score = level;   // save score before reset

  level = 0;
  userseq = [];
  gameseq = [];

  p.innerText = `Game Over! Your score was Level ${score}`;

  body.style.background = "white";

}
