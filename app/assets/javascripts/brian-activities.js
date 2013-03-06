// builds the page
var activities = [];

function process_activit


function display_activity(activity) {

  // displays the
  $div_activity = $('div');
  $div_activity.addClass('.activites');

  $show_activity = $('div');
  $show_activity.addClass('.show_activities');

  // populate divs with data from activity
  $name = $('div');
  $name.html(activity.name);
  $description= $('div');
  $description.html(activity.description);
  $category = $('div');
  $category.html(activity.category);
  $image = $('img');
  $image.attr('src',activity.image);

  // append show_activity to activity div
  $show_activity.append($name).append($description).append($category).append($image);
  $div_activity.append($show_activity);

  // display form IF user wishes to edit
  $form_activity = %('div');

}
