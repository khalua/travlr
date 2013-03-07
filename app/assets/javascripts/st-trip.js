var trip_object;
// This function gets the trip_id from the dom
function get_trip_id()
{
  //MAKE SURE TO FIND TRIP ID
  // var trip_id = $('').text();
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
  // trip_array = _.sortBy(trip_array, function(t){ return t.value;}).reverse();
}

// This function populates the edit_trip form with trip object information
function populate_edit_trip_form()
{
  //MAKE SURE TO FIND TRIP ID
  var trip_id = get_trip_id();

  var trip = get_trip(trip_id);

  $('#name').val(trip.name);
  $('#startdate').val(trip.startdate);
  $('#enddate').val(trip.enddate);
  // Move to correct DOM location
  // $('').attach();
}

// This function creates a trip through AJAX
function create_trip()
{
  var name = $('#name').val();
  var startdate = $('#startdate').val();
  var enddate = $('#enddate').val();

  $.ajax({
    dataType: 'json',
    type: "post",
    url: "/trips",
    data: {authenticity_token:token, 'trip[name]':name, 'trip[startdate]':startdate, 'trip[enddate]':enddate }
  }).done();

  return false;
}

// This function updates through AJAX the trip
function update_trip()
{
  //MAKE SURE TO FIND TRIP ID
  var trip_id = get_trip_id();

  var name = $('#name').val();
  var startdate = $('#startdate').val();
  var enddate = $('#enddate').val();

  $.ajax({
      dataType: 'json',
      type: "post",
      url: "/trips/" + id,
      data: {_method:'put', authenticity_token:token, 'trip[name]':name, 'trip[startdate]':startdate, 'trip[enddate]':enddate}
    }).done();
}

// This function deletes the trip
function delete_trip()
{
  //MAKE SURE TO FIND TRIP ID
  var trip_id = get_trip_id();

  get_trip(trip_id);

  $.ajax({
      dataType: 'json',
      type: "post",
      url: "/trips/" + id,
      data: {_method:'delete', authenticity_token:token}
    }).done();
}
