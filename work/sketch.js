var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiamFpbnNhbWJoYXYiLCJhIjoiY2owemxzZ2U5MDJ3NTMzbmRvM2VhNzh4NCJ9.iow5ndDJhHY12A4weN3ttw'
}).addTo(mymap);


    
