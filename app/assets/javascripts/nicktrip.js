$(function(){
    $('body').on("click",".trip",show_activites);



});


function create_trip(trip_id){
  alert("You are creating a trip");
  trip = get_trip(trip_id);
  console.log("Creating- "+ trip);
  tripblock = $('</div>').addClass("trip");


  $('.trips').append(tripblock);


  create_edit_trip(trip);
}