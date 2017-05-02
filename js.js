$(document).ready(function() {

var chewbaccaPoints = 100;
var soloPoints = 150;
var vadarPoints = 300;
var huttPoints = 75; 
var clicks = 0;

$("#chewbacca").append("<p id='chewbaccaPoints'>Health Points: " + chewbaccaPoints + 
	"</p>");
$("#han-solo").append("<p>Health Points: " + soloPoints + 
	"</p>");	
$("#vadar").append("<p>Health Points: " + vadarPoints + 
	"</p>");	
$("#hutt").append("<p>Health Points: " + huttPoints + 
	"</p>");	

$('.individual').click(function selectCharacter(event1) {
	if (clicks === 0) {
  		$(this).prepend("<h3>Selected Player</h3>");
		$(this).css({"background-color": "green"})
		$(".game").append(this);
		$(this).attr("id", "selectCharacter");

		$('.individual').not(this).prepend("<h3>Enemy</h3>");
		$('.individual').not(this).css({"background-color": "red"});

		$("#instructions").html("Double click a character to battle.");
		$(this).attr("class", "selectCharacter");
		$(this).off(event1);
  	}

  	else {
  		$('.individual').click(function selectEnemy(event2) {
  			$(".game").append(this);
  			$(this).attr("class", "selectEnemy");
  			$(this).off(event2);
  		});
  	}
  ++clicks;
});


//subtract points when the attack button is pushed on the selectCharacter and selectEnemy 
//use multiple to make one of the characers multiply every time that the attack button is pushed
// if (chewbaccaPoints > 0) {

$('#attack').click(function () {
		if (chewbaccaPoints > 0) {
		chewbaccaPoints = chewbaccaPoints - 10;
		$("#soloPoints").html("<p id='soloPoints'>Health Points: " + chewbaccaPoints + 
		"</p>");
		}
		else {
		$("#chewbaccaPoints").html("<p id='chewbaccaPoints'>DEAD</p>");
		}
});		

	// else if (character = $("#han-solo")) {
	// 	if (soloPoints > 0) {
	// 	soloPoints = soloPoints - 10;
	// 	$("#soloPoints").html("<p id='soloPoints'>Health Points: " + soloPoints + 
	// 	"</p>");
	// 	else {
	// 	$("#soloPoints").html("<p id='soloPoints'>DEAD</p>");
	// 	}	
	

// }
// else if (chewbaccaPoints = 0) {
// 	$("#chewbaccaPoints").html("<p id='chewbaccaPoints'>DEAD</p>");
// }

//make it so it says "you're out of tries refresh"
//fade out an "enemy" when you defeat them

//





});