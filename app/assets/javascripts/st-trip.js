var trip_object;

$(function(){
  // shows new trip form
  $('.addtripbutton').click(show_new_trip_form);
  // cancels new trip form
  $('#trip_cancel').click(hide_new_trip_form);
  // Creates a new trip from the form
  $('#trip_save').click(create_trip);

  $('body').on("click",".edit_trip_btn",populate_edit_trip_form);
});

// This function gets the trip_id from the dom
function get_trip_id()
{
  //MAKE SURE TO FIND TRIP ID
  // var trip_id = $(this).parent.prev().prev().text();
  // return trip_id
}

// This function passes in a trip id and returns a trip object
function get_trip(trip_id)
{
  var id = trip_id;
  $.ajax({
      dataType: 'json',
      type: "get",
      url: "/trips/" + id
    }).done(trip_return);
  return false;
}

// This function adds the trip object to the trip array
function trip_return(trip_object)
{
  trip_array = _.reject(trip_array, function(t){return t.id == trip_object.id;});
  trip_array.push(trip_object);
  $('.trips').empty();
  populate_all_trips(trip_array);
  // trip_array = _.sortBy(trip_array, function(t){ return t.value;}).reverse();
}

// This function populates the edit_trip form with trip object information
function populate_edit_trip_form()
{

  //hide save button

  //MAKE SURE TO FIND TRIP ID

  show_new_trip_form();
  $('#trip_update').show();
  $('#trip_save').hide();
  alert("YOU EDIT");

  var name = $('#trip-name').val();
  var startdate = $('#trip-startdate').val();
  var enddate = $('#trip-enddate').val();
  var token = $('input[name=authenticity_token]').val();
  // Move to correct DOM location
  // $('').attach();
}

// This function creates a trip through AJAX
function create_trip()
{
  var name = $('#trip-name').val();
  var startdate = $('#trip-startdate').val();
  var enddate = $('#trip-enddate').val();
  var token = $('input[name=authenticity_token]').val();

  $.ajax({
    dataType: 'json',
    type: "post",
    url: "/trips",
    data: {authenticity_token:token, 'trip[name]':name, 'trip[startdate]':startdate, 'trip[enddate]':enddate }
  }).done(trip_return);

  return false;
}

// This function updates through AJAX the trip
function update_trip()
{
  //MAKE SURE TO FIND TRIP ID
  // var trip_id = get_trip_id();
  var id = $(this).parent().prev().prev().text();
  var name = $(this).parent().prev().children().first().text();
  var startdate = $(this).parent().prev().children().first().next().text();
  var enddate = $(this).parent().prev().children().first().next().next().text();

  // var name = $('#name').val();
  // var startdate = $('#startdate').val();
  // var enddate = $('#enddate').val();

  var token = $('input[name=authenticity_token]').val();

  $.ajax({
      dataType: 'json',
      type: "post",
      url: "/trips/" + id,
      data: {_method:'put', authenticity_token:token, 'trip[name]':name, 'trip[startdate]':startdate, 'trip[enddate]':enddate}
    }).done(trip_return);
}

// This function deletes the trip
function delete_trip()
{
  //MAKE SURE TO FIND TRIP ID
  // var trip_id = get_trip_id();

  console.log('Delete Trip');

  var id = $(this).parent().prev().prev().text();

  var token = $('input[name=authenticity_token]').val();

  // get_trip(trip_id);

  console.log('This is the id '+id);

  $.ajax({
      dataType: 'json',
      type: "post",
      url: "/trips/" + id,
      data: {_method:'delete', authenticity_token:token}
    }).done(trip_return);
}

function show_new_trip_form()
{
  $('.addtripbutton').hide();
  $('.trip_form').show();
  $('#trip_update').hide();
}

function hide_new_trip_form()
{
  $('.addtripbutton').show();
  $('.trip_form').hide();
}
