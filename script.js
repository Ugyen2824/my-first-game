let cards = document.querySelectorAll(".card");
let firstCard = null;
let secondCard = null;
let matchCount = 0;

cards.forEach(function(card) {
     card.addEventListener("click", function() {
          flipCard(card);
     });
});

function flipCard(card) {
     if (card.classList.contains("done") || card.classList.contains("flip")) {
          return;
     } else {
          card.classList.add("flip");

          checkMatchCard(card);
     }
}

function checkMatchCard(card) {
     if (firstCard == null) {
          firstCard = card;
     } else {
          if (secondCard == null) {
               secondCard = card;

               let firstCardImg = firstCard.children[0].children[0].getAttribute("src");
               let secondCardImg = secondCard.children[0].children[0].getAttribute("src");

               if (firstCardImg == secondCardImg) {
                    // alert("match");
                    firstCard.classList.add("done");
                    secondCard.classList.add("done");
                    matchCount++;
                    if (matchCount == cards.length / 2) {
                         setTimeout(function() {
                              alert("You win!");
                         }, 200);
                    }
                    resetCard();
               } else {
                    //alert("not match");
                    setTimeout(function() {
                         if (firstCard) {
                              firstCard.classList.remove("flip");
                         }

                         if (secondCard) {
                              secondCard.classList.remove("flip");
                         }

                         resetCard();
                    }, 350);

               }
          } else {
               // open cards too fast
               firstCard.classList.remove("flip");
               secondCard.classList.remove("flip");
               card.classList.remove("flip");
               resetCard();
          }
     }
}

function resetCard() {
     firstCard = null;
     secondCard = null;
}




let container = document.querySelector("#container");

window.onload = window.onresize = resizeGame;

function resizeGame() {
     let gameRatio = container.offsetWidth / container.offsetHeight;
     let windowRatio = window.innerWidth / window.innerHeight;

     container.style.position = "absolute";
     container.style.left = `${(window.innerWidth - container.offsetWidth) / 2}px`;
     container.style.top = `${(window.innerHeight - container.offsetHeight) / 2}px`;

     let newScale;
     if (gameRatio > windowRatio) {
          newScale = window.innerWidth / container.offsetWidth;
          if (newScale > 1) newScale = 1;
     } else {
          newScale = window.innerHeight / container.offsetHeight;
          if (newScale > 1) newScale = 1;
     }
     container.style.transform = `scale(${newScale})`;
}