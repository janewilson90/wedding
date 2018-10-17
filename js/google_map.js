
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng = new google.maps.LatLng(56.433057, -3.253631);
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Fingask Castle, Rait, Perth PH2 7SA'];

    var contentString = '<div id="content">'+
            '<div id="FingaskInfo">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Fingask Castle</h1>'+
            '<div id="bodyContent">'+
            '<p> Fingask is a traditional rural estate of 240 acres nestling ' +
            'in the hills above the main road between Perth & Dundee. '+
            'The Threiplands of Fingask were famed int he 18th and 19th centuries for '+
            'their hospitality. The present Threiplands believe that if human happiness '+
            'is possible it can be found in family life, so they are delighted to welcome '+
            'wedding parties and gatherings of all sorts to this magic place. '+
            '<p><a target="_blank" href="https://www.google.co.uk/maps/place/Fingask+Castle/@56.4330661,-3.2558053,17z/data=!3m1!4b1!4m5!3m4!1s0x48863f4db050db23:0xd3e254d2e5e9ab20!8m2!3d56.4330632!4d-3.2536166">'+
            'Open in GoogleMaps</a></p>'+
            '</div>'+
            '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var image = '../images/loc.png';
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        title: 'Click for more info'
      });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
        map.setCenter(marker.getPosition());
    });

    // for (var x = 0; x < addresses.length; x++) {
    //     $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
    //         var p = data.results[0].geometry.location
    //         var latlng = new google.maps.LatLng(p.lat, p.lng);
    //         new google.maps.Marker({
    //             position: latlng,
    //             map: map,
    //             icon: '../images/loc.png'
    //         });

    //     });
    // }
    
}
google.maps.event.addDomListener(window, 'load', init);