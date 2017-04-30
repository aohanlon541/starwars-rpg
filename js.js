$(document).ready(function() {

var chewbaccaPoints = 100;
var soloPoints = 150;
var vadarPoints = 300;
var huttPoints = 75; 
var clicks = 0;


$('.individual').click(function selectCharacter(event) {
	if (clicks === 0) {
  		$(this).prepend("<h3>Selected Player</h3>");
		$(this).css({"background-color": "green"})
		$(".game").append(this);

		$('.individual').not(this).prepend("<h3>Enemy</h3>");
		$('.individual').not(this).css({"background-color": "red"});

		$("#instructions").html("Click a character to battle.");
		$(this).off(event);
  	}

  	else {
  		$('.individual').click(function selectEnemy(event) {
  			$(".game").append(this);
  			$(this).off(event);
  		});
  	}

  
  ++clicks;
});



// }
// choosePlayer();


// $("button").click( function() {
//  
// });




});