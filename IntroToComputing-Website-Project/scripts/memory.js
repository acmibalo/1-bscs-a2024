const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() :unflipCards();

    if($('.memory-game .memory-card.flip').length === $('.memory-game .memory-card').length){
        function MessageDisplay(){
            const element = document.createElement('div');
            element.classList.add('message', 'hide');

            const text = document.createElement('h4');
            text.classList.add('text');
            text.innerHTML = 'You win! &acute;&#32;&xdtri;&#32;&grave;';

            element.appendChild(text);

            let isVisible = false;
            const duration = 1000;

            function show(value){
                if(isVisible) return;

                if(!(value && typeof value === 'string')) return;

                text.innerHTML = value;

                element.classList.remove('hide');
                element.classList.add('show');
                isVisible = true;

                setTimeout(hide, duration);
            }

            function hide(){
                element.classList.remove('show');
                element.classList.add('hide');
                isVisible = false;
            }

            console.log("solved");

            return{
                element,
                show
            }
        }

        const message = MessageDisplay();
        document.getElementById("wrap").appendChild(message.element);
        message.show(`Solved! &acute;&#32;&xdtri;&#32;&grave;`);
    }

    else{
        //return false
      console.log('false');
    }
}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards(){
  lockBoard = true;

  setTimeout(() =>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle(){
  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
