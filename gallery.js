//storing menu items as objects in an array
var menuItems = [
    {
        id: 0,
        name: "Pepperoni Pizza",
        price: 17.99,
        image: "images/pepperoni.jpg",
        description: "A nice hot pizza with SPICY PEPPS!"
    },
    {
        id: 1,
        name: "Margherita Pizza",
        price: 19.99,
        image: "images/marg.jpg",
        description: "A classic neapolitan style pizza! Fresh basil!"
    },
    {
        id: 2,
        name: "Hawaian Pizza",
        price: 22.99,
        image: "images/hawaiian.jpg",
        description: "Sweet and yummy. Surf's up!"
    },
    {
        id: 3,
        name: "The Tommy Two-gun",
        price: 35.99,
        image: "images/tommy.jpeg",
        description: "A Massive calzone! With eggplant and Gabagool! Madone!"
    },
    {
        id: 4,
        name: "The Godfather",
        price: 32.99,
        image: "images/godfather.jpg",
        description: "A Pizza you can't refuse! Provolone, salami and that prosciutto!"
    },
    {
        id: 5,
        name: "The Angry Meat Lovers Pizza, aka the Tony",
        price: 48.99,
        image: "images/tony.jpg",
        description: "Spicy sausage, SPICY pepperoni and HOT pepperoncini! This ones HOT!"
    },
    {
        id: 6,
        name: "Chicken Parm",
        price: 28.99,
        image: "images/parm.webp",
        description: "A pasta house classic! Served our way on a massive buttered hoagie.",
    }
];

//removed this from orders.js and migrated here, for sensibility.
function populateMenu() {
    let menuPage = document.getElementById("menu");
    for (let i = 0; i < menuItems.length; i++) {
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
        menuCard.setAttribute("id", "img-" + i);
        menuPage.appendChild(menuCard);
        menuCard.style.backgroundImage = `url("${menuItems[i].image}")`;
        let title = document.createElement("span");
        menuCard.appendChild(title);
        title.classList.add("bodoni");
        title.classList.add("dr");
        title.textContent = menuItems[i].name;
        let para = document.createElement("p");
        menuCard.appendChild(para);
        para.textContent = menuItems[i].description;
        let pr = document.createElement("span");
        menuCard.appendChild(pr);
        pr.classList.add("menu-price");
        pr.textContent = "$" + menuItems[i].price;
    }
    //adding a click event to each image
    for (let i=0; i < menuItems.length; i++) {
        let imgDiv = document.getElementById("img-" + i);
        imgDiv.addEventListener('click', (e) => {
            let window = document.createElement("div");
            window.classList.add("img-window");
            menuPage.appendChild(window);
            window.style.display = "flex";
            let img = document.createElement("img");
            window.appendChild(img);
            img.classList.add('img-full');
            img.setAttribute("src", menuItems[i].image);
            //adding the exit and favorite buttons
            let exitButton = document.createElement("button");
            window.appendChild(exitButton);
            exitButton.textContent = "X";
            exitButton.classList.add("exit-button");
            exitButton.addEventListener('click', (e) => {
                window.style.display = "none";
            });
            let favButton = document.createElement("button");
            window.appendChild(favButton);
            favButton.classList.add("fav-button");
            favButton.textContent = "Add to favorites";
            favButton.addEventListener('click', (e) => {
                addToFavs(menuItems[i]);
            });
        });
    }
}

let favs = [];

//this function adds the image to the favorites bar
function addToFavs(item) {
    let favBar = document.getElementById("favorites");
    if (favs.length < 5) {
        favs.push(item);
        let favDiv = document.createElement("div");
        favBar.appendChild(favDiv);
        let favImg = document.createElement("img");
        favImg.setAttribute("src", item.image);
        favImg.classList.add("fav-thumb");
        favDiv.appendChild(favImg);
        favImg.addEventListener('click', (e) => {
            let removeButton = document.createElement("button");
            removeButton.classList.add("remove-button");
            removeButton.textContent = "Remove from Favorites";
            favDiv.appendChild(removeButton);
            removeButton.addEventListener('click', (e) => {
                //removing the favorite from the favs array
                favs = favs.splice(item.id, 1);
                //removing the image from the DOM
                favBar.removeChild(favDiv);
                favDiv.removeChild(removeButton);
            });
        });
    } else {
        alert("Please remove an item from your favorites, it's 5 maximum.")
    }
}

//Author: Jeremy St Pierre #301540695