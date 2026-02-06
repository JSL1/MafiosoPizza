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


//creating an empty array for the customer's order
let order = [];

//adding items to the order
function addToOrder(item) {
    order.push({
        name: item.name,
        price: item.price,
    });
}

//calculating the customer's total with HST
function calculatesubtotal() {
    let subtotal = 0;
    for (let i = 0; i < order.length; i++) {
        subtotal += order[i].price;
    }
    return subtotal;
}

function calculatetax() {
    let hstRate = 0.13;
    let sub = calculatesubtotal();
    let tax = sub * hstRate;
    return tax;
}

function calculatetotal() {
    let sub = calculatesubtotal();
    total = sub + calculatetax();
    return total;
}

//populating the order form
function populateForm() {
    let orderForm = document.getElementById('order-form');
    for (let i = 0; i < menuItems.length; i++) {
        let row = document.createElement("div");
        row.classList.add('order-row');
        if (i % 2 == 0) {
            row.classList.add("even");
        } else {
            row.classList.add("odd");
        }
        orderForm.appendChild(row);
        let col1 = document.createElement("div")
        col1.classList.add('order-column1');
        row.appendChild(col1);
        let col2 = document.createElement("div");
        col2.classList.add('order-column2');
        row.appendChild(col2);
        let col3 = document.createElement("div")
        col3.classList.add('order-colum3');
        row.appendChild(col3);
        col1.textContent = menuItems[i].name;
        col2.textContent = "$" + menuItems[i].price;
        let addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("add-button");
        addButton.textContent = "Add to order";
        col3.appendChild(addButton);
        addButton.addEventListener('click', (e) => {
            addToOrder(menuItems[i]);
            updateTotals();
        });
        row.appendChild(col3);
    }
}

function updateTotals() {
    var subDisplay = document.getElementById("subtotal");
    var hstDisplay = document.getElementById("HST");
    var totalDisplay = document.getElementById("total");
    var orderList = document.getElementById("order-list");
    orderList.innerHTML = '';
    for (let i = 0; i < order.length; i++) {
        let a = document.createElement('span');
        a.classList.add('order-item');
        a.textContent = order[i].name + " - $" + order[i].price;
        let b = document.createElement('br');
        a.appendChild(b);
        orderList.appendChild(a);
    }
    subDisplay.textContent = "Subtotal: $" + calculatesubtotal().toFixed(2);
    hstDisplay.textContent = "HST: $" + calculatetax().toFixed(2);
    totalDisplay.textContent = "Total: $" + calculatetotal().toFixed(2);
}

//populating the Menu, the one with images and stuff
function populateMenu() {
    let menuPage = document.getElementById("menu");
    for (let i = 0; i < menuItems.length; i++) {
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
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
}

//Author: Jeremy St Pierre #301540695
