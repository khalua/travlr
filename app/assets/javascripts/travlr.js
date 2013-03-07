$(function() {
  // event handlers

  // shows/hide activity form
  $('.trip').click(process_activities);


  $('#activity_form').click();

  //gets activity from db
  $(".activity_form").on("click", ".edit-activity-btn", edit_activity);
  //updates activity info
  $("#activity-save-changes").click(update_activity);


});

var activities = [];
var token = $("input[name=authenticity_token]").val();
