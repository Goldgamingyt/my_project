$(document).ready(function() {
$("#goal-button").click(function(){
  $("#list-group").append("<li class='load'>" + $("#new-goal").val() + "</li>");
  $("#new-goal").val("");
  });
});
