function get_trip(trip)
{
  var id = trip.id;

  $.ajax({
      dataType: 'json',
      type: "get",
      url: "/trips/" + id,
    }).done();
}

function create_edit_trip(trip)
{

}

function edit_trip()
{
}

function delete_trip()