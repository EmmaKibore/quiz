$(document).ready(function() {
$("Quiz#Quiz").click(function(){
    $("#output").click(function(event)
      event.preventDefault();
      var qtn1 = parseInt($("input:radio[name=qtn1]:checked").val());
      var qtn2 = parseInt($("input:radio[name=qtn2]:checked").val());
      var qtn3 = parseInt($("input:radio[name=qtn3]:checked").val());
      var qtn4 = parseInt($("input:radio[name=qtn4]:checked").val());
      var qtn5 = parseInt($("input:radio[name=qtn5]:checked").val());
      $("#display").text(q1+q2+q3+q4+q5);
