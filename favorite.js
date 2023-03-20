//const card container
const cardContainer = document.querySelector("#cardContainer");

// array  liked cards
let likedCards = [];

// array cards
let cards = [];

// Get the cards stored and put them in the array vector
let likedCardsStorage = JSON.parse(localStorage.getItem("liked_cards"));

if (likedCardsStorage != null) {
        likedCards = likedCardsStorage;
}

// reload the page
udpateview();

// function udpateview
function udpateview() {
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

            cardElement.remove(); 

        })
    }
}