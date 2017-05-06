$(document).ready(function() {

var points = {Chewbacca: 100,
			  Solo: 150,
			  Vadar: 300,
			  Hutt: 75};

var clicks = 0;


$("#chewbacca").append("<p id='chewbaccaPoints'>Health Points: " + points.Chewbacca + 
	"</p>");
$("#hanSolo").append("<p id='soloPoints'>Health Points: " + points.Solo + 
	"</p>");	
$("#vadar").append("<p id='vadarPoints'>Health Points: " + points.Vadar + 
	"</p>");	
$("#hutt").append("<p id='huttPoints'>Health Points: " + points.Hutt + 
	"</p>");	

$('.individual').click(function() {
	if (clicks === 0) {
  		$(this).prepend("<h3>Selected Player</h3>");

		$(".individual").not(this).prepend("<h3>Enemy</h3>");
		$(".game").append(this);

		$("#instructions").html("<p>Double click a character to battle.</p>");
		$(this).attr("class", "selectCharacter");

		 $(".selectCharacter").css({"background-color": "green"});

  	}
  	else {
  		$('.individual').click(function() {
  			$(".game").append(this);
  			$(this).attr("class", "selectEnemy");

  			$(".selectEnemy").css({"background-color": "red"});
  		});
  	}

  ++clicks;
});



//subtract points when the attack button is pushed on the selectCharacter and selectEnemy 
//use multiple to make one of the characers multiply every time that the attack button is pushed
// if (chewbaccaPoints > 0) {

var clickCount = 0;

$('#attack').click(function () {
	var chewbaccaClasses = document.getElementById('chewbacca').className.split(/\s+/);
	var hanSoloClasses = document.getElementById('hanSolo').className.split(/\s+/);
	var vadarClasses = document.getElementById('vadar').className.split(/\s+/);
	var huttClasses = document.getElementById('hutt').className.split(/\s+/);


	clickCount++;
//select character 	
	if (chewbaccaClasses.indexOf('selectCharacter') > -1) {
		if (points.Chewbacca > 0) {
		points.Chewbacca = points.Chewbacca - 10;
		$("#chewbaccaPoints").html("<p id='chewbaccaPoints'>Health Points: " + points.Chewbacca + 
		"</p>");
		}
		else {
		$(".container").html("<p id='loser'>You're out of Health Points. We're refreshing the page now.</p>");
		setTimeout(function() {location.reload(); }, 3000);
		}
	}

	if (hanSoloClasses.indexOf('selectCharacter') > -1) {
		if (points.Solo > 0) {
		points.Solo = points.Solo - 10;
		$("#soloPoints").html("<p id='soloPoints'>Health Points: " + points.Solo + 
		"</p>");
		}
		else {
		$(".container").html("<p id='loser'>You're out of Health Points. We're refreshing the page now.</p>");
		setTimeout(function() {location.reload(); }, 3000);
		}
	}	

	if (vadarClasses.indexOf('selectCharacter') > -1) {
		if (points.Vadar > 0) {
		points.Vadar = points.Vadar - 10;
		$("#vadarPoints").html("<p id='vadarPoints'>Health Points: " + points.Vadar + 
		"</p>");
		}
		else {
		$(".container").html("<p id='loser'>You're out of Health Points. We're refreshing the page now.</p>");
		setTimeout(function() {location.reload(); }, 3000);
		}
	}

	if (huttClasses.indexOf('selectCharacter') > -1) {
		if (points.Hutt > 0) {
		points.Hutt = points.Hutt - 10;
		$("#huttPoints").html("<p id='huttPoints'>Health Points: " + points.Hutt + 
		"</p>");
		}
		else if (points.Hutt <= 0){
		$(".container").html("<p id='loser'>You're out of Health Points. We're refreshing the page now.</p>");
		setTimeout(function() {location.reload(); }, 3000);
		}
	}
//select enemy 
if (chewbaccaClasses.indexOf('selectEnemy') > -1) {
		if (points.Chewbacca > 0) {
		points.Chewbacca = points.Chewbacca - (10 * clickCount);
		$("#chewbaccaPoints").html("<p id='chewbaccaPoints'>Health Points: " + points.Chewbacca + 
		"</p>");
		}
		else {
		$("#instructions").html("<p>You defeated the enemy, select your next victim.</p>");
		
		$("#chewbacca").css({"opacity": "0.5"});
		}
	}

if (hanSoloClasses.indexOf('selectEnemy') > -1) {
		if (points.Solo > 0) {
		points.Solo = points.Solo - (10 * clickCount);
		$("#soloPoints").html("<p id='soloPoints'>Health Points: " + points.Solo + 
		"</p>");
		}
		else {
		$("#instructions").html("<p>You defeated the enemy, select your next victim.</p>");

		$("#hanSolo").css({"opacity": "0.5"});
		}
	}	

if (vadarClasses.indexOf('selectEnemy') > -1) {
		if (points.Vadar > 0) {
		points.Vadar = points.Vadar - (10 * clickCount);
		$("#vadarPoints").html("<p id='vadarPoints'>Health Points: " + points.Vadar + 
		"</p>");
		}
		else {
		$("#instructions").html("<p>You defeated the enemy, select your next victim.</p>");
		$("#vadar").css({"opacity": "0.5"});
		}
	}

if (huttClasses.indexOf('selectEnemy') > -1) {
		if (points.Hutt > 0) {
		points.Hutt = points.Hutt - (10 * clickCount);
		$("#huttPoints").html("<p id='huttPoints'>Health Points: " + points.Hutt + 
		"</p>");
		}
		else {
		$("#instructions").html("<p>You defeated the enemy, select your next victim.</p>");
		$("#hutt").css({"opacity": "0.5"});
		}
	}

//i can't figure out how to make it tell you win. I put a deadCount before and did deadCount++ 
//else functions when the selectedEnemy = 0, but it kept compounding after the first enemy was 
//dead. 

});		





});
