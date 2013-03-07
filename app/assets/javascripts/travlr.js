$(function() {
  // event handlers

  // shows new trip form
  $('.addtripbutton').click(show_new_trip_form);
  // Creates a new trip from the form
  $('#trip_save_changes').click(create_trip);
  // shows/hide activity form
  //$('.trip').click(process_activity);
  $('#create_activity').click(create_activity);



  $('#new_activity').click(show_activity_form);
  //process_activity();

  //gets activity from db
  //$(".activity_form").on("click", ".edit-activity-btn", edit_activity);
  //updates activity info
  //$("#activity-save-changes").click(update_activity);


});

var token = $("input[name=authenticity_token]").val();
