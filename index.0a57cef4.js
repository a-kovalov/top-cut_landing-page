// Initialize and add the map
let map;
async function initMap() {
    // The location of Top Cut Barbershop
    const position = {
        lat: 52.157115,
        lng: 21.030927
    };
    // Request needed libraries.
    //@ts-ignore
    const { Map  } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement  } = await google.maps.importLibrary("marker");
    // The map, centered at Top Cut Barbershop
    map = new Map(document.getElementById("map"), {
        zoom: 16,
        center: position,
        mapId: "DEMO_MAP_ID"
    });
    // The marker, positioned at Top Cut Barbershop
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Top Cut Barbershop"
    });
}
initMap();

//# sourceMappingURL=index.0a57cef4.js.map
