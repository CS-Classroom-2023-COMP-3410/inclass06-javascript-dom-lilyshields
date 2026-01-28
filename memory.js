let cards = ["&#127137", "&#127147", "&#127140", "&#127142", "&#127138", "&#127157", "&#127150", "&#127141"];   

const randIndex = function(lastIndex) {
    return Math.floor(Math.random() * lastIndex);
}

let doubledCards = cards.concat(cards);
let deck = []

console.log(doubledCards);

for (let i = 0; i < 16; i++) 
{
    let lastIndex = doubledCards.length - 1;
    r = randIndex(lastIndex);
    deck.push(doubledCards[r]);
    doubledCards.splice(r, 1);
}

flippedPair = []

const flip = function(event)
{
    console.log('test');
    let cardID = event.target.id.slice(5);
    event.target.innerHTML = deck[cardID];

    flippedPair.push(event.target);
    
    if (flippedPair.length == 2) {
        //if cards are the same
        if (flippedPair[0].innerHTML == flippedPair[1].innerHTML) {
            for (let card in flippedPair) {
                card.onclick = null;
            }
        //if they are different
        } else {
            for (let card in flippedPair) {
                card.innerHTML = "&#127136;";
            }
        }
        flippedPair = [];
    }
}

for (let i=0; i < 16; i++)
{
    document.querySelector('#card-'+i).onclick = flip;
}



