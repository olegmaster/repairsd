var map;
var markerSearch;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.705, lng: -117.842},
        zoom: 10,
        gestureHandling: 'cooperative',
        disableDefaultUI: true,
        styles: [
            {"featureType": "administrative","elementType": "all","stylers": [{"hue": "#ff0000"}]},
            {"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#444444"}]},
            {"featureType": "administrative.country","elementType": "all","stylers": [
                    {"visibility": "on"},
                    {"color": "#00beff"},
                    {"weight": "0.01"}
                ]},
            {"featureType": "landscape","elementType": "all","stylers": [
                    {"color": "#f8f9fa"},
                    {"visibility": "on"}
                ]},
            {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
            {"featureType": "road","elementType": "all","stylers": [
                    {"saturation": -100},
                    {"lightness": 45}
                ]},
            {"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
            {"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
            {"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},
            {"featureType": "water","elementType": "all","stylers": [
                    {"color": "#6e8188"},
                    {"visibility": "on"}
                ]}
        ]
    });
    jQuery('#location .motopress-button-obj').append(
        jQuery("<div/>",{class:"form-group"}).append(
            jQuery("<label/>").append(
                jQuery("<input/>",{class:"placepicker form-control", placeholder:'Enter your location'})
            ),
        ),
        jQuery("<div/>",{id:"collapseOne",class:"collapse"}).append(
            jQuery("<div/>",{class:"placepicker-map thumbnail"})
        )
    )
    var  myPos = new google.maps.Marker()

    jQuery(".placepicker").placepicker();
    jQuery(".placepicker").change(function(){

        console.log()
        var request = {
            query: jQuery(this)[0].value
        };
        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
        myPos.setMap(null)
    })

    var beaches = [
        ['Aliso Viejo', 33.5684605, -117.7262981],
        ['Anaheim', 33.8365932, -117.9143012],
        ['Brea', 33.916475, -117.9002918],
        ['Buena Park', 33.8674044, -117.9981387],
        ['Costa Mesa', 33.6412156, -117.9188221],
        ['Aliso Viejo', 33.5684605, -117.7262981],
        ['Cypress', 33.8169366, -118.0368507],
        ['Dana Point ', 33.4672256, -117.6981014],
        ['Fountain Valley', 33.7090212, -117.9544069],
        ['Fullerton Garden Grove', 33.775763, -117.938437],
        ['Huntington Beach', 33.6594835, -117.9988026],
        ['Irvine', 33.6845673, -117.8265049],
        ['La Habra', 33.9318591, -117.946137],
        ['La Palma', 33.8463218, -118.0461393],
        ['Laguna Beach', 33.5427189, -117.7853568],
        ['Laguna Hills', 33.5916433, -117.6986604],
        ['Laguna Niguel', 33.5236744, -117.7149438],
        ['Laguna Woods Lake Forest', 33.610118, -117.725167],
        ['Los Alamitos', 33.8032009, -118.0718894],
        ['Mission Viejo', 33.5968913, -117.6581562],
        ['Newport Beach', 33.6188829, -117.9298493],
        ['Orange', 33.7879139, -117.8531007],
        ['Placentia', 33.8710729, -117.8627548],
        ['Rancho Santa Margarita', 33.640171, -117.602832],
        //['San Clemente San Juan Capistrano', , ],
        ['Santa Ana', 33.7454725, -117.867653],
        ['Seal Beach', 33.7414085, -118.1047682],
        ['Stanton', 33.8028875, -117.9931203],
        ['Tustin', 33.7420005, -117.8236391],
        ['Villa Park', 33.8140062, -117.8220723],
        ['Westminster', 33.7591757, -117.9897058],
        ['Yorba Linda', 33.8885035, -117.8132571],
        ['Coto de Caza', 33.5951048, -117.5906715],
        ['Cowan Heights', 33.7779154, -117.774054],
        ['El Modena', 33.78778, -117.80861],
        ['Talega', 33.463430, -117.596142],
        ['Tustin Legacy', 33.7056036, -117.8427163],
        ['San Juan Hills', 33.502173, -117.621543],
        ['San Joaquin Hills', 33.613996, -117.809167],
        ['Santa Ana Heights', 33.6525, -117.894722],
        ['Red Hill Avenue', 33.7112426, -117.8377737],
        ['Rossmoor Silverado Canyon', 33.748229, -117.613982],
        ['Sunset Beach', 33.7207336, -118.0735739],
        ['Trabuco Canyon', 33.6655081, -117.5869862],
        ['Tustin Foothills', 33.7635422, -117.7901088],
        ['Anaheim Hills', 33.8508021, -117.7490656],
        ['Atwood', 33.865915, -117.831260],
        ['Balboa', 33.618021, -117.930159],
        ['Balboa Island', 33.6072954, -117.897071],
        ['Corona del Mar', 33.5978595, -117.8730142],
        ['Capistrano Beach', 33.4596667, -117.6690208],
        ['Dove Canyon', 33.639944, -117.570480],
        //['East Lake', 34.069396, -118.207715],
        ['El Modena French Park', 33.779025, -117.804913],
        ['Santiago Hills', 33.718823, -117.758459],
        ['South Laguna', 33.5005827, -117.7431097],
        ['Surfside', 33.729891, -118.083978],
        ['Sunny Hills', 33.902400, -117.937143],
        ['Floral Park', 33.766856, -117.872932],
        ['Foothill Ranch', 33.6831832, -117.6664308],
        ['Ladera Ranch', 33.550735, -117.6411717],
        ['Las Flores', 33.585836, -117.624739],
        ['Lido Isle', 33.6121375, -117.9168448],
        //['Mesa Verde', 34.312317, -118.406400],
        ['Monarch Beach', 33.4812521, -117.7183165],
        ['Northwood Newport Coast', 33.599413, -117.836886],
        ['Olinda Village', 33.9307887, -117.8062304],
        ['Olive', 33.836893, -117.845366],
        ['Portola Hills', 33.6791872, -117.6311605],
        ['Quail Hill', 33.6454924, -117.7666567],
        ['Emerald Bay Ladera Ranch', 33.554453, -117.808281],
        ['Lemon Heights', 33.7589067, -117.7819981],
        ['Midway City', 33.7446861, -117.9863236],
        ['Modjeska Canyon Orange Park Acres', , ],
        ['Rancho Mission Viejo', 33.5264704, -117.6288156],
        ['Tustin Ranch', 33.741824, -117.783503],
        ['West Garden Grove', 33.774222, -117.964880],
        //['Woodbridge', 34.153132, -118.375628],
        ['Turtle Roc', 33.6444099, -117.8135579],
    ];
    setMarkers(map,beaches)

    jQuery(".my-location a").on("click",function(){
        if(markerSearch !== undefined)
            markerSearch.setMap(null);

        var apiGeolocationSuccess = function(position) {
            myPos.setOptions({
                position: {lat: position.coords.latitude, lng: position.coords.longitude},
                map: map,
                icon: {url:"http://ocrepairs.com/wp-content/uploads/2018/01/marker-active.png"},
                title: "You are here!"
            });
            var coordinates = new google.maps.LatLng(position.coords.latitude,  position.coords.longitude)
            myPos.setMap(map)
            map.setCenter(coordinates);
            map.setZoom(15);
        };
        var tryAPIGeolocation = function() {
            jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCnc3Svf7CEAW2IAMQXDU0-CsnUPkk1j3k", function(success) {
                apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
            })
                .fail(function(err) {
                    alert("API Geolocation error! \n\n"+err);
                });
        };
        var browserGeolocationSuccess = function(position) {
            alert("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
        };
        var browserGeolocationFail = function(error) {
            switch (error.code) {
                case error.TIMEOUT:
                    alert("Browser geolocation error !\n\nTimeout.");
                    break;
                case error.PERMISSION_DENIED:
                    if(error.message.indexOf("Only secure origins are allowed") == 0) {
                        tryAPIGeolocation();
                    }
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Browser geolocation error !\n\nPosition unavailable.");
                    break;
            }
        };
        var tryGeolocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    browserGeolocationSuccess,
                    browserGeolocationFail,
                    {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true});
            }
        };
        tryGeolocation();
    })
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var a  = undefined;



        var place = results[0];
        addMarker(place);




    }
}
function addMarker(place) {

    if(markerSearch !== undefined)
        markerSearch.setMap(null);

    console.log(place.geometry.location)
    markerSearch = new google.maps.Marker({
        position: place.geometry.location,
        icon: {url:"http://ocrepairs.com/wp-content/uploads/2018/01/marker-active.png"},
        title: "You are here!"
    });
    markerSearch.setMap(map);
    map.setCenter(place.geometry.location);
}
function setMarkers(map,beaches) {
    var infowindow = new google.maps.InfoWindow({
    });
    var image = {
        url: 'http://ocrepairs.com/wp-content/uploads/2018/01/marker.png',
        size: new google.maps.Size(30, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 50)
    };
    var image_active = {
        url: "http://ocrepairs.com/wp-content/uploads/2018/01/marker-active.png",
        size: new google.maps.Size(30, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 50)
    };
    var markers = [];
    var cnt = 0;
    var crentMark;
    for (let i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        markers[i] = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            title: beach[0]
        });
        markers[i].addListener('click',function(){
            console.log(this.title);
            for (let i = 0; i < markers.length; i++){
                markers[i].setOptions({
                    icon:image,
                })
            }
            this.setOptions({
                icon:image_active,
            })
            var cont = '<div id="content">'+
                '<p id="firstHeading" class="firstHeading">'+ this.title +'</p>'+
                '</div>';
            infowindow.setContent(
                cont
            )
            currentMark = this;
            infowindow.open(map, this);
        })
        google.maps.event.addListener(infowindow,'closeclick',function(){
            currentMark.setOptions({
                icon:image
            });
        });
    }
}