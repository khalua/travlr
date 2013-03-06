$(function(){



});

function create_trip(trip_id){
trip = get_trip(trip_id);

tripblock = $('</div>').addClass("trip");


$('.trips').append(tripblock);



}