
$(function(){
    //$('body').on("click",".trip",show_activites);

    //$('body').on("click",".trip",brianfunctionto);

    $('body').on("click",".edit_trip_btn",populate_edit_trip_form);
    $('body').on("click",".delete_trip_btn",delete_trip);

    populate_all_trips(trip_array);
});

function add_trip_to_array(trip_id){
  var trip = get_trip(trip_id);
}


function show_trip(trip){
  console.log("Creating- "+ trip);

/*---   Adding trip block -----*/
  tripblock = $('<div>').addClass("trip");
  /*add hidden trip*/
  tripblock.append($('<div>').addClass("hidden_trip_id").text(trip.id).hide());
  /*--  SHOW TRIP */
  showtrip =$('<div>').addClass("showtrip").addClass('inline');
      name_div = $('<div>').addClass('trip_name tripattr').text(trip.name);
      startdate_div = $('<div>').addClass('trip_startdate tripattr').text(trip.startdate);
      enddate_div = $('<div>').addClass('trip_editdate tripattr').text(trip.editdate);
  showtrip.append(name_div,startdate_div,enddate_div);

  /*---  Adding Buttons  ----*/
  buttonbox = $('<div>').addClass('buttons inline buttonbox');
      editbutton = $('<div>').addClass('edit_trip_btn');
      deletebutton = $('<div>').addClass('delete_trip_btn');
  buttonbox.append(editbutton,deletebutton);

/*--- Creating entire trip box*/
  tripblock.append(showtrip,buttonbox);

/*--- Adding to trips block------*/
  $('.trips').append(tripblock);

}

function populate_all_trips(trips){
  _.each(trips,show_trip);
}
