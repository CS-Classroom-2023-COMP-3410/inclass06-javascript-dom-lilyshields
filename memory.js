let cards = ["&#127137", "&#127147", "&#127136", "&#127142", "&#127138", "&#127157", "&#127140", "&#127141"];   

const randIndex = function(lastIndex) {
    return Math.floor(Math.random() * lastIndex + 1);
}

let doubledCards = cards.concat(cards);
let deck = []

console.log(doubledCards);

for (let i = 0; i < doubledCards.length; i++) 
{
    let lastIndex = doubledCards.length-1;
    r = randIndex(lastIndex);
    deck.push(doubledCards[r]);
    cards.splice(r);
}

const flip = function(event) {
    console.log('test');
    let cardID = event.target.id.slice(5);
    event.target.innerHTML = deck[cardID];
}

for (let i=0; i < 16; i++)
{
    document.querySelector('#card-'+i).onclick = flip;
}



