$(function() {
  // event handlers

  // shows/hide activity form
  $('.trip').click(process_activity);
  $('#create_activity').click(create_activity);



  $('#new_activity').click(show_activity_form);
  process_activity();


});

