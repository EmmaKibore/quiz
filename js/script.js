$(document).ready(function() {
$("#Quiz").submit(function(event){
     event.preventDefault();
      var qtn1 = parseInt($("input:radio[name=1]:checked").val());
      var qtn2 = parseInt($("input:radio[name=2]:checked").val());
      var qtn3 = parseInt($("input:radio[name=3]:checked").val());
      var qtn4 = parseInt($("input:radio[name=4]:checked").val());
      var qtn5 = parseInt($("input:radio[name=5]:checked").val());

    var total = qtn1 + qtn2 + qtn3 +qtn4 + qtn5 ;
    var result = '';

function getTotal(sum) {
  if (sum <= 49) {
    alert("you have failed please retake the test")

  }else if (sum >=50  && sum < 80) {
    alert("average")

  } else  {
    alert("Excellent")
  }

  }

var gettotal = total + getTotal(total);
document.getElementById("output").innerHTML = total;
});
});
