var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri'
});
//
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri'
});

var map = L.map('map', {
    center: [25, 0],
    zoom: 2,
    layers: [Esri_WorldStreetMap]
});

var baseMaps = {
    "Road Map": Esri_WorldStreetMap,
    "Satellite": Esri_WorldImagery
};

var layerControl = L.control.layers(baseMaps).addTo(map);

var strand = L.latLng(45.431019, 12.334823);
var down = L.latLng(48.8549502, 2.3468266);
var museum = L.latLng(41.8902102, 12.4922309);
var york = L.latLng(51.4994794, -0.1248092);
var brompton = L.latLng(51.0649702, -1.7971855);
var william = L.latLng(48.9402087, 2.2528139);
var mark = L.latLng(43.078697, -79.0763802);
var marys = L.latLng(40.8422517, -73.9304704);
var kent = L.latLng(51.506298, -0.120496);
var marl = L.latLng(50.9190331, 14.0572688);
var molle = L.latLng(41.935556, 12.466944);
var jatte = L.latLng(48.8948193, 2.2664345);
var fuji = L.latLng(35.3628299, 138.7307859);
var five = L.latLng(40.7143643, -74.0005577);
var granada = L.latLng(37.1768988, -3.5897378);
var bruton = L.latLng(37.2713798, -76.7025813);
var warwick = L.latLng(52.2794138, -1.5845975);
var huis = L.latLng(52.0930774, 4.3438645);
var washington = L.latLng(40.7307828, -73.9973284);
var molo = L.latLng(45.4334887, 12.3405578);
var porte = L.latLng(49.2439852, 1.2544189);
var matterhorn = L.latLng(45.976576, 7.6584719);
var center = L.latLng(39.9524397, -75.1637497);
var reine = L.latLng(43.5648263, 4.1942591);
var stage = L.latLng(42.6052657, -70.6781733);
var berlin = L.latLng(52.5170764, 13.4115749);
var rialto = L.latLng(45.4379897, 12.3359142);
var lady = L.latLng(51.2046739, 3.2244486);
var ely = L.latLng(52.3986137, 0.2638014);
var italiens = L.latLng(48.8713205, 2.3364162);
var etretat = L.latLng(49.7073109, 0.1935979);
var parth = L.latLng(37.9715219, 23.7266424);
var padua = L.latLng(45.4098414, 11.8927044);
var munich = L.latLng(48.1582611, 11.5033879);
var forum = L.latLng(40.7492886, 14.4847282);
var teatro = L.latLng(37.8523123, 15.292199);
var taj = L.latLng(27.1749757, 78.0421602);
var capitol = L.latLng(38.8898012, -77.0090292);
var marly = L.latLng(48.8804217, 2.1108704);
var egmond = L.latLng(52.6216328, 4.6545006);
var erupt = L.latLng(40.8213076, 14.4263522);
var hart = L.latLng(51.5589021, 13.0089165);
var tour = L.latLng(52.3720105, 4.905642);
var rouen = L.latLng(49.437191, 1.0913427);
var pirna = L.latLng(50.9615451, 13.9440107);
var sitka = L.latLng(57.0500595, -135.3350632);
var coto = L.latLng(-0.684064, -78.4367661);
var antwerp = L.latLng(51.2203574, 4.4015973);
var windsor = L.latLng(51.483987, -0.60431);
var rock = L.latLng(36.1441334, -5.3421144);
var florence = L.latLng(43.767922, 11.2531284);
var custom = L.latLng(55.9480583, -4.7509405);
var brooklyn = L.latLng(40.6730128, -73.9845876);
var alkmaar = L.latLng(52.632614, 4.743932);
var ghent = L.latLng(51.21264302630933, 3.2404485616302026);
var golden = L.latLng(55.94950293449235, -3.190887963219886);
var ruins = L.latLng(49.3469489361878, 2.9801644318251);
var ranger = L.latLng(40.70613429891641, -73.99669263862219);
var santa = L.latLng(43.76901934731335, 11.250309358895594);
var old = L.latLng(38.97806598531773, -76.48972283733242);
var founding = L.latLng(-33.859206443817655, 151.2115517335217);
var compton = L.latLng(50.472513544702124, -3.6002784478031242);
var eichhorn = L.latLng(49.25689, 16.462614);
var saint = L.latLng(43.92801546810641, 2.1447380095308684);
var notre = L.latLng(48.85302281283721, 2.349916971036055);
var manhattan = L.latLng(40.70717484316477, -73.99054307782178);
var karls = L.latLng(48.198283497151444, 16.37189996806785);
var persen = L.latLng(48.19003718618461, 15.075604058841773);
var wells = L.latLng(51.21035620175577, -2.64347990529991);
var bright = L.latLng(42.04637925090316, -74.11910363873254);
var oxford = L.latLng(51.75279324881308, -1.2536998938233277);
var prague = L.latLng(50.08653902704181, 14.411286392729664);
var bayisland = L.latLng(-35.26174362306738, 174.12125725381634);
var rathaus = L.latLng(47.918124059145576, 13.799400670121077);
var damplatz = L.latLng(52.373127508047965, 4.892463792419649);
var segovia = L.latLng(40.948025956381244, -4.117859686583211);
var vyborg = L.latLng(60.71570989449037, 28.72858365963885);
var cape = L.latLng(-33.925436093239625, 18.42390456546646);
var vilnius = L.latLng(54.678154606053894, 25.286912831678286);
var princes = L.latLng(55.95201455069297, -3.1963202185542468);
var trakai = L.latLng(54.652374680648784, 24.933651103827362);
var palace = L.latLng(52.21505051523167, 21.03580040216378);
var alma = L.latLng(48.86350018067251, 2.3017561919601035);
var spui = L.latLng(52.36827355674235, 4.888875532887837);
var caer = L.latLng(53.13933477642847, -4.276869915968849);
var bow = L.latLng(51.52878304978209, -0.016678761487461734);
var quila = L.latLng(28.608841973461026, 77.2422407564747);
var concorde = L.latLng(37.2896610051625, 13.59205892142171);
var chase = L.latLng(52.58979668480128, -8.870988391690116);
var slottet = L.latLng(50.352737788358674, 7.1798328365536825);
var chaff = L.latLng(49.97604207718476, 9.141663219805931);
var lilles = L.latLng(52.72720592344428, -2.3737330414142708);
var scharf = L.latLng(51.12521481341898, 13.527553439015197);
var marys = L.latLng(50.061604148424856, 19.939603944429326);
var spinner = L.latLng(48.17101144093542, 16.350696456061456);
var grote = L.latLng(52.48589679530798, 4.658556305286563);
var harf = L.latLng(49.50711206547648, 0.19991185150812835);
var oude = L.latLng(52.37438453232728, 4.898123738466199);
var christ = L.latLng(51.279307787801635, 1.0811634973173927);
var pope = L.latLng(51.442106701050115, -0.3313032507828993);
var bavo = L.latLng(51.05298992949669, 3.727187284689531);
var bogor = L.latLng(-6.598023458543918, 106.79732164413238);
var harm = L.latLng(52.0912830939025, 4.96456573829366);
var doge = L.latLng(45.434024629263035, 12.340314304893045);
var durham = L.latLng(54.773398131519045, -1.5762442807490802);
var august = L.latLng(51.055302583979135, 13.73955816351706);
var memlook = L.latLng(30.023514425961885, 31.25934967133141);
var oxford = L.latLng(51.75280785454802, -1.2510336604787498);
var lincoln = L.latLng(53.23428392889462, -0.5361550782144268);
var pantheon = L.latLng(41.89858514019062, 12.476838604931554);
var singel = L.latLng(52.37220071425841, 4.88848065222617);
var moret = L.latLng(48.372607507427574, 2.8190656931110123);
var briar = L.latLng(47.6405648765318, 2.7408497437601294);
var rotund = L.latLng(48.88346086629913, 2.3695714251083335);
var bocca = L.latLng(41.88873461210782, 12.480747969615766);
var port = L.latLng(40.8097656213272, 14.33455477753072);
var rat = L.latLng(47.918123436054714, 13.79941299512479);
var rue = L.latLng(48.86593251830277, 2.3278987624296614);
var cambridge = L.latLng(52.20514181176664, 0.11736769816618857);
var rainy = L.latLng(44.974793223471416, -93.2803792073738);
var haarlem = L.latLng(52.38143591618554, 4.635011559887189);
var brew = L.latLng(52.382282448242506, 4.6403116918953184);
var grapes = L.latLng(51.45021853757792, -0.8565816764646562);
var lviv = L.latLng(49.839268362799345, 24.034193266624985);
var plac = L.latLng(52.24889324994805, 21.007019103549943);
var myse = L.latLng(52.215511753494795, 21.03829430859862);
var amalfi = L.latLng(40.634329093808205, 14.602595196584474);
var llyon = L.latLng(45.75685716685581, 4.838035099192827);
var navona = L.latLng(41.89893660267209, 12.473066386221028);
var asch = L.latLng(49.97605645207857, 9.141627661863916);
var binn = L.latLng(52.07960016844697, 4.313337430369342);
var bello = L.latLng(52.23870761431316, 21.016797327746676);
var column = L.latLng(52.247247395461706, 21.01340040663948);
var prou = L.latLng(48.86243121097536, 2.344599039832925);
var admiral = L.latLng(-34.1898457213882, 18.426505741689887);
var geyser = L.latLng(44.463674562161295, -110.8364805492947);
var kastel = L.latLng(55.691550370464846, 12.594609947234545);
var akard = L.latLng(32.77909835936005, -96.79927957199654);
var roros = L.latLng(62.57729544765129, 11.387894825786224);
var monet = L.latLng(48.85952977780359, 2.341199888871341);
var delft = L.latLng(52.012606093238105, 4.35586516407528);
var narni = L.latLng(42.52505305754527, 12.514646338824486);
var flatford = L.latLng(51.95836917163822, 1.0219988009320369);
var goyen = L.latLng(51.814167167293284, 4.660531425624543);
var monceau = L.latLng(48.87948591029008, 2.3092446750616213);
var granite = L.latLng(52.5190992129009, 13.399153895517056);
var entry = L.latLng(52.51626143862675, 13.377700054154507);
var crownprince = L.latLng(52.51717350543938, 13.396767840929257);
var change = L.latLng(48.85659664423805, 2.3467693817282593);
var starrynight = L.latLng(43.680177889477044, 4.629238050805474);

const station = document.getElementById("station");
const myDiv = document.getElementById("my-div");

const userMarkers = []; // Array to store user-added markers

const nextButton = document.createElement("button");
nextButton.innerText = "Next Painting";
nextButton.id = "buttonsdiv";
nextButton.disabled = true;
nextButton.className = "my-button";

const submitButton = document.createElement("subbutton");
submitButton.innerText = "Submit";
submitButton.id = "buttonsdiv";
submitButton.disabled = true;
submitButton.className = "my-button";

let totalDistance = 0; // Keep track of accumulated distance
let roundDistances = []; // Array to store distance for each round

// Custom user marker icon
const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [30, 41],
    iconAnchor: [15, 40],
  },
});

const greenIcon = new LeafIcon({
  iconUrl:
    "https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/_265a5cce-4ba0-4c1c-a76f-a7d5f00d8ea0-removebg-preview%20(1).png?v=1705859478915",
});

// Function to run the game with remaining reference points
function generateAndPlay(remainingPoints) {
  if (remainingPoints.length === 0) {
    // Fit the map to the user-added markers
    const bounds = new L.LatLngBounds();
    //fitmapbounds ro userMarker
    userMarkers.forEach(function (markerLatLng) {
      bounds.extend(markerLatLng);
    });
    map.fitBounds(bounds);
    //remove round 5 picture
    ghostinfo.innerHTML = "";

    // Add the "Play Again" button
    const playAgainButton = document.createElement("button");
    playAgainButton.id = "playAgain";
    playAgainButton.innerText = "Play Again";
    playAgainButton.className = "my-button";

    // Add click event listener to the button
    playAgainButton.addEventListener("click", function () {
      //cheating by reloading the browser. Instead this function should reset all variables and remove markers from map
      location.reload();
    });

    document.getElementById("playagain").appendChild(playAgainButton);

    // save personal best scores
    const personalBest = localStorage.getItem("personalBest");

    if (personalBest === null || totalDistance < parseFloat(personalBest)) {
      // If personalBest is not set or the current totalDistance is less than the stored personalBest
      localStorage.setItem("personalBest", totalDistance.toFixed(2));
    }

    //display game score
    
   loop(); // ready for some fireworks!
    station.innerHTML = `Well done!<br><br> You've found all the paintings! <br><br>
${roundDistances
  .map((distance, index) => `Round ${index + 1}: ${distance.toFixed(2)} miles`)
  .join("<br>")}<br>
<br>Total distance: ${totalDistance.toFixed(2)} miles.<br>
Personal Best: ${localStorage.getItem("personalBest")} miles.`;

    document
      .getElementById("station")
      .animate(
        [
          { transform: "rotate(-10deg)" },
          { transform: "rotate(10deg)" },
          { transform: "rotate(-10deg)" },
          { transform: "rotate(10deg)" },
          { transform: "rotate(-10deg)" },
          { transform: "rotate(10deg)" },
        ],
        {
          duration: 1000,
          iterations: 1,
        }
      );

    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingPoints.length);
  const referencePoint = remainingPoints[randomIndex];

  const roundNumber = Math.ceil(5 - remainingPoints.length + 1); // Calculate round number

  station.innerHTML = `Round ${roundNumber}<br>`;
  ghostinfo.innerHTML = `${stationInfo[referencePoint]}<br>`;

  map.off("click"); // Remove previous click event listener

  // Function to create the midpoint variable
  function createMidpoint(markerLatLng, referencePointLatLng) {
    const markerLat = markerLatLng.lat;
    const markerLng = markerLatLng.lng;
    const referencePointLat = referencePointLatLng.lat;
    const referencePointLng = referencePointLatLng.lng;

    // Calculate the midpoint's latitude and longitude
    const midpointLat = (markerLat + referencePointLat) / 2;
    const midpointLng = (markerLng + referencePointLng) / 2;

    // Create the midpoint L.latLng object
    const midpoint = L.latLng(midpointLat, midpointLng);

    return midpoint;
  }

  var userMarker;

  map.on("click", function (e) {
    myDiv.innerHTML =
      "Click again to change location & click Submit when you are happy";

    // Add user marker to the array

    if (userMarker) {
      map.removeLayer(userMarker); // Remove the previous marker
    }

    userMarker = L.marker(e.latlng).addTo(map); // Add the new marker
    userMarkers.push(userMarker.getLatLng());

    //add submitbutton
    document.getElementById("buttonsdiv").appendChild(submitButton);

    submitButton.onclick = function () {
      const marker = L.marker(e.latlng).addTo(map);
      const distance = L.latLng(e.latlng).distanceTo(referencePoint);
      map.off("click");

      // Create a bounds object encompassing both markers
      const bounds = L.latLngBounds([e.latlng, referencePoint]);

      // Zoom the map to fit those bounds
      map.fitBounds(bounds);

      //remove submit button and add next painting button
      document.getElementById("buttonsdiv").appendChild(nextButton);
      document.getElementById("buttonsdiv").removeChild(submitButton);

      // Convert meters to miles:
      const distanceInMiles = distance * 0.000621371;

      myDiv.innerHTML = `You clicked ${distanceInMiles.toFixed(2)} miles from ${
        locationNames[referencePoint]
      }`;
      
      // Create the midpoint variable and display message
      const midpoint = createMidpoint(e.latlng, referencePoint);
      const popup = L.popup()
        .setLatLng(midpoint)
        .setContent(
          distanceInMiles < 0.5
            ? "Perfect"
            : distanceInMiles < 2
            ? "Very Good"
            : distanceInMiles < 10
            ? "At least you got the right city"
            : distanceInMiles < 100
            ? "Close - ish"
            : "Way off!" // Default message for distances 100 miles or more
        )
        .openOn(map);

      // Update total distance with clicked marker's distance
      totalDistance += distanceInMiles;
      roundDistances.push(distanceInMiles); // Add distance to the roundDistances array
      // connect user marker to correct location
      const polyline = L.polyline([e.latlng, referencePoint], {
        color: "black",
      }).addTo(map);

      // Put marker on correct location
      const stationMarker = L.marker(referencePoint, { icon: greenIcon }).addTo(
        map
      );

      // Remove the used reference point from the remaining pool
      remainingPoints.splice(randomIndex, 1);
    };
  });

  // Enable next button when a new game round starts
  nextButton.disabled = false;

  // Handle next button click
  nextButton.onclick = function () {
    //remove popup message
    map.closePopup();
    // Change button text to "Results" on the fifth question
    if (roundNumber === 4) {
      nextButton.innerText = "Results";
    }

    //remove next button and add submit painting button
    document.getElementById("buttonsdiv").removeChild(nextButton);
    map.setView([25, 0], 2);
    document
      .getElementById("station")
      .animate(
        [
          { transform: "translateX(-3px)" },
          { transform: "translateX(3px)" },
          { transform: "translateX(-3px)" },
          { transform: "translateX(3px)" },
          { transform: "translateX(-3px)" },
          { transform: "translateX(3px)" },
        ],
        {
          duration: 1000,
          iterations: 1,
        }
      );

    generateAndPlay(remainingPoints);
    myDiv.innerHTML = "Click on the map";
  };
}

// Use map to determine location name according to the chosen reference point
const locationNames = {
  [strand]: "View of the Grand Canal",
  [down]: "A View of Paris with the Ile de la Cité",
  [museum]: "View of the Arch of Constantine with the Colosseum",
  [york]: "Houses of Parliament, London",
  [brompton]: "Salisbury Cathedral from Lower Marsh Close",
  [william]: "Argenteuil",
  [mark]: "Niagara",
  [marys]: "High Bridge at Night, New York City",
  [kent]: "Charing Cross Bridge, London",
  [marl]: "The Fortress of Königstein",
  [molle]: "The Tiber River with the Ponte Molle at Sunset",
  [jatte]: "A Sunday on La Grande Jatte",
  [fuji]: "South Wind, Clear Sky",
  [five]: "The Five Points",
  [granada]: "The Hill of the Alhambra, Granada",
  [bruton]: "Old Bruton Church, Williamsburg, Virginia",
  [warwick]: "Warwick Castle",
  [huis]: "The Huis ten Bosch at The Hague and Its Formal Garden",
  [washington]: "Seventh Regiment on Review, Washington Square, New York",
  [molo]: "The Molo, Venice, Looking West",
  [porte]: "Portejoie on the Seine",
  [matterhorn]: "Sunrise on the Matterhorn",
  [center]: "Fourth of July in Centre Square, Philadelphia",
  [reine]: "Porte de la Reine at Aigues-Mortes",
  [stage]: "Stage Fort across Gloucester Harbor",
  [berlin]: "Parochialstrasse in Berlin",
  [rialto]: "The Grand Canal above the Rialto",
  [lady]: "Church of Notre Dame, Bruges",
  [ely]: "View of Ely Cathedral",
  [italiens]: "Boulevard des Italiens, Morning, Sunlight",
  [etretat]: "Washerwomen on the Beach of Etretat",
  [parth]: "Ruins of the Parthenon",
  [padua]: "The Porta Portello, Padua",
  [munich]: "Nymphenburg Palace, Munich",
  [forum]: "The Forum at Pompeii",
  [teatro]: "The Roman Theater at Taormina",
  [taj]: "The Taj Mahal",
  [capitol]: "Emancipation Proclamation",
  [marly]: "Flood at Port-Marly",
  [egmond]: "Landscape with the Ruins of the Castle of Egmond",
  [erupt]: "The Eruption of Vesuvius",
  [hart]: "Hunting near Hartenfels Castle",
  [tour]: "Tour de Montelban, Amsterdam",
  [rouen]: "Morning, An Overcast Day, Rouen",
  [pirna]: "Pirna: The Obertor from the South",
  [sitka]: "Rear View of Greek Church, Sitka",
  [coto]: "Cotopaxi",
  [antwerp]: "Antwerp Cathedral",
  [windsor]: "View of Windsor Castle",
  [rock]: "Clearing Storm at Gibraltar",
  [florence]: "Ponte Vecchio, Florence",
  [custom]: "The Custom House at Greenock, Scotland",
  [brooklyn]: "Vechte House at Gowannus, Brooklyn, New York",
  [alkmaar]: "View of the Town of Alkmaar",
  [ghent]: "Ghent Gate, Bruges",
  [golden]: "High Street, Edinburgh",
  [ruins]: "Ruins of the Château de Pierrefonds",
  [ranger]: "Brooklyn Bridge",
  [santa]: "Ponte Santa Trinità, Florence",
  [old]: "Old Annapolis, Francis Street",
  [founding]: "Founding of Australia, Sydney Cove",
  [compton]: "Compton Castle, Devonshire, England",
  [eichhorn]: "Eichhorn Castle at Evening",
  [saint]: "Saint Salvi Church, Albi",
  [notre]: "Notre Dame de Paris",
  [manhattan]: "Manhattan Bridge Loop",
  [karls]: "Karlskirche, Wien",
  [persen]: "Schloss Persenbeug an der Donau",
  [wells]: "Wells Cathedral, England",
  [bright]: "Bright Light at Russell's Corners",
  [oxford]: "A View of St. Mary's Church, Oxford",
  [prague]: "Charles Bridge in Prague",
  [bayisland]: "Kororareka Beach, Bay of Islands, New Zealand",
  [rathaus]: "Das Rathaus in Gmunden",
  [damplatz]: "Der Damplatz zu Amsterdam mit dem Rathaus und der Waage",
  [segovia]: "Aquaduct at Segovia, Spain",
  [vyborg]: "Karl Knutson Bonde Leaving Vyborg Castle For The Royal Election In Stockholm",
  [cape]: "City Hall, Cape Town",
  [vilnius]: "Town Hall in Vilnius",
  [princes]: "Princes Street with the Commencement of the Building of the Royal Institution",
  [trakai]: "Ruins of the Trakai Island Castle at sunset",
  [palace]: "View of the Łazienki Palace in summer",
  [alma]: "Exposition de 1900, le pont de l’Alma",
  [spui]: "The so-called Boerenverdriet on the Spui, Amsterdam",
  [caer]: "Landscape with ships in front of Caernarvon Castle",
  [bow]: "Street Scene at Stratford by Bow",
  [quila]: "Inside the Main Entrance of the Purana Qila, Delhi",
  [concorde]: "Concorde temple within walls of ancient Agrigentum",
  [chase]: "A Landscape with Curragh Chase, County Limerick",
  [slottet]: "Büresheim Castle on the Eifel River",
  [chaff]: "View of Aschaffenburg",
  [lilles]: "Lilleshall, Shropshire: View of the North Entrance and of the West Front",
  [scharf]: "Burg Scharfenberg at Night",
  [marys]: "St Mary's Church in Krakow",
  [spinner]: "Die Spinnerin am Kreuz mit Aussicht gegen das Mödlinger Gebirge",
  [grote]: "Street Scene in Beverwijk",
  [harf]: "Harfleur near Le Havre (view of Saint Martin)",
  [oude]: "View of Oudezijds Voorburgwal with the Oude Kerk in Amsterdam",
  [christ]: "Christ Church Gate, Canterbury",
  [pope]: "A View of Alexander Pope's Villa, Twickenham, on the Banks of the Thames",
  [bavo]: "St Bavo’s Cathedral and the Reep in Ghent",
  [bogor]: "Rear View of Buitenzorg Palace before the Earthquake of 10 October 1834",
  [harm]: "View in the village of Harmelen",
  [doge]: "Courtyard of the Doge's Palace",
  [durham]: "Durham Cathedral",
  [august]: "The Augustusbrücke in Dresden",
  [memlook]: "Tombs of the Memlooks, Cairo",
  [oxford]: "High Street, Oxford (Queen's College)",
  [lincoln]: "A View of the Cathedral and City of Lincoln from the River",
  [pantheon]: "The Pantheon",
  [singel]: "The Singel Bridge at the Paleisstraat in Amsterdam",
  [moret]: "Le Pont de Moret",
  [briar]: "The Railroad Bridge at Briare",
  [rotund]: "At Barrière de la Villette, Paris",
  [bocca]: "Piazza della Bocca della Verità with the so-called Vesta Temple in Rome",
  [port]: "The Harbor of Granatello near Portici with Vesuvius in the background",
  [rat]: "Das Rathaus in Gmunden",
  [rue]: "La rue de Castiglione",
  [cambridge]: "King's Parade, Cambridge",
  [rainy]: "Rainy Evening on Hennepin Avenue",
  [haarlem]: "Haarlem City hall with figures on the Grote markt",
  [brew]: "View of the Bakenessergracht with the Passer-en-Valk Brewery",
  [grapes]: "A Game of Bowls on the Bowling Green Outside the Bunch of Grapes Inn, Hurst, Berkshire",
  [lviv]: "Fair before Easter at the Bernardine square in Lviv in 1895",
  [plac]: "Krasiński Square and the Piarist church",
  [myse]: "Myślewicki Palace in Łazienki",
  [amalfi]: "View of the Square in Amalfi",
  [llyon]: "Vue du pont de la Guillotière à Lyon",
  [navona]: "Roman Market Scene in the Piazza Navona",
  [asch]: "View of Aschaffenburg",
  [binn]: "View of the Binnenhof, The Hague",
  [bello]: "Church of the Holy Cross in Warsaw",
  [column]: "View from the Castle Square towards Krakowskie Przedmieście",
  [prou]: "La rue des Prouvaires et l’église Saint-Eustache",
  [admiral]: "The Admiral House, Simon’s Town, Cape of Good Hope",
  [geyser]: "The Castle Geyser, Upper Geyser Basin, Yellowstone National Park",
  [kastel]: "View of ‘Kastellet’, Copenhagen ",
  [akard]: "South Akard Street",
  [roros]: "Street in Røros in Winter",
  [monet]: "St. Germain l’Auxerrois",
  [delft]: "View of the Oude Delft Canal, Delft",
  [narni]: "Le pont de Narni",
  [flatford]: "The Hay Wain",
  [goyen]: "Winter Landscape With Figures On Ice",
  [monceau]: "Landscape, The Parc Monceau",
  [granite]: "The Granite Dish in the Berlin Lustgarten",
  [entry]: "Entry of Napoleon I into Berlin",
  [crownprince]: "Parade Before the Crown Pince's Palace",
  [change]: "The flower market, the Clock Tower, the Pont au Change and the Pont-Neuf",
  [starrynight]: "Starry Night on the Rhone",
};

const stationInfo = {
  [strand]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ef1f442c-24bf-40c8-a82b-e89b71c66ecf_3000.jpg?v=1704458402437" onclick="this.requestFullscreen()" class="center" title="View of the Grand Canal" width="400"> (c1743) by Bernardo Bellotto. <br><br> From the <a href=\'https://www.getty.edu/art/collection/object/103RJP#full-artwork-details\'>Getty\'s Collection Online</a>.',
  [down]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ef390b6c-6021-4738-92fe-2338c38cc2af_3000.jpg?v=1704459300215" onclick="this.requestFullscreen()" class="center" title="A View of Paris with the Ile de la Cité" width="400"> (c1763) by Jean-Baptiste Raguenet. <br><br> From the <a href=\'https://www.getty.edu/art/collection/object/103RBA\'>Getty\'s Collection Online</a>.',
  [museum]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/c2819e28-3aa1-45f9-8b16-63fd41f7c39c_3000.jpg?v=1704459871741" onclick="this.requestFullscreen()" class="center" title="View of the Arch of Constantine with the Colosseum" width="400"> (1742–1745) by Canaletto. <br><br> From the <a href=\'https://www.getty.edu/art/collection/object/103RAX\'>Getty\'s Collection Online</a>.',
  [york]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/512px-Claude_Monet_-_Houses_of_Parliament%2C_London.jpg?v=1704460689003" onclick="this.requestFullscreen()" class="center" title="Houses of Parliament, London" width="400"> (1900-1901) by Claude Monet. <br><br> From the <a href=\'https://www.artic.edu/artworks/16584/houses-of-parliament-london\'>Art Institute of Chicago</a>.',
  [brompton]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/salisbury_cathedral_from_lower_marsh_close_1937.1.108.jpg?v=1704462269065" onclick="this.requestFullscreen()" class="center" title="Salisbury Cathedral from Lower Marsh Close" width="400"> (1820) by John Constable. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.115.html\'>National Gallery of Art</a>.',
  [william]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/argenteuil_1970.17.42.jpg?v=1704462732271" onclick="this.requestFullscreen()" class="center" title="Argenteuil" width="400"> (1872) by Claude Monet. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.52186.html\'>National Gallery of Art</a>.',
  [mark]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/niagara_2014.79.10.jpg?v=1704463998080" onclick="this.requestFullscreen()" class="center" title="Niagra" width="400"> (1857) by Frederic Edwin Church. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.166436.html\'>National Gallery of Art</a>.',
  [marys]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/high_bridge_at_night%2C_new_york_city_2016.129.1.jpg?v=1704465031522" onclick="this.requestFullscreen()" class="center" title="High Bridge at Night, New York City" width="400"> (c1915) by Ernest Lawson. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.206651.html\'>National Gallery of Art</a>.',
  [kent]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/charing_cross_bridge%2C_london_1985.64.32.jpg?v=1704465622742" onclick="this.requestFullscreen()" class="center" title="Charing Cross Bridge, London" width="400"> (1890) by Camille Pissarro. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.66430.html\'>National Gallery of Art</a>.',
  [marl]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/the_fortress_of_konigstein_1993.8.1.jpg?v=1704466398637" onclick="this.requestFullscreen()" class="center" title="The Fortress of Königstein" width="400"> (1756-1758) by Bernardo Bellotto. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.80924.html\'>National Gallery of Art</a>.',
  [molle]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/the_tiber_river_with_the_ponte_molle_at_sunset_2012.129.1.jpg?v=1704705536526" onclick="this.requestFullscreen()" class="center" title="The Tiber River with the Ponte Molle at Sunset" width="400"> (c1650) by Jan Asselijn. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.159836.html\'>National Gallery of Art</a>.',
  [jatte]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1926.224%20-%20A%20Sunday%20on%20La%20Grande%20Jatte%20%E2%80%94%201884.jpg?v=1704707342998" onclick="this.requestFullscreen()" class="center" title="Painting of Parisiens lounging on the banks of the Seine" width="400"> (1884) by Georges Seurat. <br><br> From the <a href=\'https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884\'>Art Institute of Chicago</a>.',
  [fuji]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Red_Fuji_southern_wind_clear_morning.jpg?v=1704719096023" onclick="this.requestFullscreen()" class="center" title="Painting of Mount Fuji" width="400"> (c1830) by Katsushika Hokusai. <br><br> From the <a href=\'https://commons.wikimedia.org/wiki/File:Red_Fuji_southern_wind_clear_morning.jpg\'>Wikimedia</a>.',
  [five]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP265419.jpg?v=1704719615708" onclick="this.requestFullscreen()" class="center" title="The Five Points, New York around 1827" width="400"> (c1827) by Unknown. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/20891\'>Met Museum</a>.',
  [granada]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP226882.jpg?v=1704720373930" onclick="this.requestFullscreen()" class="center" title="The Hill of the Alhambra, Granada" width="400"> (1865) by Samuel Colman. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/10508\'>Met Museum</a>.',
  [bruton]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT207462.jpg?v=1704726689937" onclick="this.requestFullscreen()" class="center" title="Old Bruton Church, Williamsburg, Virginia" width="400"> (1893) by Alfred Thompson. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/12796\'>Met Museum</a>.',
  [warwick]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Wrightsman21.jpg?v=1704728185243" onclick="this.requestFullscreen()" class="center" title="Warwick Castle" width="400"> (1748) by Canaletto. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/438106\'>Met Museum</a>.',
  [huis]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP145409.jpg?v=1704795374270" onclick="this.requestFullscreen()" class="center" title="The Huis ten Bosch at The Hague and Its Formal Garden" width="400"> (c1669) by Jan van der Heyden. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/436648\'>Met Museum</a>.',
  [washington]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT2023.jpg?v=1704797052013" onclick="this.requestFullscreen()" class="center" title="Seventh Regiment on Review, Washington Square, New York" width="400"> (c1851) by Otto Boetticher. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/10194\'>Met Museum</a>.',
  [molo]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT3064.jpg?v=1704825889389" onclick="this.requestFullscreen()" class="center" title="The Molo, Venice, Looking West" width="400"> (1709) by Luca Carlevaris. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/459032\'>Met Museum</a>.',
  [porte]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP-19017-001.jpg?v=1704826693501" onclick="this.requestFullscreen()" class="center" title="Portejoie on the Seine" width="400"> (1858-1868) by Charles-François Daubigny. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/436088\'>Met Museum</a>.',
  [matterhorn]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT218107.jpg?v=1704827258440" onclick="this.requestFullscreen()" class="center" title="Sunrise on the Matterhorn" width="400"> (1875) by Albert Bierstadt. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/10158\'>Met Museum</a>.',
  [center]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1845_3_1_l.jpg?v=1704884727201" onclick="this.requestFullscreen()" class="center" title="Fourth of July in Centre Square, Philadelphia" width="400"> (1812) by John L. Krimmel. <br><br> From the <a href=\'https://www.pafa.org/museum/collection/item/fourth-july-centre-square\'>Pennsylvania Academy of the Fine Arts</a>.',
  [reine]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP-17243-001.jpg?v=1704885359292" onclick="this.requestFullscreen()" class="center" title="Porte de la Reine at Aigues-Mortes" width="400"> (1867) by Jean-Frédéric Bazille. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/435626\'>Met Museum</a>.',
  [stage]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT5586.jpg?v=1704885996660" onclick="this.requestFullscreen()" class="center" title="Stage Fort across Gloucester Harbor" width="400"> (1862) by Fitz Henry Lane. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/11396\'>Met Museum</a>.',
  [berlin]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP157664.jpg?v=1704910339380" onclick="this.requestFullscreen()" class="center" title="Parochialstrasse in Berlin" width="400"> (1831) by Eduard Gaertner. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/438848\'>Met Museum</a>.',
  [rialto]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP124053.jpg?v=1704910963754" onclick="this.requestFullscreen()" class="center" title="The Grand Canal above the Rialto" width="400"> (1760-1770) by Francesco Guardi. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/436599\'>Met Museum</a>.',
  [lady]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ycba_c51ed4fd-f6ab-41aa-9ce3-39354305c1fe.jpg?v=1704967944865" onclick="this.requestFullscreen()" class="center" title="Church of Notre Dame, Bruges" width="400"> (c1820) by Samuel Austin. <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:13052\'>Yale Center for British Art</a>.',
  [ely]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ycba_f5771714-0f77-4200-b0e9-fee60ccdc763.jpg?v=1704969797977" onclick="this.requestFullscreen()" class="center" title="View of Ely Cathedral" width="400"> (c1796) by Joseph Mallord William Turner. <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:1880\'>Yale Center for British Art</a>.',
  [italiens]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/boulevard_des_italiens%2C_morning%2C_sunlight_1963.10.198.jpg?v=1704978654107" onclick="this.requestFullscreen()" class="center" title="Boulevard des Italiens, Morning, Sunlight" width="400"> (1897) by Camille Pissarro. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.46673.html\'>National Gallery of Art</a>.',
  [etretat]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/washerwomen_on_the_beach_of_etretat_1970.17.17.jpg?v=1704982935492" onclick="this.requestFullscreen()" class="center" title="Washerwomen on the Beach of Etretat" width="400"> (1894) by Eugène Boudin. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.52161.html\'>National Gallery of Art</a>.',
  [parth]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ruins_of_the_parthenon_2014.79.20.jpg?v=1704984008164" onclick="this.requestFullscreen()" class="center" title="Ruins of the Parthenon" width="400"> (1880) by Sanford Robinson Gifford. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.121547.html\'>National Gallery of Art</a>.',
  [padua]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/the_porta_portello%2C_padua_1961.9.53.jpg?v=1705065520627" onclick="this.requestFullscreen()" class="center" title="The Porta Portello, Padua" width="400"> (c1741) by Canaletto. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.46152.html\'>National Gallery of Art</a>.',
  [munich]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/nymphenburg_palace%2C_munich_1961.9.63.jpg?v=1705065995677" onclick="this.requestFullscreen()" class="center" title="Nymphenburg Palace, Munich" width="400"> (c1761) by Bernardo Bellotto and Workshop. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.46162.html\'>National Gallery of Art</a>.',
  [forum]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/forum.jpg?v=1705067297148" onclick="this.requestFullscreen()" class="center" title="The Forum at Pompeii" width="400"> (1819) by Achille-Etna Michallon. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.221599.html\'>National Gallery of Art</a>.',
  [teatro]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/the_roman_theater_at_taormina_2004.166.33.jpg?v=1705089687926" onclick="this.requestFullscreen()" class="center" title="The Roman Theater at Taormina" width="400"> (1828) by Louise-Joséphine Sarazin de Belmont. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.130896.html\'>National Gallery of Art</a>.',
  [taj]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/the_taj_mahal_1978.80.3.jpg?v=1705091009809" onclick="this.requestFullscreen()" class="center" title="The Taj Mahal" width="400"> (1860-80) by Erastus Salisbury Field. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.56730.html\'>National Gallery of Art</a>.',
  [capitol]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/emancipation_proclamation_1955.11.10.jpg?v=1705140044752" onclick="this.requestFullscreen()" class="center" title="Emancipation Proclamation" width="400"> (1864) by A.A. Lamb. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.43441.html\'>National Gallery of Art</a>.',
  [marly]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/flood_at_port-marly_1985.64.38.jpg?v=1705141136485" onclick="this.requestFullscreen()" class="center" title="Flood at Port-Marly" width="400"> (1872) by Alfred Sisley. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.66436.html\'>National Gallery of Art</a>.',
  [egmond]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1947.475%20-%20Landscape%20with%20the%20Ruins%20of%20the%20Castle%20of%20Egmond.jpg?v=1705159629888" onclick="this.requestFullscreen()" class="center" title="Landscape with the Ruins of the Castle of Egmond" width="400"> (1650-55) by Jacob van Ruisdael. <br><br> From the <a href=\'https://www.artic.edu/artworks/60755/landscape-with-the-ruins-of-the-castle-of-egmond\'>Art Institute Chicago</a>.',
  [erupt]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1978.426%20-%20The%20Eruption%20of%20Vesuvius.jpg?v=1705160665896" onclick="this.requestFullscreen()" class="center" title="The Eruption of Vesuvius" width="400"> (1771) by Pierre-Jacques Volaire. <br><br> From the <a href=\'https://www.artic.edu/artworks/57996/the-eruption-of-vesuvius\'>Art Institute Chicago</a>.',
  [hart]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1958.425_web.jpg?v=1705223787570" onclick="this.requestFullscreen()" class="center" title="Hunting near Hartenfels Castle" width="400"> (1540) by Lucas Cranach. <br><br> From the <a href=\'https://www.clevelandart.org/art/1958.425\'>Cleveland Museum of Art</a>.',
  [tour]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/download.png?v=1705228096799" onclick="this.requestFullscreen()" class="center" title="Tour de Montelban, Amsterdam" width="400"> (1884) by Maxime Lalanne. <br><br> From the <a href=\'https://www.clevelandart.org/art/1998.365\'>Cleveland Museum of Art</a>.',
  [rouen]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT1863.jpg?v=1705395819385" onclick="this.requestFullscreen()" class="center" title="Morning, An Overcast Day, Rouen" width="400"> (1896) by Camille Pissarro. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/437308\'>Met Museum</a>.',
  [pirna]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT4602%20(1).jpg?v=1705397554844" onclick="this.requestFullscreen()" class="center" title="Pirna: The Obertor from the South" width="400"> (c1750) by Bernardo Bellotto. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/435646\'>Met Museum</a>.',
  [sitka]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/SAAM-1985.66.326798_1_screen.jpg?v=1705428259703" onclick="this.requestFullscreen()" class="center" title="Rear View of Greek Church, Sitka" width="400"> (1888) by Theodore J. Richardson. <br><br> From the <a href=\'https://americanart.si.edu/artwork/rear-view-greek-church-sitka-1888-20899\'>Smithsonian</a>.',
  [coto]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/SAAM-1965.12_2-000001_screen.jpg?v=1705428658992" onclick="this.requestFullscreen()" class="center" title="Cotopaxi" width="400"> (1855) by Frederic Edwin Church. <br><br> From the <a href=\'https://americanart.si.edu/artwork/cotopaxi-4807\'>Smithsonian</a>.',
  [antwerp]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/SAAM-1962.13.8_1_screen.jpg?v=1705429060669" onclick="this.requestFullscreen()" class="center" title="Antwerp Cathedral" width="400"> (1899) by Cass Gilbert. <br><br> From the <a href=\'https://americanart.si.edu/artwork/antwerp-cathedral-9010\'>Smithsonian</a>.',
  [windsor]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ma-312377.jpg?v=1705516838682" onclick="this.requestFullscreen()" class="center" title="View of Windsor Castle" width="400"> (1863) by Edward Moran. <br><br> From the <a href=\'https://collections.lacma.org/node/2157735\'>Los Angeles County Museum of Art</a>.',
  [rock]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/SAAM-2011.43_1.jpg?v=1705764441670" onclick="this.requestFullscreen()" class="center" title="Clearing Storm at Gibraltar" width="400"> (1860) by Samuel Colman. <br><br> From the <a href=\'https://americanart.si.edu/artwork/clearing-storm-gibraltar-81938\'>Smithsonian</a>.',
  [florence]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/SAAM-1983.83.154_1_screen.jpg?v=1705765409021" class="center" title="Ponte Vecchio, Florence" width="400"> (1900) by George Elbert Burr. <br><br> From the <a href=\'https://americanart.si.edu/artwork/ponte-vecchio-florence-3276\'>Smithsonian</a>.',
  [custom]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP115732.jpg?v=1705860290319" class="center" title="The Custom House at Greenock, Scotland" width="400"> (1828) by Robert Salmon. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/12024\'>Met Museum</a>.',
  [brooklyn]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ap36.123.1.jpg?v=1705861073235" class="center" title="Vechte House at Gowannus, Brooklyn, New York" width="400"> (1865) by Unknown. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/13015\'>Met Museum</a>.',
  [alkmaar]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP145944.jpg?v=1705934836946" class="center" title="View of the Town of Alkmaar" width="400"> (1620-70) by Salomon van Ruysdael. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/437590\'>Met Museum</a>.',
  [ghent]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DAC_1984-29-113_001_OA.jpg?v=1705938003337" class="center" title="Ghent Gate, Bruges" width="400"> (1898) by William Strang. <br><br> From the <a href=\'https://dac-collection.wesleyan.edu/objects-1/info/13179\'>Davison Art Center</a>.',
  [golden]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ycba_a56bcc91-8fed-4764-a6b0-8b50b24c017d.jpg?v=1705938747772" class="center" title="High Street, Edinburgh" width="400"> (1818) by Joseph Mallord William Turner. <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:5501\'>Yale Center for British Art</a>.',
  [ruins]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1940.965_v01_o4.jpg?v=1706007728900" class="center" title="Ruins of the Château de Pierrefonds" width="400"> (c1832) by Jean-Baptiste-Camille Corot. <br><br> From the <a href=\'https://www.cincinnatiartmuseum.org/art/explore-the-collection?id=11296492\'>Cincinnati Art Museum</a>.',
  [ranger]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1925.720%20-%20Brooklyn%20Bridge.jpg?v=1706028574736" class="center" title="Brooklyn Bridge" width="400"> (1899) by Henry Ward Ranger. <br><br> From the <a href=\'https://www.artic.edu/artworks/16545/brooklyn-bridge\'>Art Institute Chicago</a>.',
  [santa]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DP837464.jpg?v=1706107751030" class="center" title="Ponte Santa Trinità, Florence" width="400"> (pre 1832) by James Duffield Harding. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/406118\'>Met Museum</a>.',
  [old]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/DT218025.jpg?v=1706109410795" class="center" title="Old Annapolis, Francis Street" width="400"> (1876) by Francis Blackwell Mayer. <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/11524\'>Met Museum</a>.',
  [founding]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/a128112h.jpg?v=1706110506490" class="center" title="Founding of Australia, Sydney Cove" width="400"> (1937) by Algernon Talmage. <br><br> From the <a href=\'https://www.sl.nsw.gov.au/collection-items/founding-australia-capt-arthur-phillip-rn-sydney-cove-jan-26th-1788\'>State Library NSW</a>.',
  [compton]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/SAAM-1962.13.62_1.jpg?v=1706213438174" class="center" title="Compton Castle, Devonshire, England" width="400"> (1928) by Cass Gilbert. <br><br> From the <a href=\'https://americanart.si.edu/artwork/compton-castle-devonshire-england-9031\'>Smithsonian</a>.',
  [eichhorn]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/eichhorn_castle_at_evening_2000.73.1.jpg?v=1706261238821" class="center" title="Eichhorn Castle at Evening" width="400"> (c1838) by Josef Höger. <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.111633.html\'>National Gallery of Art</a>.',
  [saint]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1931.718%20-%20Saint%20Salvi%20Church%2C%20Albi.jpg?v=1706365361889" class="center" title="Saint Salvi Church, Albi" width="400"> (1830-40) by Pierre Achille Poirot. <br><br> From the <a href=\'https://www.artic.edu/artworks/110752/saint-salvi-church-albi\'>Art Institute Chicago</a>.',
  [notre]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1922.446%20-%20Notre%20Dame%20de%20Paris.jpg?v=1706366902486" class="center" title="Notre Dame de Paris" width="400"> (1890-95) by Jean François Raffaëlli. <br><br> From the <a href=\'https://www.artic.edu/artworks/81568/notre-dame-de-paris\'>Art Institute Chicago</a>.',
  [manhattan]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Manhattan-bridge-loop-edward-hopper-1928.jpg?v=1706454192706" class="center" title="Manhattan Bridge Loop" width="400"> (1928) by Edward Hopper. <br><br> From the <a href=\'https://addison.andover.edu/search-the-collection/?embark_query=/objects-1/info/1594?sort=0&objectName=Manhattan%20Bridge%20Loop\'>Addison Gallery of American Art</a>.',
  [karls]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Johann_Friedrich_Wizani_001.jpg?v=1706455730942" class="center" title="Karlskirche, Wien" width="400"> (1895) by Johann Friedrich Wizani. <br><br> From the <a href=\'https://sammlung.wienmuseum.at/objekt/82848-blick-vom-wienfluss-gegen-elisabethbruecke-und-karlskirche/\'>Wien Museum</a>.',
  [persen]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Ferdinand_Georg_Waldm%C3%BCller_-_Schloss_Persenbeug_an_der_Donau_-_2594_-_Staatliche_Kunsthalle_Karlsruhe.jpg?v=1706534412724" class="center" title="Schloss Persenbeug an der Donau" width="400"> (1833) by Ferdinand Georg Waldmüller. <br><br> From the <a href=\'https://www.kunsthalle-karlsruhe.de/\'>Staatliche Kunsthalle Karlsruhe</a>.',
  [wells]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/SAAM-1962.13.42_1.jpg?v=1706651810719" class="center" title="Wells Cathedral, England" width="400"> (1905) by Cass Gilbert. <br><br> From the <a href=\'https://www.si.edu/object/wells-cathedral-england:saam_1962.13.42\'>Smithsonian</a>.',
  [bright]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Bright_Light_at_Russell\'s_Corners_by_George_Ault_(1946).jpg?v=1706652709994" class="center" title="Bright Light at Russells Corners" width="400"> (1958) by George Ault. <br><br> From the <a href=\'https://www.si.edu/object/bright-light-russells-corners:saam_1976.121\'>Smithsonian</a>.',
  [oxford]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ycba_bc3c66ce-4a77-40c2-b77f-85870cf8272b.jpg?v=1706714497249" class="center" title="A View of St. Mary\'s Church, Oxford" width="400"> (c1760) by John Donowell. <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:4554\'>Yale Center for British Art</a>.',
  [prague]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/533089ldsdl.jpg?v=1706715311849" class="center" title="Charles Bridge in Prague" width="400"> (20th Century) by René Leclercq. <br><br> From the <a href=\'https://vlaamsekunstcollectie.be/en/collection/2595\'>Flemish Art Collection</a>.',
  [bayisland]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/536736ldsdl.jpg?v=1706788602969" class="center" title="Kororareka Beach, Bay of Islands, New Zealand" width="400"> (c1856) by Thomas Gardiner. <br><br> From the <a href=\'https://collections.tepapa.govt.nz/object/41571\'>Museum of New Zealand</a>.',
  [rathaus]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1280px-Rudolf_von_Alt_-_Das_Rathaus_in_Gmunden_-_988_-_%C3%96sterreichische_Galerie_Belvedere.jpg?v=1706789440233" class="center" title="Das Rathaus in Gmunden" width="400"> (1860) by Rudolf von Alt. <br><br> From the <a href=\'https://sammlung.belvedere.at/objects/6770/das-rathaus-in-gmunden?\'>Belvedere Gallery, Austria</a>.',
  [damplatz]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/kunsthallekarlsruhe-gerrit-adriansz.-berckheyde-der-damplatz-zu-amsterdam-mit-dem-rathau-341.small_.jpg?v=1706790595914" class="center" title="Der Damplatz zu Amsterdam mit dem Rathaus und der Waage" width="400"> (1689) by Gerrit Adriansz. Berckheyde. <br><br> From the <a href=\'https://www.kunsthalle-karlsruhe.de/kunstwerke/Gerrit-Adriansz--Berckheyde/Der-Damplatz-zu-Amsterdam-mit-dem-Rathaus-und-der-Waage/0AAD71E7451E6E3EAC97F5B1C9CD326F/\'>Staatliche Kunsthalle Karlsruhe</a>.',
  [segovia]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Edward_Angelo_Goodall_-_Aquaduct_at_Segovia%2C_Spain_-_B1975.4.1527_-_Yale_Center_for_British_Art.jpg?v=1706881937899" class="center" title="Aquaduct at Segovia, Spain" width="400"> (19th Century) by Edward Alfred Goodall <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:10256\'>Yale Center for British Art</a>.',
  [vyborg]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1024px-Severin_Falkman_-_Karl_Knutson_Bonde_Leaving_Vyborg_Castle_for_the_Royal_Election_in_Stockholm_1448.jpg?v=1706883046737" class="center" title="Karl Knutson Bonde Leaving Vyborg Castle For The Royal Election In Stockholm" width="400"> (1886) by Severin Falkman <br><br> From the <a href=\'https://www.kansallisgalleria.fi/fi/object/625537\'>Finnish National Gallery</a>.',
  [cape]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Robert_Gwelo_Goodman_-_City_Hall%2C_Cape_Town_1917_-_Google_Art_Project.jpg?v=1707063464516" class="center" title="City Hall, Cape Town" width="400"> (1917) by Robert Gwelo Goodman <br><br> From the <a href=\'https://www.iziko.org.za/\'>Iziko South African National Gallery</a>.',
  [vilnius]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/530679ldsdl.jpg?v=1707064261359" class="center" title="Town Hall in Vilnius" width="400"> (1946) by Marcin Zaleski <br><br> From the <a href=\'https://www.mnw.art.pl/en/\'>National Museum in Warsaw</a>.',
  [princes]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/503329ldsdl.jpg?v=1707140992432" class="center" title="Princes Street with the Commencement of the Building of the Royal Institution" width="400"> (1825) by Alexander Nasmyth <br><br> From the <a href=\'https://www.nationalgalleries.org/art-and-artists/17469\'>National Galleries Scotland</a>.',
  [trakai]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/J%C3%B3zef_Marszewski_-_Ruins_of_the_Trakai_Island_Castle_at_sunset_-_MP_2685_-_National_Museum_in_Warsaw.jpg?v=1707142900033" class="center" title="Ruins of the Trakai Island Castle at sunset" width="400"> (1866) by Józef Marszewski <br><br> From the <a href=\'https://cyfrowe.mnw.art.pl/en/catalog/445643\'>National Museum in Warsaw</a>.',
  [palace]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Marcin_Zaleski_-_View_of_the_%C5%81azienki_Palace_in_summer_-_MP_237_MNW_-_National_Museum_in_Warsaw.jpg?v=1707302270363" class="center" title="View of the Łazienki Palace in summer" width="400"> (1837) by Marcin Zaleski <br><br> From the <a href=\'https://cyfrowe.mnw.art.pl/en/home\'>National Museum in Warsaw</a>.',
  [alma]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/image_brouardel_laure_exposition_de_1_d.7633_407679.jpg?v=1707303254397" class="center" title="Exposition de 1900, le pont de l’Alma" width="400"> (1900) by Laure Brouardel <br><br> From the <a href=\'https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/exposition-de-1900-le-pont-de-l-alma#infos-principales\'>Paris Musees</a>.',
  [spui]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/522659ldsdl.jpg?v=1707389465618" class="center" title="The so-called Boerenverdriet on the Spui, Amsterdam" width="400"> (1750-81) by Jan Ekels <br><br> From the <a href=\'https://www.rijksmuseum.nl/en/collection/SK-A-3475\'>Rijksmuseum</a>.',
  [caer]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/523825ldsdl.jpg?v=1707390682665" class="center" title="Landscape with ships in front of Caernarvon Castle" width="400"> (1883) by William Callow <br><br> From the <a href=\'https://www.rijksmuseum.nl/nl/collectie/RP-T-1978-4\'>Rijksmuseum</a>.',
  [bow]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/529900ldsdl.jpg?v=1707486007718" class="center" title="Street Scene at Stratford by Bow" width="400"> (c1850) by Thomas Shotter Boys <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:12506\'>Yale Center for British Art</a>.',
  [quila]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/506362ldsdl.jpg?v=1707486565361" class="center" title="Inside the Main Entrance of the Purana Qila, Delhi" width="400"> (1823) by Robert Smith <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:306\'>Yale Center for British Art</a>.',
  [concorde]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Concorde_tempel_binnen_muren_van_oude_Agrigentum_Temple_de_la_Concorde_dans_l\'enceinte_de_l\'ancien_Agrigentum_(titel_op_object)_Voyage_en_Italie%2C_en_Sicile_et_%C3%A0_Malte_-_1778_(serietitel)%2C_RP-T-00-494-39.jpg?v=1707573062931" class="center" title="Concorde temple within walls of ancient Agrigentum" width="400"> (1778) by Louis Ducros <br><br> From the <a href=\'https://www.rijksmuseum.nl/nl/collectie/RP-T-00-494-39\'>Rijksmuseum</a>.',
  [chase]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/A_Landscape_with_Curragh_Chase%2C_County_Limerick_P7338.jpg?v=1707573809488" class="center" title="A Landscape with Curragh Chase, County Limerick" width="400"> (1834) by Jeremiah Hodges Mulcahy <br><br> From the <a href=\'https://www.nationalgallery.ie/\'>National Gallery of Ireland</a>.',
  [slottet]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1280px-F._S%C3%B8dring_-_Slottet_B%C3%BCresheim_ved_Eifelfloden_-_KMS345_-_Statens_Museum_for_Kunst.jpg?v=1707663223362" class="center" title="Büresheim Castle on the Eifel River" width="400"> (1838) by Frederik Sødring <br><br> From the <a href=\'https://open.smk.dk/artwork/image/KMS345\'>Statens Museum for Kunst</a>.',
  [chaff]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1851-christian_georg_schutz_elder-view_aschaffenburg-1786.png?v=1707665239213" class="center" title="View of Aschaffenburg" width="400"> (1786) by Christian Georg Schütz the elder <br><br> From the <a href=\'https://sammlung.staedelmuseum.de/en/work/view-of-aschaffenburg\'>Städel Museum</a>.',
  [lilles]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/ycba_2d1b6023-0768-4ce1-9a5b-4eb8b668036e.jpg?v=1707751554710" class="center" title="Lilleshall, Shropshire: View of the North Entrance and of the West Front" width="400"> (1826) by Sir Jeffry Wyatville <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:6270\'>Yale Center for British Art</a>.',
  [scharf]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/528537ldsdl%20(1).jpg?v=1707753073113" class="center" title="Burg Scharfenberg at Night" width="400"> (1827) by Ernst Ferdinand Oehme <br><br> From the <a href=\'https://recherche.smb.museum/detail/961104/burg-scharfenberg-bei-nacht?language=de&question=Burg+Scharfenberg+at+Night&limit=15&sort=relevance&controls=none&collectionKey=NG*&collectionKey=NGAlteNationalgalerie&objIdx=0\'>State Museums in Berlin</a>.',
  [marys]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Krakow.jpg?v=1707817271491" class="center" title="St Mary\'s Church in Krakow" width="400"> (1900) by Wawrzeniecki, Marian <br><br> From the <a href=\'https://zbiory.mnk.pl/en/catalog/409216\'>National Museum in Krakow</a>.',
  [spinner]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Spinnerin_am_Kreuz_1831.jpg?v=1707818279103" class="center" title="Die Spinnerin am Kreuz mit Aussicht gegen das Mödlinger Gebirge" width="400"> (1831) by Franz Scheyerer <br><br> From the <a href=\'https://sammlung.wienmuseum.at/en/object/129254-die-spinnerin-am-kreuz-mit-aussicht-gegen-das-moedlinger-gebirge/\'>Wein Museum</a>.',
  [grote]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/524647ldsdl.jpg?v=1707914519917" class="center" title="Street Scene in Beverwijk" width="400"> (1793) by Jacob Cats <br><br> From the <a href=\'https://www.rijksmuseum.nl/nl/collectie/RP-T-1964-58\'>Rijksmuseum</a>.',
  [harf]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/540933ldsdl.jpg?v=1707915366037" class="center" title="Harfleur near Le Havre (view of Saint Martin)" width="400"> (1836) by Johann Wilhelm Schirmer <br><br> From the <a href=\'https://www.kunsthalle-karlsruhe.de/kunstwerke/Johann-Wilhelm-Schirmer/Harfleur-bei-Le-Havre--Blick-auf-Saint-Martin/17CA36184EC0CEB5E0B20A8EB7AD7C9D/\'>Staatliche Kunsthalle Karlsruhe</a>.',
  [oude]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/0868_repro.jpg?v=1708022385046" class="center" title="View of Oudezijds Voorburgwal with the Oude Kerk in Amsterdam" width="400"> (1670) by Jan van der Heyden <br><br> From the <a href=\'https://www.mauritshuis.nl/en/our-collection/artworks/868-view-of-oudezijds-voorburgwal-with-the-oude-kerk-in-amsterdam/\'>Mauritshuis</a>.',
  [christ]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/canterbury.jpg?v=1708023093109" class="center" title="Christ Church Gate, Canterbury" width="400"> (1793) by J. M. W. Turner <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:2135\'>Yale Center for British Art</a>.',
  [pope]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/pope.jpg?v=1708091533144" class="center" title="A View of Alexander Pope\'s Villa, Twickenham, on the Banks of the Thames" width="400"> (1759) by Samuel Scott  <br><br> From the <a href=\'https://www.denverartmuseum.org/en\'>Denver Art Museum</a>.',
  [bavo]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/535937ldsdl.jpg?v=1708092926604" class="center" title="St Bavo’s Cathedral and the Reep in Ghent" width="400"> (1831) by Pieter-Frans De Noter  <br><br> From the <a href=\'https://www.mskgent.be/en/collection/1975-U\'>Museum of Fine Arts Ghent</a>.',
  [bogor]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/523056ldsdl.jpg?v=1708346663372" class="center" title="Rear View of Buitenzorg Palace before the Earthquake of 10 October 1834" width="400"> (1834) by Willem Troost the younger <br><br> From the <a href=\'https://www.rijksmuseum.nl/en/collection/SK-A-4024\'>Rijksmusuem</a>.',
  [harm]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/524700ldsdl.jpg?v=1708348679310" class="center" title="View in the village of Harmelen" width="400"> (1749) by Jan de Beijer <br><br> From the <a href=\'https://www.rijksmuseum.nl/nl/collectie/RP-T-1890-A-2264\'>Rijksmusuem</a>.',
  [doge]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/515581ldsdl.jpg?v=1708426275102" class="center" title="Courtyard of the Doge\'s Palace" width="400"> (1810) by Tranquillo Orsi <br><br> From the <a href=\'https://www.khm.at/\'>Kunsthistorisches Museum</a>.',
  [durham]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/539216ldsdl.jpg?v=1708427005666" class="center" title="Durham Cathedral" width="400"> (1846) by George Arthur Fripp <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:9261\'>Yale Center for British Art</a>.',
  [august]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Thomas_Fearnley_-_The_Augustusbr%C3%BCcke_in_Dresden_-_Augustusbr%C3%BCcke_i_Dresden_-_Nasjonalmuseet_-_NG.M.02218.jpg?v=1708520312943" class="center" title="The Augustusbrücke in Dresden" width="400"> (1829) by Thomas Fearnley <br><br> From the <a href=\'https://www.nasjonalmuseet.no/en/collection/object/NG.M.02218\'>National Museum Norway</a>.',
  [memlook]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1024px-Tombs_of_the_Memlooks%2C_Cairo-David_Roberts.jpg?v=1708523820738" class="center" title="Tombs of the Memlooks, Cairo" width="400"> (1838) by David Roberts <br><br> From the <a href=\'https://loc.gov/pictures/resource/cph.3g04057/\'>Library of Congress</a>.',
  [oxford]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/oxford.jpg?v=1708594539435" class="center" title="High Street, Oxford (Queen\'s College)" width="400"> (1798) by Thomas Malton the Younger <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:1535\'>Yale Center for British Art</a>.',
  [lincoln]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/lincoln.jpg?v=1708595064360" class="center" title="A View of the Cathedral and City of Lincoln from the River" width="400"> (1760) by Joseph Baker of Lincoln <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:364\'>Yale Center for British Art</a>.',
  [pantheon]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/508157ldsdl.jpg?v=1708699017041" class="center" title="The Pantheon" width="400"> (c1800) by Victor Jean Nicolle  <br><br> From the <a href=\'https://www.nga.gov/collection/art-object-page.143894.html\'>National Gallery of Art</a>.',
  [singel]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/522462ldsdl.jpg?v=1708699899144" class="center" title="The Singel Bridge at the Paleisstraat in Amsterdam" width="400"> (1898) by George Hendrik Breitner  <br><br> From the <a href=\'https://www.rijksmuseum.nl/en/collection/SK-A-3580\'>Rijksmuseum</a>.',
  [moret]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/508369ldsdl.jpg?v=1708784497057" class="center" title="Le Pont de Moret" width="400"> (1888) by Alfred Sisley <br><br> From the <a href=\'https://collections.artsmia.org/art/61319/le-pont-de-moret-alfred-sisley\'>Minneapolis Institute of Art</a>.',
  [briar]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Henri-Joseph_Harpignies_-_The_Railroad_Bridge_at_Briare_-_Google_Art_Project.jpg?v=1708850943797" class="center" title="The Railroad Bridge at Briare" width="400"> (c1900) by Joseph Harpignies <br><br> From the <a href=\'https://philbrook.org/\'>Philbrook Museum of Art</a>.',
  [rotund]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/542009ldsdl.jpg?v=1708851927658" class="center" title="At Barrière de la Villette, Paris" width="400"> (1823) by Auguste Xavier Leprince <br><br> From the <a href=\'https://collection.nationalmuseum.se/eMP/eMuseumPlus?service=ExternalInterface&module=collection&objectId=181922&viewType=detailView\'>Nationalmuseum</a>.',
  [bocca]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/503938ldsdl.jpg?v=1708935872233" class="center" title="Piazza della Bocca della Verità with the so-called Vesta Temple in Rome" width="400"> (1837) by Constantin Hansen <br><br> From the <a href=\'https://open.smk.dk/artwork/image/kms1072\'>Statens Museum for Kunst</a>.',
  [port]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/port.jpeg?v=1708937213881" class="center" title="The Harbor of Granatello near Portici with Vesuvius in the background" width="400"> (1819) by Joseph Rebell <br><br> From the <a href=\'https://sammlung.belvedere.at/objects/7948/der-hafen-granatello-bei-portici-mit-dem-vesuv-im-hintergrun\'>Belvedere</a>.',
  [rat]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/514641ldsdl.jpg?v=1709112569104" class="center" title="Das Rathaus in Gmunden" width="400"> (1860) by Rudolf von Alt <br><br> From the <a href=\'https://sammlung.belvedere.at/objects/6770/das-rathaus-in-gmunden\'>Belvedere</a>.',
  [rue]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/rue.jpg?v=1709200273166" class="center" title="La rue de Castiglione" width="400"> (1829) by Canella, Giuseppe  <br><br> From the <a href=\'https://www.parismuseescollections.paris.fr/en/node/151547#infos-principales\'>Paris Musées</a>.',
  [cambridge]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/cambridge.jpg?v=1709308051496" class="center" title="King\'s Parade, Cambridge" width="400"> (1798) by Thomas Malton the Younger  <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:1534\'>Yale Center for British Art</a>.',
  [rainy]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/509407ldsdl.jpg?v=1709310044773" class="center" title="Rainy Evening on Hennepin Avenue" width="400"> (1902) by Robert Koehler  <br><br> From the <a href=\'https://collections.artsmia.org/art/303/rainy-evening-on-hennepin-avenue-robert-koehler\'>Minneapolis Institute of Art</a>.',
  [haarlem]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/haarlem.jpeg?v=1709373071276" class="center" title="Haarlem City hall with figures on the Grote markt" width="400"> (1671) by Gerrit Adriaensz Berckheyde  <br><br> From the <a href=\'https://www.franshalsmuseum.nl/nl/verdiep/collectie/\'>Frans Hals Museum</a>.',
  [brew]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/brew.jpg?v=1709374240664" class="center" title="View of the Bakenessergracht with the Passer-en-Valk Brewery" width="400"> (1662) by Gerrit Berckheyde  <br><br> From the <a href=\'https://www.franshalsmuseum.nl/nl/art/gezicht-op-de-bakenessergracht-met-de-brouwerij-de-passer-en-de-valk/\'>Frans Hals Museum</a>.',
  [grapes]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/530688ldsdl.jpg?v=1709453767347" class="center" title="A Game of Bowls on the Bowling Green Outside the Bunch of Grapes Inn, Hurst, Berkshire" width="400"> (undated 1746–1801) by Michael Angelo Rooker  <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:47374\'>Yale Center for British Art</a>.',
  [lviv]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/lviv.jpg?v=1709456364054" class="center" title="Fair before Easter at the Bernardine square in Lviv in 1895" width="400"> (1895) by Tadeusz Rybkowski  <br><br> From the <a href=\'https://cyfrowe.mnw.art.pl/en/catalog/444862\'>National Museum in Warsaw</a>.',
  [plac]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/530671ldsdl.jpg?v=1709566703610" class="center" title="Krasiński Square and the Piarist church" width="400"> (1830) by Marcin Zaleski  <br><br> From the <a href=\'https://cyfrowe.mnw.art.pl/en/catalog/445903\'>National Museum in Warsaw</a>.',
  [myse]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Warsaw.jpg?v=1709567359087" class="center" title="Myślewicki Palace in Warsaw" width="400"> (c1870) by Marcin Zaleski  <br><br> From the <a href=\'https://cyfrowe.mnw.art.pl/en/catalog/447881\'>National Museum in Warsaw</a>.',
  [amalfi]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/KMS8884.jpg?v=1709636806531" class="center" title="View of the Square in Amalfi" width="400"> (1835) by Martinus Rørbye  <br><br> From the <a href=\'https://open.smk.dk/en/artwork/image/KMS8884\'>Statens Museum for Kunst</a>.',
  [llyon]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/505137ldsdl.jpg?v=1709737327745" class="center" title="Vue du pont de la Guillotière à Lyon" width="400"> (1760) by Jean-Jacques de Boissieu  <br><br> From the <a href=\'https://sammlung.staedelmuseum.de/en/work/vue-du-pont-de-la-guillotiere-a-lyon\'>Städel Museum</a>.',
  [navona]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/navona.png?v=1709738127811" class="center" title="Roman Market Scene in the Piazza Navona" width="400"> (1657) by Johannes Lingelbach <br><br> From the <a href=\'https://sammlung.staedelmuseum.de/en/work/roman-market-scene-in-the-piazza-navona\'>Städel Museum</a>.',
  [asch]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/asch.png?v=1709803636441" class="center" title="View of Aschaffenburg" width="400"> (1786) by Christian Georg Schütz the Elder <br><br> From the <a href=\'https://sammlung.staedelmuseum.de/en/work/view-of-aschaffenburg\'>Städel Museum</a>.',
  [binn]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/binn.jpg?v=1709805806407" class="center" title="View of the Binnenhof, The Hague" width="400"> (1690) by Gerrit Berckheyde <br><br> From the <a href=\'https://www.museothyssen.org/en/collection/artists/berckheyde-gerrit-adriaensz/view-binnenhof-hague\'>Museo Nacional Thyssen-Bornemisza</a>.',
  [bello]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/bellotto.jpg?v=1709807028021" class="center" title="Church of the Holy Cross in Warsaw" width="400"> (1778) by Bernardo Bellotto <br><br> From the <a href=\'https://kolekcja.zamek-krolewski.pl/en/obiekt-346-church-holy-cross\'>National Museum in Warsaw</a>.',
  [column]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/View%20from%20the%20Castle%20Square%20towards%20Krakowskie%20Przedmie%C5%9Bcie.jpg?v=1709912269007" class="center" title="View from the Castle Square towards Krakowskie Przedmieście" width="400"> (C19th) by Filip Romanowski <br><br> From the <a href=\'https://cyfrowe.mnw.art.pl/en/catalog/440455\'>National Museum in Warsaw</a>.',
  [prou]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/513102ldsdl.jpg?v=1709993959043" class="center" title="La rue des Prouvaires et l’église Saint-Eustache" width="400"> (1828) by Giuseppe Canella <br><br> From the <a href=\'https://parismuseescollections.paris.fr/en/node/151535#infos-principales\'>Paris Musées</a>.',
  [admiral]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/539561ldsdl.jpg?v=1710171387673" class="center" title="The Admiral House, Simon’s Town, Cape of Good Hope (1844) by Lt. Humphrey John Julian" width="400"> (1844) by Lt. Humphrey John Julian <br><br> From the <a href=\'https://collections.britishart.yale.edu/catalog/tms:10760\'>Yale Center for British Art</a>.',
  [geyser]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/531291ldsdl.jpg?v=1710172038815" class="center" title="The Castle Geyser, Upper Geyser Basin, Yellowstone National Park" width="400"> (1874) by Thomas Moran <br><br> From the <a href=\'https://www.cartermuseum.org/collection/castle-geyser-upper-geyser-basin-yellowstone-national-park-1971592\'>Amon Carter Museum of American Art</a>.',
  [kastel]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/542167ldsdl.jpg?v=1710240732613" class="center" title="View of ‘Kastellet’, Copenhagen" width="400"> (1890) by Johan Rohde <br><br> From the <a href=\'https://emp-web-84.zetcom.ch/eMP/eMuseumPlus?service=ExternalInterface&module=collection&objectId=19757&viewType=detailView\'>National Museum</a>.',
  [akard]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/911464absdl.jpg?v=1710241728000" class="center" title="South Akard Street" width="400"> (1932) by Lloyd Sargent <br><br> From the <a href=\'https://www.dma.org/art/collection/object/3149188\'>Dallas Museum of Art</a>.',
  [roros]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/513156ldsdl.jpg?v=1710326532129" class="center" title="Street in Røros in Winter" width="400"> (1903) by Harald Sohlberg <br><br> From the <a href=\'https://www.nasjonalmuseet.no/en/collection/object/NG.M.00882\'>Nasjonalmuseet Norway</a>.',
  [monet]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/528472ldsdl.jpg?v=1711536304970" class="center" title="St. Germain l’Auxerrois" width="400"> (1867) by Claude Monet <br><br> From the <a href=\'https://www.smb.museum/en/home/\'>Staatliche Museen zu Berlin</a>.',
  [delft]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/980px-Jan_van_der_Heyden_-_View_of_the_Oude_Delft_Canal%2C_Delft_-_48.218_-_Detroit_Institute_of_Arts.jpg?v=1713715874720" class="center" title="View of the Oude Delft Canal, Delft" width="400"> (1660) by Jan van der Heyden <br><br> From the <a href=\'https://dia.org/\'>Detroit Institute of Art</a>.',
  [narni]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Le_pont_de_Narni_-_Jean-Baptiste_Camille_Corot_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1613.jpg?v=1714415121513" class="center" title="Le pont de Narni" width="400"> (1826) by Jean-Baptiste Camille Corot <br><br> From the <a href=\'https://collections.louvre.fr/en/ark:/53355/cl010064102\'>The Louvre</a>.',
  [flatford]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/haywain.jpg?v=1714415880431" class="center" title="The Hay Wain" width="400"> (1821) by John Constable <br><br> From the <a href=\'https://www.nationalgallery.org.uk/paintings/john-constable-the-hay-wain/\'>The National Gallery</a>.',
  [goyen]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Goyen_1643_Paisaje_invernal_con_figuras_en_el_hielo.jpg?v=1714416698230" class="center" title="Winter Landscape With Figures On Ice" width="400"> (1643) by Jan van Goyen <br><br> From the <a href=\'https://www.museothyssen.org/en/collection/artists/goyen-jan-josephsz-van/winter-landscape-figures-ice\'>Thyssen-Bornemisza National Museum</a>.',
  [monceau]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1024px-Claude_Monet_-_Landscape%2C_The_Parc_Monceau.jpg?v=1714417199170" class="center" title="Landscape, The Parc Monceau" width="400"> (1876) by Claude Monet <br><br> From the <a href=\'https://www.metmuseum.org/art/collection/search/110001554\'>The Met</a>.',
  [granite]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1024px-1831Hummel_Granitschale_im_Lustgarten_anagoria.jpeg?v=1715416053794" class="center" title="The Granite Dish in the Berlin Lustgarten" width="400"> (1831) by Johann Erdmann Hummel <br><br> From the <a href=\'https://www.smb.museum/home/\'>Old National Gallery, Berlin</a>.',
  [entry]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Charles_Meynier_-_Napoleon_in_Berlin.png?v=1715416948434" class="center" title="Entry of Napoleon I into Berlin" width="400"> (1810) by Charles Meynier <br><br> From the <a href=\'https://en.chateauversailles.fr/\'>Palace of Versailles</a>.',
  [crownprince]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1839_Bruecke_Parade_vor_dem_Koeniglichen_Palais_anagoria.JPG?v=1715871916737" class="center" title="Parade Before the Crown Prince\'s Palace" width="400"> (1839) by Wilhelm Brücke  <br><br> From the <a href=\'https://www.stadtmuseum.de/museum/maerkisches-museum\'>Märkisches Museum</a>.',
  [change]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/1280px-Giuseppe_Canella_-_Le_march%C3%A9_aux_fleurs%2C_la_Tour_de_l\'Horloge%2C_le_Pont_au_Change_et_le_Pont-Neuf_-_P1910_-_Mus%C3%A9e_Carnavalet.jpg?v=1717233213130" class="center" title="The flower market, the Clock Tower, the Pont au Change and the Pont-Neuf" width="400"> (1832) by Giuseppe Canella  <br><br> From the <a href=\'https://www.parismuseescollections.paris.fr/en/musee-carnavalet/oeuvres/le-marche-aux-fleurs-la-tour-de-l-horloge-le-pont-au-change-et-le-pont-neuf\'>Carnival Museum</a>.',
  [starrynight]:
    '<img src="https://cdn.glitch.global/f4cb3da3-e38f-4c57-8538-cd16160b85b3/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?v=1717254521878" class="center" title="Starry Night" width="400"> (1888) by Vincent van Gogh <br><br> From the <a href=\'https://www.musee-orsay.fr/en\'>Musée d\'Orsay</a>.',
};


// Start the game with all reference points

function toPlay() {
  playbutton.remove();
  const shuffledEntries = [
    strand,
    down,
    museum,
    york,
    brompton,
    william,
    mark,
    marys,
    kent,
    marl,
    molle,
    jatte,
    fuji,
    five,
    granada,
    bruton,
    warwick,
    huis,
    washington,
    molo,
    porte,
    matterhorn,
    center,
    reine,
    stage,
    berlin,
    rialto,
    lady,
    ely,
    italiens,
    etretat,
    parth,
    padua,
    munich,
    forum,
    teatro,
    taj,
    capitol,
    marly,
    egmond,
    erupt,
    hart,
    tour,
    rouen,
    pirna,
    sitka,
    coto,
    antwerp,
    windsor,
    rock,
    florence,
    custom,
    brooklyn,
    alkmaar,
    ghent,
    golden,
    ruins,
    ranger,
    santa,
    old,
    founding,
    compton,
    eichhorn,
    saint,
    notre,
    manhattan,
    karls,
    persen,
    wells,
    bright,
    oxford,
    prague,
    bayisland,
    rathaus,
    damplatz,
    segovia,
    vyborg,
    cape,
    vilnius,
    princes,
    trakai,
    palace,
    alma,
    spui,
    caer,
    bow,
    quila,
    concorde,
    chase,
    slottet,
    chaff,
    lilles,
    scharf,
    marys,
    spinner,
    grote,
    harf,
    oude,
    christ,
    pope,
    bavo,
    bogor,
    harm,
    doge,
    durham,
    august,
    memlook,
    oxford,
    lincoln,
    pantheon,
    singel,
    moret,
    briar,
    rotund,
    bocca,
    port,
    rat,
    rue,
    cambridge,
    rainy,
    haarlem,
    brew,
    grapes,
    lviv,
    plac,
    myse,
    amalfi,
    llyon,
    navona,
    asch,
    binn,
    bello,
    column,
    prou,
    admiral,
    geyser,
    kastel,
    akard,
    roros,
    monet,
    delft,
    narni,
    flatford,
    goyen,
    monceau,
    granite,
    entry,
    crownprince,
    change,
    starrynight,
  ]
    //select 5 random pictures
    .slice()
    .sort(() => Math.random() - 0.5); // Shuffle using Fisher-Yates
  const randomEntries = shuffledEntries.slice(0, 5);

  generateAndPlay(randomEntries);
  myDiv.innerHTML = "Click on the map";
}

function addMarkers(map) {
  var markers = [
    strand,
    manhattan,
    down,
    museum,
    york,
    brompton,
    william,
    mark,
    marys,
    kent,
    marl,
    molle,
    jatte,
    fuji,
    five,
    granada,
    bruton,
    warwick,
    huis,
    washington,
    molo,
    porte,
    matterhorn,
    center,
    reine,
    stage,
    berlin,
    rialto,
    lady,
    ely,
    italiens,
    etretat,
    parth,
    padua,
    munich,
    forum,
    teatro,
    taj,
    capitol,
    marly,
    egmond,
    erupt,
    hart,
    tour,
    rouen,
    pirna,
    sitka,
    coto,
    antwerp,
    windsor,
    rock,
    florence,
    custom,
    brooklyn,
    alkmaar,
    ghent,
    golden,
    ruins,
    ranger,
    santa,
    old,
    founding,
    compton,
    eichhorn,
    saint,
    notre,
    karls,
    persen,
    wells,
    bright,
    oxford,
    prague,
    bayisland,
    rathaus,
    damplatz,
    segovia,
    vyborg,
    cape,
    vilnius,
    princes,
    trakai,
    palace,
    alma,
    spui,
    caer,
    bow,
    quila,
    concorde,
    chase,
    slottet,
    chaff,
    lilles,
    scharf,
    marys,
    spinner,
    grote,
    harf,
    oude,
    christ,
    pope,
    bavo,
    bogor,
    harm,
    doge,
    durham,
    august,
    memlook,
    oxford,
    lincoln,
    pantheon,
    singel,
    moret,
    briar,
    rotund,
    bocca,
    port,
    rat,
    rue,
    cambridge,
    rainy,
    haarlem,
    brew,
    grapes,
    lviv,
    plac,
    myse,
    amalfi,
    llyon,
    navona,
    asch,
    binn,
    bello,
    column,
    prou,
    admiral,
    geyser,
    kastel,
    akard,
    roros,
    monet,
    delft,
    narni,
    flatford,
    goyen,
    monceau,
    granite,
    entry,
    crownprince,
    change,
    starrynight
  ];

  for (var i = 0; i < markers.length; i++) {
    var marker = L.marker(markers[i], {
      icon: greenIcon,
      referencePoint: markers[i]
    });

    marker.addTo(map).on('click', function() {
      var markerKey = this.options.referencePoint;
      var correctContent = stationInfo[markerKey];
      document.getElementById('ghostinfo').innerHTML = correctContent + '<br>';
    });
  }
}

var mapSequence = [];

document.addEventListener("keydown", function (event) {
  mapSequence.push(event.key);

  if (mapSequence.length === 3 && mapSequence.join("") === "map") {
    event.preventDefault();
    mapSequence = [];
    addMarkers(map);
  } else if (mapSequence.length > 3) {
    mapSequence = [];
  }
});
