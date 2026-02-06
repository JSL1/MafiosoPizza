//storing the months and orders in object arrays
months2026 = [
    {
        name: 'January',
        days: 31
    },
    {
        name: 'February',
        days: 28,
        orders: [
            { name: 'Paul', itemId: 1, date: 1, dineIn: true },
            { name: 'Mike', itemId: 2, date: 12, dineIn: true },
            { name: 'James', itemId: 6, date: 21, dineIn: false },
            { name: 'Dean', itemId: 2, date: 22, dineIn: false },
            { name: 'Tony', itemId: 0, date: 25, dineIn: true } 
        ]
    },
    {
        name: 'March',
        days: 31
    },
    {
        name: 'April',
        days: 30
    },
    {
        name: 'May',
        days: 31
    },
    {
        name: 'June',
        days: 30
    },
    {
        name: 'July',
        days: 31
    },
    {
        name: 'August',
        days: 31
    },
    {
        name: 'September',
        days: 30
    },
    {
        name: 'October',
        days: 31
    },
    {
        name: 'November',
        days: 30
    },    
    {
        name: 'December',
        days: 31
    }
];

//weekdays stored in an array
weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function populateCalendar(month) {
    let monthTitle = document.getElementById("month-name");
    monthTitle.textContent = months2026[month].name;
    
    //populating weeks and days
    let section = document.getElementById("calendar");
    for (let i = 0; i < 4; i++) {
        let week = document.createElement('div');
        section.appendChild(week);
        week.classList.add('week');
        for (let j = 0; j < weekdays.length; j++) {
            let date = (j + 1 + (i * 7));
            if (date <= months2026[month].days) {
                let day = document.createElement('div');
                week.appendChild(day);
                day.classList.add('day');
                day.setAttribute("id", "date-" + date)
                let dateHeader = document.createElement("span");
                day.appendChild(dateHeader);
                dateHeader.classList.add('date-header');
                dateHeader.textContent = date + ' - ' + weekdays[j];
            }
        }
    }
    populateOrders(month);
}

//populating orders
function populateOrders(month) {
    let orders = months2026[month].orders;
    for (let k = 0; k < orders.length; k++) {
        let dineOpt = "";
        if (orders[k].dineIn) {
            dineOpt = "Dine In";
        } else {
            dineOpt = "Take Out";
        }
        let dateDiv = document.getElementById("date-" + orders[k].date); 
        let orderStr = document.createElement("span");
        orderStr.innerHTML = orders[k].name + "<br />" + menuItems[orders[k].itemId].name + " - " + menuItems[orders[k].itemId].price + "<br /><b>" + dineOpt + "</b>";
        orderStr.classList.add("cal-order");
        dateDiv.appendChild(orderStr);
    }
}

// It's a slight redundency to repeat this from orders.js but its okay I think
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