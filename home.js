//const card container
const cardContainer = document.querySelector("#cardContainer");

// array  liked cards
let likedCards = [];

// array cards
let cards = [];

// Get the liked_cards stored and put them in the array vector
let likedCardsStorage = JSON.parse(localStorage.getItem("liked_cards"));

if (likedCardsStorage != null) {
        likedCards = likedCardsStorage;
}

// Get the cards stored and put them in the array vector
let cards_storage = JSON.parse(localStorage.getItem("saved_cards"));

if (cards_storage != null) {
        cards = cards_storage;
}

// reload the page
udpateview();

// function udpateview
function udpateview() {

    cardContainer.innerHTML = "";

    for (i = 0; i < cards.length; i++) {
        const card = cards[i];
        

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


        const buttonLike = document.createElement("button");
        buttonLike.classList.add("buttonlike");
        buttonLike.classList.add("button");
        buttonLike.value = 1;
        buttonLike.innerText = "LIKE";
        buttonWrapper.appendChild(buttonLike);

        const buttonRemove = document.createElement("button");
        buttonRemove.classList.add("buttonRemove");
        buttonRemove.classList.add("button");
        buttonRemove.innerText = "REMOVE";
        buttonWrapper.appendChild(buttonRemove);

        cardElement.appendChild(buttonWrapper);

        cardContainer.appendChild(cardElement);

        /*----------------------------------------*/
        // ACTIONS 
        
        // Read the cards vector, if an likedbutton is true/liked it will not show

        if (card.likedButton == true) {
            buttonLike.style.display = "none";
        } 
        

        buttonLike.addEventListener("click", () =>{



            likedCards.push(card);

            localStorage.setItem("liked_cards", JSON.stringify(likedCards));
            
            // create a bolean proprerty related to the likd button

            card.likedButton = true

            // set the display of the liked button to none

            buttonLike.style.display = "none";

            // save the proprerty in the saved_cards vector

            localStorage.setItem("saved_cards", JSON.stringify(cards));


           
            /* Different aproach. Delete the whole card and remove from local storage

            var index = cards.findIndex(function(cardElementFind) {
                return cardElementFind.id == card.id
            } )
             
            cards.splice(index, 1);

            localStorage.setItem("saved_cards", JSON.stringify(cards));

            cardElement.remove(); 
            */
           
        })

        buttonRemove.addEventListener("click", () =>{
            
            // Delete the whole card and remove from local storage

            var index = cards.findIndex(function(cardElementFind) {
                return cardElementFind.id == card.id
            } )

            cards.splice(index, 1);

            localStorage.setItem("saved_cards", JSON.stringify(cards));

            cardElement.remove(); 

        })


    }

    
}

