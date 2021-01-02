//var button = document.getElementById('los'); 
//button.addEventListener ('click', ermittlePosition);

const points = [
  {
		name: "Sparkasse",
		lat: 52.149446,
		long: 7.335461,
        img: "Bilder/Sparkasse.jpeg"
	},
    {
		name: "Schloss",
		lat: 52.146394,
		long: 7.342133,
        img: "Bilder/06a. Stadteinfahrt heute.jpg"
	},
    {
		name: "Marktplatz",
		lat: 52.1473916,
		long: 7.3397181,
        img: "Bilder/Marktplatz.jpeg"
	},
    {
		name: "Altes Landratsamt",
		lat:  52.1500538,
		long: 7.3384414,
        img: "Bilder/Altes Landratsamt.jpeg"
	},
    {
        name:"Baustelle",
        lat: 52.1500062,
        long: 7.3418592,
        img: "Bilder/Baustelle.jpeg"
    },
    {
        name:"TÃ¼rkeifoto",
        lat: 52.145906,
        long: 7.339314,
        img: "Bilder/TÃ¼rkeifoto.jpeg"
    }

];
var ausgabe = document.getElementById('ausgabe');
let initialized = false;
const map = L.map('karte');
let marker = null;

ermittlePosition();

var i;
for (i = 0; i < points.length; i++) { 
    let point = points[i];
    const mark = L.marker([point.lat, point.long]);
    //mark.addTo(map).on("click",anzeigen);
    var circle = L.circleMarker([point.lat, point.long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
    }).addTo(map).on("click", anzeigen);
    var popup = L.popup()
        .setLatLng([point.lat, point.long])
        .setContent(`<h1>${point.name}</h1><img src="${point.img}"/>`)
    circle.bindPopup(popup);  
}

  


function anzeigen(){
    popup.openOn(map);
    console.log("test")
}


function ermittlePosition() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(zeigePosition);
        
    } else { 
        ausgabe.innerHTML = 'Ihr Browser unterstÃƒÂ¼tzt keine Geolocation.';
    }
}

function zeigePosition(position) {
    ausgabe.innerHTML = "Ihre Koordinaten sind:<br> Breite: " + position.coords.latitude + "<br>LÃ¤nge: " + position.coords.longitude;	
    // Positionierung
    if (!initialized) {
        map.setView([position.coords.latitude,position.coords.longitude], 15);
        // Kartenmaterial laden
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //'attribution':  'Kartendaten &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende',
        'useCache': true
        }).addTo(map);
        initialized = true;
        marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
        var polylinePoints = [
            new L.LatLng(52.145906, 7.339314),
            new L.LatLng(52.149446, 7.335461),
            new L.LatLng(52.1473916, 7.3397181),
            new L.LatLng(52.146394, 7.342133),
            new L.LatLng(52.1500538, 7.3384414),
            new L.LatLng(52.1500062, 7.3418592),
            
            
         ];
        
    
         
         var polylineOptions = {
               color: 'blue',
               weight: 6,
               opacity: 0.9
             };

         var polyline = new L.Polyline(polylinePoints, polylineOptions);

         map.addLayer(polyline);                        

         // zoom the map to the polyline
         map.fitBounds(polyline.getBounds());
        

    
    // Marker setzen
    marker.setLatLng([position.coords.latitude, position.coords.longitude]);
    }
    
}