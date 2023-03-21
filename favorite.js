//const card container
const cardContainer = document.querySelector("#cardContainer");

// array  liked cards
let likedCards = [];

// array cards
let cards = [];

// Get the cards stored and put them in the array vector
let cards_storage = JSON.parse(localStorage.getItem("saved_cards"));

if (cards_storage != null) {
        cards = cards_storage;
}

// Get the liked_cards stored and put them in the array vector
let likedCardsStorage = JSON.parse(localStorage.getItem("liked_cards"));

if (likedCardsStorage != null) {
        likedCards = likedCardsStorage;
}

// reload the page
udpateview();

// function udpateview
function udpateview() {

    cardContainer.innerHTML = "";

    for (i = 0; i < likedCards.length; i++) {
        const card = likedCards[i];

        //create card elements 

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const cardContent = document.createElement("div");
        cardContent.classList.add("cardContent")

        const bannerImage = document.createElement("div");
        bannerImage.classList.add("bannerImage");

        const bannerImage_img = document.createElement("img");
        bannerImage_img.src = card.image;

        bannerImage.appendChild(bannerImage_img);
        cardContent.appendChild(bannerImage);

        const cardTitle = document.createElement("h1");
        cardTitle.innerText= card.title;
        cardContent.appendChild(cardTitle);

        const cardDescription = document.createElement("p");
        cardDescription.innerText = card.description;
        cardContent.appendChild(cardDescription);


        cardElement.appendChild(cardContent);


        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("buttonWrapper");

        const buttonRemove = document.createElement("button");
        buttonRemove.classList.add("buttonRemove");
        buttonRemove.classList.add("button");
        buttonRemove.innerText = "REMOVE FROM FAVORITE";
        buttonWrapper.appendChild(buttonRemove);

        cardElement.appendChild(buttonWrapper);

        cardContainer.appendChild(cardElement);
        
        buttonRemove.addEventListener("click", () =>{

            
             // remove the card from the likedCards array
            const index = likedCards.findIndex((likedCard) => likedCard.id === card.id);
            likedCards.splice(index, 1);
            
            // delete the likedButton property from the card
            delete card.likedButton;

            // remove the card from the cards array, if present
            const cardIndex = cards.findIndex((c) => c.id === card.id);
            if (cardIndex !== -1) {
                cards[cardIndex] = card;
            }
            
            // update the local storage
            localStorage.setItem("liked_cards", JSON.stringify(likedCards));
            localStorage.setItem("saved_cards", JSON.stringify(cards));
            
            // remove the card element from the DOM
            cardElement.remove();

            // update the view
            udpateview();

        })
    }
}