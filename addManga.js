// const inputs 
const inputName = document.querySelector("#inputName");
const inputDescription = document.querySelector("#inputDescription");
const inputImg = document.querySelector("#inputImg");

// const form
const formInput = document.querySelector("#formInput");

// array cards
let cards = [];


function addManga() {

    if (!inputName.value) {
        
        alert("Write a title");
        return;

    } else if (!inputDescription.value) {

        alert("Write a descrition");
        return;

    } else if (!inputImg.value) {

        alert("Paste an image link");
        return;

    }

    
    const card = {
        title: inputName.value ,
        description: inputDescription.value , 
        image: inputImg.value , 
        id: 1
}
    
    card.id = cards.length + 1;

    // add card to the cards array
    cards.push(card);

    localStorage.setItem("saved_cards", JSON.stringify(cards));

    formInput.reset();


}


// Reset the whole form

function clearForm() {

    formInput.reset();
}