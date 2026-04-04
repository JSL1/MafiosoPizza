function initMap() {
    const mapContainter = document.getElementById("map-container");
    const mafiaPizza = { lat: 42.32258993067984, lng: -82.96437431745439 };
    const routeBox = document.getElementById("route-box");

    const mapOpt = {
        zoom: 13,
        center: mafiaPizza,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
    }

    let pizzaMap = new google.maps.Map(mapContainter, mapOpt);

    new google.maps.Marker({
        position: mafiaPizza,
        map: pizzaMap,
        title: "Mafioso Pizza",
        label: "Mafioso Pizza"
    });
    
    function handleError(err) {
        console.log("Geolocation error: " + err.message);
    }
    
    navigator.geolocation.getCurrentPosition(getPos, handleError);
    function getPos(pos) {
        let myPosition = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        };
        console.log(myPosition);

        let routFind = new google.maps.DirectionsService();
        let routeDraw = new google.maps.DirectionsRenderer();

        let myRoute = {
            origin: myPosition,
            destination: mafiaPizza,
            travelMode: "DRIVING"
        }

        let walkRoute = {
            origin: myPosition,
            destination: mafiaPizza,
            travelMode: "WALKING"
        }

        let trainRoute = {
            origin: myPosition,
            destination: mafiaPizza,
            trainRoute: "TRANSIT"
        }

        routFind.route(myRoute, function(result, status) {
            if (status == "OK") {
                routeDraw.setDirections(result);
                routeDraw.setMap(pizzaMap);
                routeDraw.setPanel(routeBox);
            } else {
                    routeBox.textContent = "Directions Unavailable: " + status;
            }
        });
    }
}