$(function() {
  // event handlers

  // shows/hide activity form
  // $('.trip').click(process_activities);


  $('#activity_form').click();

  //gets activity from db
  $("#activities_table").on("click", ".edit-activity-btn", edit_activity);
  $("#activities_table").on("click", ".delete-activity-btn", delete_activity);
  $("#activities_table").on("click", ".vote_down_button", vote_down_activity);
  $("#activities_table").on("click", ".vote_up_button", vote_up_activity);

  //updates activity info
  $("#activity-save-changes").click(update_activity);



});



