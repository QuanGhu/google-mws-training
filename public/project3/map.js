function findLocation(x,y) {
    // console.log(x,y);
    for (var i=0; i< places.length;i++) {
        if (places[i].lokasi[0]==x &&
        places[i].lokasi[1]==y) {
            return i;
        }
    }
    return -1;
}
function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+e.latlng.lng);
    let ix= findLocation(e.latlng.lat,e.latlng.lng);
    if (ix >=0) {
        document.getElementById("gmb").innerHTML = generateImage(places[ix].gambar);
        document.getElementById("review").innerHTML = generateReview(places[ix]);
    }
}

generateImage = (data) => {
    var html = '<img src="'+data+'" alt="" class="img-responsive"></div>';
    return html;
}

generateReview = (data) => {
    var html = '<p><b>Nama Restorant :</b>' +data.sponsor+ '</p>';
    html += '<p> <b>Review Restoran : </b>'+data.review+'</p>';
    return html;
}

(async function (){
    const jsondata = "../data/places.json";
    try {
        let res= await(fetch(jsondata));
        let result= await res.json();
        localStorage.setItem('places',
        JSON.stringify(result.places));//
    }
    catch(err){
        console.log(err);
    }
})( );

let places = JSON.parse(localStorage.getItem('places'));

for (var p of places) {
 var marker= L.marker(p.lokasi).addTo(mymap)
 .bindPopup(p.sponsor);
 marker.on('click', showLocation);
}