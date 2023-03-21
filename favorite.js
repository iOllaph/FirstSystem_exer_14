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

            
            
            // Delete the whole card and remove from local storage
            
            var index = likedCards.findIndex(function(cardElementFind) {
                return cardElementFind.id == card.id
            } )
            
            likedCards.splice(index, 1);

            localStorage.setItem("liked_cards", JSON.stringify(likedCards)); 

            /* to read the vector cards i have to put the "for" inside the button,
            and apply the change i wnat to the cards vector */

            for (i = 0; i < cards.length; i++) {
                const card = cards[i];

                delete card.likedButton

                localStorage.setItem("saved_cards", JSON.stringify(cards));

            }
            
            // remove the cardElement from the container

            cardElement.remove();

                        

            

        })
    }
}