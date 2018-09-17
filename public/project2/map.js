// import { data } from '../data.json';

var mymap = L.map('mapbox').setView([1.148098, 104.020353], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicXVhbmdodSIsImEiOiJjam01enlnNzcyMGFjM3JteTE2ejU5aXE4In0.ihkp_PrrjZZo8yzAMoEbLQ'
}).addTo(mymap);
var markers = {
    "type": "Feature",
    "features" : [
        {
            "type": "Feature",
            "properties": {
                "name": "Restoran Golden Prawn",
                "marker-color": "#0000ff",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEs1eY5Kvf5ppxA4vp6b2_6mvpYfysqrBu4hXRmVmMh4R8cb9N",
                "address" : "Jalan Golden Prawn, Tj. Buntung, Bengkong, Kota Batam, Kepulauan Riau 29458",
                "phone" : "(0778) 411142"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.037448, 1.160187 
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Restoran Pondok Batam Kuring",
                "marker-color": "#0000ff",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyBgue7daO8bXJvyrP_L_zeHDikQUwX0mb3rUY2TJFVn9GxIY",
                "address" : "Jl. Prambanan No.40, Sungai Jodoh, Batu Ampar, Kota Batam, Kepulauan Riau 29444",
                "phone" : "(0778) 456652"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.008306, 1.153502
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Sate Domba Muda",
                "marker-color": "#0000ff",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zDe86V2LM1as8ZJGD46liI7-h2K2zqRDQl3xDd8x2xkcBD_A",
                "address" : "Jl. Raja H. Fisabilillah No.31H, Tlk. Tering, Batam Kota, Kota Batam, Kepulauan Riau 29444",
                "phone" : ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.041487, 1.132171
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "King Sate",
                "marker-color": "#0000ff",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqN3NIWM3BwXQK_HcKp6VKqLFRRk5Xm9UFjJWJ3QIR1JJj8PJwg",
                "address" : "Jl. Teuku Umar, Lubuk Baja Kota, Lubuk Baja, Kota Batam, Kepulauan Riau 29444",
                "phone" : ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.017345, 1.144785
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Sate Asih",
                "marker-color": "#0000ff",
                "image" : "http://3.bp.blogspot.com/-kxvHV4_gmok/TbaQ85A_NPI/AAAAAAAAAA4/WIQSsQdWBIs/s1600/IMG00481-20110426-1217.jpg",
                "address" : "Jl. Bengkong Harapan 1 No.63, Bengkong Indah, Bengkong, Kota Batam, Kepulauan Riau 29444",
                "phone" : "(0778) 421866"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.026353, 1.150585
                ]
            }
        }
    ]
};

createPopupContent = (feature) => {
    var html = '<div class="popup_content">';
    html += '<div class="popup_image"><img src="'+feature.properties.image+'" alt="" class="img-responsive"></div>';
    html += '<div class="popup_name">';
    html += '<p> <b>Nama Restoran : </b>'+feature.properties.name+'</p>';
    html += '<p> <b>Alamat Restoran : </b>'+feature.properties.address+'</p>';
    html += '<p> <b>Telp Restoran : </b>'+feature.properties.phone+'</p>';
    html += '</div>';
    html += '</div>'; 
	return html;
}
queryMarker = (feature, layer) => {
    layer.bindPopup(createPopupContent(feature));
}
L.geoJSON(markers, {
    onEachFeature: queryMarker
}).addTo(mymap);
