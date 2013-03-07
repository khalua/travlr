$(function(){
    //$('body').on("click",".trip",show_activites);

    //$('body').on("click",".trip",brianfunctionto);
    //$('body').on("click","edit_trip_btn",populate_edit_trip_form);
    $('body').on("click","delete_trip_btn",delete_trip);


});

function create_trip_from_id(trip_id){
  trip = get_trip(trip_id);
  create_trip(trip);
  trip_array.push(trip);
}


function create_trip(trip){
  alert("You are creating a trip");
  console.log("Creating- "+ trip);

/*---   Adding trip block -----*/
  tripblock = $('<div>').addClass("trip");
  /*add hidden trip*/
  tripblock.append($('<div>').addClass("hidden_trip_id").text(trip.id).hide());
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

function populate_edit_trip_form()
{

}