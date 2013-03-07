$(function() {
  $('#location_button').click(location_search);
  $('#clear_button').click(clear_markers);
  display_map(37.766915,-122.435074, 10);
  populate_map();

});


//// Map stuff ////
var map;
var markers = [];

function populate_map()
{
 //this would be a great place to run clear markers, empty the activities array, and repopulate the activity
 //array when selecting a new trip.
  _.each(activities, prep_markers);
}

function prep_markers(activity)
{
  title = activity.name;
  latitude = activity.latitude;
  longitude = activity.longitude;
  //add_marker(latitude, longitude, title);
}


function display_map(lat, longitude, zoom)
{
  var mapOptions = {
    center: new google.maps.LatLng(lat, longitude),
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  canvas = $('#map_canvas')[0];
  map = new google.maps.Map(canvas, mapOptions);
}

function location_search(){
  var location = $('#location_box').val();
  var token = $('input[name=authenticity_token]').val();


  $.ajax ({
    dataType: 'json',
    type: "post",
    url: "/welcome",
    data: { authenticity_token:token, location:location}
  }).done(process_location);

  return false;
}


function process_location(geo_data)
{
  latitude = geo_data[0];
  longitude = geo_data[1];
  title = geo_data[2];
  add_marker(latitude, longitude, title);
}


function add_marker(lat, longitude, title)
{
  var latlng = new google.maps.LatLng(lat, longitude);
  var marker = new google.maps.Marker({position: latlng, map: map, title: title});
  markers.push(marker);
  reset_search();
}


function clear_markers()
{
  _.each(markers, function(m){m.setMap(null);});
  markers = [];
}

function reset_search()
{
  $('#location_box').val('');
  $('#location_box').focus();
}