$(function() {
  // event handlers
  // $( ".trip-startdate" ).datepicker();
  // $( ".trip-enddate" ).datepicker();

  // shows/hide activity form
  // $('.trip').click(process_activities);


  $('.new_activity').click(show_activity_form);
  $('#activity-enter').click(create_activity);
  //process_activity();

  //gets activity from db
  $('.activity-form-cancel-btn').click(hide_activity_form);
  $("#activities_table").on("click", ".edit-activity-btn", edit_activity);
  //deletes activity from db
  $("#activities_table").on("click", ".delete-activity-btn", delete_activity);
  //voting
  $("#activities_table").on("click", ".vote_down_button", vote_down_activity);
  $("#activities_table").on("click", ".vote_up_button", vote_up_activity);
  $('body').on('click', '.trip', toggle_trip);
  //updates activity info
  //$("#activity-save-changes").click(update_activity);




});

