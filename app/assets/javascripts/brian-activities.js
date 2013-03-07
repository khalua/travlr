// builds the page
var activities = [];


function create_activity() {
  var name = $('#activity-name').val();
  var description = $('#activity-description').val();
  var image = $('#activity-image').val();
  var trip_id = $('#trip_id').val();
  $.ajax({
    dataType: 'json',
    type: 'post',
    url: '/activities',
    data:{authenticity_token:token,}

  }).done({});
}




function process_activity() {
  _.each(activities, display_activity)
}


function display_activity(activity) {
  var $div_activity = $('<div>');
  $div_activity.addClass('activites');

  var $show_activity = $('<div>');
  $show_activity.addClass('show_activities');

  // populate divs with data from activity
  var $updown = $('<div>');
  $updown.addClass('updown')
  var $up = $('<img>');
  $up.attr('src','/assets/up.png').addClass('up');
  var $down = $('<img>');
  $down.attr('src','/assets/down.png').addClass('down');
  $updown.append($up).append($down);

  var $name = $('<div>');
  $name.html(activity.name);
  //$name.text('activity.name');

  var $description= $('<div>');
  $description.html(activity.description);
  //$description.html('description');

  var $category = $('<div>');
  $category.html(activity.category);

  var $image = $('<img>');
  $image.attr('src',activity.image);

  var $address = $('<div>');
  $address.html(activity.address);

  var $edit = $('<a>');
  $edit.html('Edit');
  $edit.addClass('button radius edit-activity-btn');

  var $del= $('<a>');
  $del.html('Delete');
  $del.addClass('button radius delete-activity-btn');

  var $activity_id = $('<input>');
  $activity_id.attr('type','hidden');
  $activity_id.html(activity.id);

  // append show_activity to activity div
  $show_activity.append($updown);
  $show_activity.append($name);
  $show_activity.append($description).append($category).append($image).append($edit).append($del).append($activity_id);
  $div_activity.append($show_activity);

  // display form IF user wishes to edit
  $form_activity = $('<div>');

}
