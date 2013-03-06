$(function(){
    //$('body').on("click",".trip",show_activites);



});



function create_trip(trip){
  alert("You are creating a trip");
  trip = get_trip(trip_id);
  console.log("Creating- "+ trip);

/*---   Adding trip block -----*/
  tripblock = $('<div>').addClass("trip");
  /*--  SHOW TRIP */
  showtrip =$('<div>').addClass("showtrip");
      name_div = $('<div>').addClass('trip_name').text(trip.name);
      startdate_div = $('<div>').addClass('trip_startdate').text(trip.startdate);
      enddate_div = $('<div>').addClass('trip_editdate').text(trip.editdate);
  showtrip.append(name_div,startdate_div,enddate_div);

  /*---  Adding Buttons  ----*/
  buttonbox = $('<div>').addClass('buttons');
      editbutton = $('<div>').addClass('.edit_trip_btn');
      deletebutton = $('<div>').addClass('.delete_trip_btn');
  buttonbox.append(editbutton,deletebutton);

/*--- Creating entire trip box*/
  tripblock.append(showtrip,buttonbox);

/*--- Adding to trips block------*/
  $('.trips').append(tripblock);

}

function populate_all_trips(trips){
  _.each(trips,create_trip);
}