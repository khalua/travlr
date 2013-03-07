//THIS IS MY TESTING CODE SO I DIDN'T HAVE TO WAIT ON BRIAN'S
//BRIAN AND I SHOULD INTEGRATE OUR FUNCTIONS TOGETHER TOMORROW

//function to get rid of dupes in array, push new/updated, sort and detach
function add_activity(message)
{
  activities = _.reject(activities, function(x){ return x.id == message.id;});
  activities.push(message);
  activities = _.sortBy(activities, function(obj){ return obj.total_votes;}).reverse();
  $("#activities_table").detach();
  process_activity();
}
//makes header row of my table and starts the loop
function process_activity()
{
  var table = $("<table>");
  table.attr("id", "activities_table");
  var row = $("<tr>");
  var vote = $("<td>").text("vote");
  var name = $("<td>").text("name");
  var desc = $("<td>").text("description");
  var address = $("<td>").text("address");
  var votes = $("<td>").text("votes");
  var id = $("<td>").text("id");
  row.append(vote).append(name).append(desc).append(address).append(votes).append(id);
  table.append(row);
  $("#trips").append(table);
  _.each(activities, display_activities);
}

//makes a row in the table for each activity
function display_activities(act)
{
  var row = $("<tr>");
  var updown = $("<td>");
  var up = $("<img>").addClass("vote_up_button");
  up.attr("src", "assets/arrow_up.png");
  var down = $("<img>").addClass("vote_down_button");
  down.attr("src", "assets/arrow_down.png");
  updown.append(up);
  updown.append(down);
  var name = $("<td>").text(act.name);
  var desc = $("<td>").text(act.description);
  var address = $("<td>").text(act.address);
  var votes = $("<td>").text(act.total_votes);
  var id = $("<td>").text(act.id);
  var edit = $("<td>");
  var a = $("<a>").attr("href", "#");
  a.addClass("edit-activity-btn").addClass("button radius");
  a.text("Edit");
  edit.append(a);
  var activity_delete = $("<td>");
  var b = $("<a>").attr("href", "#");
  b.addClass("delete-activity-btn").addClass("button radius");
  b.text("Delete");
  activity_delete.append(b);
  row.append(updown);
  row.append(name);
  row.append(desc);
  row.append(address);
  row.append(votes);
  row.append(id);
  row.append(edit);
  row.append(activity_delete);
  $("table").append(row);
}
//END OF TESTING CODE*****************************************

//ALL FOR EDITING *********************************************
//asks ajax to get the appropriate activity and shows the form while hiding the button
function edit_activity()
{
  var id = $(this).parent().prev().text();
  var form = $(".activity_form").detach();
  form.insertAfter($(this).parent());
  $(this).parent().hide();
  form.removeClass("hide");
  $("#activity-enter").hide();
  $("#activity-save-changes").show();
  $("#activity-cancel").show();
  $.ajax({
    dataType: 'json',
    type: "get",
    url: "/activities/"+id
    }).done(populate_activity_form);
  return false;
}

//populates the form with the activity returned by ajax
function populate_activity_form(activity)
{
  $("#activity-name").val(activity.name);
  $("#activity-description").val(activity.description);
  $("#activity-address").val(activity.address);
  $("#activity-image").val(activity.image);
  $("#activity-id").val(activity.id);
}
//send the updated activity to rails via ajax
// then calls the function to add it to the list of activities
function update_activity()
{
  var name = $("#activity-name").val();
  var description = $("#activity-description").val();
  var address = $("#activity-address").val();
  var image = $("#activity-image").val();
  var id = $("#activity-id").val();
  var token = $("input[name=authenticity_token]").val();
  $(".activity_form").hide();

  $.ajax({
  dataType: 'json',
  type: "post",
  url: "/activities/"+id,
  data: {_method:"put", authenticity_token:token, 'activity[name]':name, 'activity[description]':description, 'activity[image]':image, 'activity[address]':address, 'activity[id]':id}
  }).done(add_activity);
  return false;
}
//END OF EDITING FUNCTIONS********************************************

//DELETE FUNCTIONS***************************************************
//finds the appropriate activity and sends it to rails to remove from db
function delete_activity(){
  var id = $(this).parent().prev().prev().text();
  var token = $("input[name=authenticity_token]").val();
  $.ajax({
  dataType: 'json',
  type: "post",
  url: "/activities/"+id,
  data: {_method:"delete", authenticity_token:token, id:id}
  }).done(remove_activity);
  return false;
}
//removes the activity from the array and then generates a new table
function remove_activity(message)
{
  activities = _.reject(activities, function(x){ return x.id == message.id;});
  $("#activities_table").detach();
  process_activity();
}
//END OF DELETING FUNCTIONS**********************************************

//VOTING FUNCTIONS***************************************************

//sends appropriate activity to rails to update it's total_votes
//then calls to add the updated activity to the array
function vote_down_activity()
{
  var id = $(this).parent().next().next().next().next().next().text();
  var token = $("input[name=authenticity_token]").val();
  $.ajax({
  dataType: 'json',
  type: "post",
  url: "/activities/"+id+"/down",
  data: {authenticity_token:token, id:id}
  }).done(add_activity);
  return false;

}
function vote_up_activity()
{
  var id = $(this).parent().next().next().next().next().next().text();
  var token = $("input[name=authenticity_token]").val();
  $.ajax({
  dataType: 'json',
  type: "post",
  url: "/activities/"+id+"/up",
  data: {authenticity_token:token, id:id}
  }).done(add_activity);
  return false;
}
