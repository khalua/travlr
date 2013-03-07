$(function() {
  // event handlers
  $( ".trip-startdate" ).datepicker();
  $( ".trip-enddate" ).datepicker();

  // shows/hide activity form
  // $('.trip').click(process_activities);




  $('#new_activity').click(show_activity_form);
  //process_activity();

  //gets activity from db
  $("#activities_table").on("click", ".edit-activity-btn", edit_activity);
  //deletes activity from db
  $("#activities_table").on("click", ".delete-activity-btn", delete_activity);
  //voting
  $("#activities_table").on("click", ".vote_down_button", vote_down_activity);
  $("#activities_table").on("click", ".vote_up_button", vote_up_activity);

  //updates activity info
  //$("#activity-save-changes").click(update_activity);



});

