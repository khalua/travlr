$(function(){
    $('body').on("click",".trip",show_activites);



});


function create_trip(trip_id){
  alert("You are creating a trip");
  trip = get_trip(trip_id);
  console.log("Creating- "+ trip);

  tripblock = $('</div>').addClass("trip");

  name_div = $('<div>').addClass('trip_name').text(trip.name);
  startdate_div = $('<div>').addClass('trip_startdate').text(trip.startdate);
  enddate_div = $('<div>').addClass('trip_editdate').text(trip.editdate);
  buttonbox = $('<div>').addClass('buttons');
    editbutton = $('<div>').addClass('.edit_trip_btn');
    deletebutton = $('<div>').addClass('.delete_trip_btn');
  buttonbox.append(editbutton,deletebutton);

  tripblock.append();


  $('.trips').append(tripblock);


  create_edit_trip(trip);
}