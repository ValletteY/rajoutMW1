mapboxgl.accessToken = 'pk.eyJ1IjoidmFsbGV0dGV5IiwiYSI6ImNrdTJ5dXpsNTF6NHAydnFoZjFtdDI2YmIifQ.0xSLRFQO6OKUBHnonqzVGw'; 
//attention c'est  mon token YVallette. Il en faudrait un pour le lycée je pense. pour l'utilisation de leur API Opensource
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [2.49079, 48.8472],    //centrage de la carte sur le lycée Louis Armand
    zoom: 17
});

// Ajout de marquage
for (const { geometry, properties } of donnees.features) {  //décriptage de chaque features dans le fichier de données
const el = document.createElement('div');   // création d'un élément (div) pour chaque marqueur

//modification du style par validation
if (properties.validation == true) 
{ el.className = 'marker_g'; }
else if ((properties.validation == false))
{ el.className = 'marker_r'; }

//appel de fonctions mapboxgl cf ligne 7 & 8
new mapboxgl.Marker(el)
    .setLngLat(geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })                              // ajout de popup
    .setHTML(`<h3>${properties.title}</h3><p>${properties.description}</p>`)) // définition du contenue le popup
    .addTo(map);                                                              // envoi du marquage pour chaque point
}