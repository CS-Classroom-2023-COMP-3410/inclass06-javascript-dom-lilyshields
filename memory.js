let cards = ["&#127137", "&#127147", "&#127137", "&#127147"]

let flipCount = 0;
let flippedCards = [];

for (let card of cards) {
    let cardElement = document.createElement("h1");
    document.body.appendChild(cardElement);
    let cardText = document.createTextNode("🂠");
    cardElement.appendChild(cardText);
    cardElement.addEventListener("click", 
        function (){
            cardElement.innerHTML = card; 
            flipCount++;

            if (flipCount == 2)
            {
                if (flippedCards[0].innerHTML != flippedCards[1].innerHTML) {
                    for (let flippedCard of flippedCards) {
                        
                    }
                }
            }
        });
}

