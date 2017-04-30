var chewbaccaPoints = 100;
var soloPoints = 150;
var vadarPoints = 300;
var huttPoints = 75; 

$("#chewbacca").click( function() {
	$("#player").append($("#chewbacca"));
	$("#player").append("<p>Health Point: " + chewbaccaPoints + "</p>");

	$("#enemies").append($("#han-solo"));
	$("#enemies").append("<p>Health Point: " + soloPoints + "</p>");

	$("#enemies").append($("#vadar"));
	$("#enemies").append("<p>Health Point: " + vadarPoints + "</p>");

	$("#enemies").append($("#hutt"));
	$("#enemies").append("<p>Health Point: " + huttPoints + "</p>");

	$("#enemies").css({"display": "inline"});
	$("#player").css({"display": "inline"});

	}); 


$("#han-solo").click( function() {
	$("#player").append($("#han-solo"));
	$("#enemies").append($("#chewbacca"));
	$("#enemies").append($("#vadar"));
	$("#enemies").append($("#hutt"));
	$("#enemies").css({"display": "inline"});
	$("#player").css({"display": "inline"});
	}); 

$("#vadar").click( function() {
	$("#player").append($("#vadar"));
	$("#enemies").append($("#chewbacca"));
	$("#enemies").append($("#han-solo"));
	$("#enemies").append($("#hutt"));
	$("#enemies").css({"display": "inline"});
	$("#player").css({"display": "inline"});
	}); 

$("#hutt").click( function() {
	$("#player").append($("#hutt"));
	$("#enemies").append($("#chewbacca"));
	$("#enemies").append($("#han-solo"));
	$("#enemies").append($("#vadar"));
	$("#enemies").css({"display": "inline"});
	$("#player").css({"display": "inline"});
	}); 

