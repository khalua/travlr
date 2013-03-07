// builds the page
function create_activity() {
  alert('got here');
  var name = $('#activity-name').val();
  var description = $('#activity-description').val();
  var category = $('#activity-category').val();
  var image = $('#activity-image').val();
  var address = $('#activity-address').val();
  var trip_id = $('#trip_id').val();
  var token = $("input[name=authenticity_token]").val();

  $.ajax({
    dataType: 'json',
    type: 'post',
    url: '/activities',
    data:{authenticity_token:token,'activity[name]':name,'activity[description]':description,'activity[image]':image,'activity[address]':address,'activity[trip_id]':trip_id}

  }).done(process_activity);

  return false;
}

function process_activity(activity) {
    if(activity == undefined) {
       activity = activities
    } else {
      activities.push(activity);
    }

    $('.tripactivities').empty();
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
  $name.text(activity.name);

  var $description= $('<div>');
  $description.html(activity.description);

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

  $show_activity.append($updown);
  $show_activity.append($name);
  $show_activity.append($description).append($category).append($image).append($edit).append($del).append($activity_id);
  $div_activity.append($show_activity);
  $(".tripactivities").append($div_activity);

  // display form IF user wishes to edit
  $form_activity = $('<div>');
}

// empties and displays the activity form before rendering it.
// called when clicking the new activity form
function show_activity_form() {
    console.log($(this));
   $('#activity-name').val('');
   $('#activity-description').val('');
   $('#activity-image').val('');
   $('#activity-address').val('');

   // show activity form
   $('#activity_form').show();

   // append form after the new activity button
   $(this).after($('#activity_form') );
   $('.new_activity').hide();
   return false;
}

function hide_activity_form() {
  console.log($(this));
  $(this).parent().toggle();
  $('.new_activity').toggle();

}

function toggle_trip() {
  alert('got here toggle');
  $(this).toggle();

}







