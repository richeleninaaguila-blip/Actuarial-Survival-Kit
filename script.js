const spotsData = [
    // Food Spots - P. Noval
    { name: "Santorini", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/Santorini,+981+Padre+Noval+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Ramen Avenue", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/Ramen+Avenue,+789+Padre+Noval+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Angkong", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/Angkong+Dimsum+House,+1223+Delos+Reyes+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Enrico's", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/Red+Manor+Residences,+1109+Tolentino+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Dimsum Treats", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/Dimsum+Treats,+cor+Dapitan+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Dominique's Kitchen", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/Dominique's+Kitchen,+1085+Padre+Noval+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "M.A.A. Food Hub & Coco Lemon", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/M.A.A.+Food+Hub,+1223+Delos+Reyes+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Tiger Winx", category: "Food Spots", location: "P. Noval", url: "https://www.google.com/maps/place/Tiger+Winx,+1240+Concepcion+St,+Sampaloc,+Manila" },

    // Food Spots - Dapitan
    { name: "Garaje Grill", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/dir/Garaje+grill,+1234+Asturias+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Lovelite", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/dir/Lovelite,+1224+Asturias+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Cheesy Friezz Chick'n", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/dir/Cheesy+Friezz+Chick'n,+1207+Antonio+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Chic'N Fritz", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/place/Chic'N+Fritz,+1243+V+Concepcion+St,+Sampaloc,+Manila" },
    { name: "Mami Chula", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/dir/Mami+Chula+Cuisines,+1247-A+Rosarito+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Takeout", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/dir/Takeout,+1428+Dapitan+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Sajang Chicken", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/place/Sajang+Chicken+UST,+1239+Asturias+St,+Sampaloc,+Manila" },
    { name: "Chewyork", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/dir/University+of+Santo+Tomas+Main+Building/Chew+York,+1235+Asturias+St,+Sampaloc,+Manila" },
    { name: "Hadouken", category: "Food Spots", location: "Dapitan", url: "https://www.google.com/maps/place/Hadouken,+1817+España+Blvd,+Sampaloc,+Manila" },

    // Food Spots - España
    { name: "Shawarma Bar Cafe", category: "Food Spots", location: "España", url: "https://www.google.com/maps/dir/University+of+Santo+Tomas/SB+CAF%C3%89,+Tolentino+St,+Sampaloc,+Manila" },
    { name: "The One", category: "Food Spots", location: "España", url: "https://www.google.com/maps/dir/The+ONE+Santo+Tomas,+870+M.F.+Jhocson,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Happy Marianna", category: "Food Spots", location: "España", url: "https://www.google.com/maps/dir/Happy+Marianna,+874+Moret+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Food House by Madla", category: "Food Spots", location: "España", url: "https://www.google.com/maps/dir/Food+House+By+Madla,+836+Cayco+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },

    // Food Spots - Lacson
    { name: "Ilar's", category: "Food Spots", location: "Lacson", url: "https://www.google.com/maps/dir/Ilar's+tapsilogan,+Lacson+Ave,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Happy N' Healthy", category: "Food Spots", location: "Lacson", url: "https://www.google.com/maps/dir/Happy+N'+Healthy,+1160+Lacson+Ave,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "MICHI Japanese Restaurant & Cafe", category: "Food Spots", location: "Lacson", url: "https://www.google.com/maps/dir/MICHI+Japanese+Restaurant+%26+Cafe,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },

    // Coffee Shops - P. Noval
    { name: "Coffee Pages", category: "Coffee Shops", location: "P. Noval", url: "https://www.google.com/maps/dir/Coffeepages+UST+P.Noval,+1233+J+Barlin+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Draft Coffee", category: "Coffee Shops", location: "P. Noval", url: "https://www.google.com/maps/dir/Draft+Coffee+by+Lew's,+923+Padre+Noval+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Kaffi Cafe", category: "Coffee Shops", location: "P. Noval", url: "https://www.google.com/maps/dir/Kaffi+Cafe,+1218+Delos+Reyes+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Mood & Coffee", category: "Coffee Shops", location: "P. Noval", url: "https://www.google.com/maps/dir/Mood+%26+Coffee,+981+Padre+Noval+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Switch Coffee", category: "Coffee Shops", location: "P. Noval", url: "https://www.google.com/maps/dir/Switch+Coffee,+1036+Tolentino+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Tomo Coffee", category: "Coffee Shops", location: "P. Noval", url: "https://www.google.com/maps/place/TOMO+Coffee,+1231+Barlin+St,+Sampaloc,+Manila" },

    // Coffee Shops - Dapitan
    { name: "Kenangan", category: "Coffee Shops", location: "Dapitan", url: "https://www.google.com/maps/dir/Kenangan+Coffee,+1423+Dapitan+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Kape Kuripot", category: "Coffee Shops", location: "Dapitan", url: "https://www.google.com/maps/dir/Kape+Kuripot,+1353+Dapitan+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Tomo Coffee", category: "Coffee Shops", location: "Dapitan", url: "https://www.google.com/maps/place/TOMO+Coffee,+1427+Dapitan+St,+Sampaloc,+Manila" },
    { name: "Heyday", category: "Coffee Shops", location: "Dapitan", url: "https://www.google.com/maps/dir/Heyday+Cafe,+1070+Tolentino+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Yeoubi Cafe", category: "Coffee Shops", location: "Dapitan", url: "https://www.google.com/maps/dir/Yeoubi+Cafe,+1361+Dapitan+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Coffee Pages", category: "Coffee Shops", location: "Dapitan", url: "https://www.google.com/maps/place/Coffeepages+UST+Dapitan,+1221+Navarra+St,+Sampaloc,+Manila" },
    { name: "The Reader's Cafe (Miguel de Benavides Lib)", category: "Coffee Shops", location: "Dapitan", url: "https://www.google.com/maps/dir/UST+Miguel+de+Benavides+Library/University+of+Santo+Tomas+Main+Building" },

    // Coffee Shops - España
    { name: "ZUS Coffee", category: "Coffee Shops", location: "España", url: "https://www.google.com/maps/dir/ZUS+Coffee,+University+Tower+5,+Galicia+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Calle Cafe", category: "Coffee Shops", location: "España", url: "https://www.google.com/maps/dir/Calle+Cafe+by+Don+Gabriel,+España+Blvd,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Sumu", category: "Coffee Shops", location: "España", url: "https://www.google.com/maps/dir/Sumu+Creative+Space,+1202+España+Blvd,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Pickup", category: "Coffee Shops", location: "España", url: "https://www.google.com/maps/dir/PICKUP+COFFEE,+1320+España+Blvd,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Maeil Cafe", category: "Coffee Shops", location: "España", url: "https://www.google.com/maps/dir/Maeil+Cafe,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },

    // Coffee Shops - Lacson
    { name: "Nomu", category: "Coffee Shops", location: "Lacson", url: "https://www.google.com/maps/dir/Nomu+Cafe,+1200+Lacson+Ave,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Sevie Roast Coffee", category: "Coffee Shops", location: "Lacson", url: "https://www.google.com/maps/dir/Sevie+Roast+Coffee,+Piy+Margal+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Masida Coffee", category: "Coffee Shops", location: "Lacson", url: "https://www.google.com/maps/place/Masida+Coffee,+Lacson+Ave,+Sampaloc,+Manila" },
    { name: "Floti cafe", category: "Coffee Shops", location: "Lacson", url: "https://www.google.com/maps/place/Floti+Cafe,+832+Earnshaw+St,+Sampaloc,+Manila" },
    { name: "Pedal Cafe", category: "Coffee Shops", location: "Lacson", url: "https://www.google.com/maps/dir/Pedal+Cafe,+Earnshaw+Suites,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Eutopia Cafe", category: "Coffee Shops", location: "Lacson", url: "https://www.google.com/maps/dir/Eutopia+Cafe,+1579+España+Blvd,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },

    // Study Spots - P. Noval
    { name: "933 Coworking Cafe", category: "Study Spots", location: "P. Noval", url: "https://www.google.com/maps/dir/933+Coworking+Cafe,+854+Tolentino+St,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "933 Creatives", category: "Study Spots", location: "P. Noval", url: "https://www.google.com/maps/place/933+Creatives,+1042+Tolentino+St,+Sampaloc,+Manila" },
    { name: "The Loft", category: "Study Spots", location: "P. Noval", url: "https://www.google.com/maps/place/The+Loft,+1057+Tolentino+St,+Sampaloc,+Manila" },
    { name: "Skylabs", category: "Study Spots", location: "P. Noval", url: "https://www.google.com/maps/place/SkyLabs,+1231+J+Barlin+St,+Sampaloc,+Manila" },

    // Study Spots - Dapitan
    { name: "HomeRoom Co-Working and Study Lounge", category: "Study Spots", location: "Dapitan", url: "https://www.google.com/maps/place/HomeRoom+Co-Working+and+Study+Lounge,+1521+Dapitan+St,+Sampaloc,+Manila" },
    { name: "Studeo Spaces", category: "Study Spots", location: "Dapitan", url: "https://www.google.com/maps/place/Studeo+Spaces+Study+Hub,+1705+Dapitan+St,+Sampaloc,+Manila" },
    { name: "Outside The Box Co-working & Study Lounge", category: "Study Spots", location: "Dapitan", url: "https://www.google.com/maps/place/Outside+The+Box+Co-working+%26+Study+Lounge,+1210+Asturias+St,+Sampaloc,+Manila" },
    { name: "WhiteBoard Student Lounge and Co-Working Space", category: "Study Spots", location: "Dapitan", url: "https://www.google.com/maps/place/WhiteBoard+Student+Lounge+and+Co-Working+Space,+V+Concepcion+St,+Sampaloc,+Manila" },

    // Study Spots - España
    { name: "The Catalysts", category: "Study Spots", location: "España", url: "https://www.google.com/maps/place/The+Catalyst,+St.+Thomas+Square,+España+Blvd,+Sampaloc,+Manila" },
    { name: "Mind Zone", category: "Study Spots", location: "España", url: "https://www.google.com/maps/place/Mind+Zone,+1139+España+Blvd,+Sampaloc,+Manila" },

    // Study Spots - Lacson
    { name: "3sha's Coworking Studio", category: "Study Spots", location: "Lacson", url: "https://www.google.com/maps/dir/3sha's+Coworking+Studio,+785+Lacson+Ave,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" },
    { name: "Upper Room Coworking and Virtual Office", category: "Study Spots", location: "Lacson", url: "https://www.google.com/maps/dir/Upper+Room+Coworking+and+Virtual+Office,+851+AH+Lacson+Ave,+Sampaloc,+Manila/University+of+Santo+Tomas+Main+Building" }
];

let selectedCategory = "all";
let selectedLocation = "all";
let searchQuery = "";

const spotsGrid = document.getElementById("spotsGrid");
const spotCount = document.getElementById("spotCount");
const searchInput = document.getElementById("searchInput");

function renderSpots() {
    if (!spotsGrid) return;

    const filteredSpots = spotsData.filter(spot => {
        const matchesCategory = selectedCategory === "all" || spot.category === selectedCategory;
        const matchesLocation = selectedLocation === "all" || spot.location.toLowerCase() === selectedLocation.toLowerCase();
        const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              spot.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              spot.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesLocation && matchesSearch;
    });

    if (spotCount) spotCount.textContent = filteredSpots.length;
    spotsGrid.innerHTML = "";

    if (filteredSpots.length === 0) {
        spotsGrid.innerHTML = `<div class="no-results">No places found matching your filter criteria.</div>`;
        return;
    }

    filteredSpots.forEach(spot => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div>
                <h3 class="card-title">${spot.name}</h3>
                <div class="badges">
                    <span class="badge badge-category">${spot.category}</span>
                    <span class="badge badge-location">${spot.location}</span>
                </div>
            </div>
            <a href="${spot.url}" target="_blank" rel="noopener noreferrer" class="map-btn">Get Directions</a>
        `;
        spotsGrid.appendChild(card);
    });
}

function setupFilterEvents(containerId, stateSetter) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            container.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            stateSetter(e.target.dataset.category || e.target.dataset.location);
            renderSpots();
        }
    });
}

setupFilterEvents("categoryFilters", (val) => selectedCategory = val);
setupFilterEvents("locationFilters", (val) => selectedLocation = val);

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderSpots();
    });
}

// Initial Render
renderSpots();
