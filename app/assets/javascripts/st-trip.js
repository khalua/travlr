
// This function passes in a trip id and returns a trip object
function get_trip(trip_id)
{
  var id = trip_id;

  $.ajax({
      dataType: 'json',
      type: "get",
      url: "/trips/" + id
    }).done(return_trip);

  return false;
}

// This function returns the trip object
function return_trip(trip_object)
{
  console.log('Returning trip object '+trip_object);
}

// This function populates the edit_trip form with trip object information
function create_edit_trip(trip)
{

}

// This function updates through AJAX the trip
function update_trip()
{
}

// This function deletes the trip
function delete_trip(){}