function edit_activity()
{
  var id = $(this).siblings().last().text();
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

function populate_activity_form(activity)
{
  $("#activity-name").val(activity.name);
  $("#activity-description").val(activity.description);
  $("#activity-address").val(activity.address);
  $("#activity-image").val(activity.image);
  $("#activity-id").val(activity.id);


}

function update_activity()
{
  var name = $("#activity-name").val();
  var description = $("#activity-description").val();
  var address = $("#activity-address").val();
  var image = $("#activity-image").val();
  var id = $("#activity-id").val();

  $.ajax({
  dataType: 'json',
  type: "post",
  url: "/activities/"+id,
  data: {_method:"put", authenticity_token:token, 'activity[name]':name, 'activity[description]':description, 'activity[image]':image, 'activity[address]':address, 'activity[id]':id}
  }).done(process_activity);
  return false;
}