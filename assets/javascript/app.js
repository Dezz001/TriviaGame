

$(document).ready(function() {
	$("fieldset").hide();
	$("input").hide();



});
	


	var timer = 10;
	var intervalId;

	// // score variables
	// var score = 0;
	// var totalAnswers = 10;

	var answers = [];
	var currentQuestion = 0;
	var currentChoice = 0;


	var i;



	// question object array
	var trivia = [
		{
			question: 'Who played the character Florida Evans in the 1970s sitcom "Good Times"?',
			choices: ["Diahann Carroll", "Esther Rolle", "Helen Martin", "LaWanda Page"],
			answer: 1,	
		},

		{
			question: 'Who is "John Elroy Sanford" also known as?',
			choices: ["Redd Foxx", "Carroll O'Connor", "Mike Evans", "Haywood Nelson"],
			answer: 0,	
		},

		{
			question: 'What fictional character coined the phrase "Hey Hey Hey!"?',
			choices: ["Jonny Quest", "Scooby Doo", "Captain Cave Man", "Fat Albert"],
			answer: 3,	
		},

		{
			question: 'What 1967 movie was the statement made, "They call me Mr. Tibbs!"?',
			choices: ["In the Heat of the Night", "They Call Me Mr. Tibbs", "The Defiant Ones", "To Sir with Love"],
			answer: 0,	
		},

		{
			question: 'What actor played George Jefferson in the sitcom "The Jeffersons"?',
			choices: ["Ralph Carter", "John Amos", "Jimmy Walker", "Sherman Hemsley"],
			answer: 3,	
		},

		{
			question: 'What actor played Lando Calrissian in the movie "The Empire Strikes Back"?',
			choices: ["Kenny Baker", "Peter Mayhew", "Billy Dee Williams", "Frank Oz"],
			answer: 2,	
		},

		{
			question: 'What actor played John Shaft in the 1971 movie "Shaft"?',
			choices: ["Bill Cosby", "Christopher St. John", "Richard Roundtree", "Moses Gunn"],
			answer: 2,	
		},

		{
			question: 'What actor played Arnold Jackson in the 1970s sitcom "Different Strokes"?',
			choices: ["Gary Coleman", "Todd Bridges", "Emmanuel Lewis", "Alfonso Ribeiro"],
			answer: 0,	
		},

		{
			question: 'What actress played Tootie Ramsey in the 1970s sitcom "The Facts of Life"?',
			choices: ["Viola Davis", "Ruby Dee", "Cherie Johnson", "Kim Fields"],
			answer: 3,	
		},

		{
			question: 'What actress played Penny in the 1970s sitcom "Good Times"?',
			choices: ["Alfre Woodard", "Halle Berry", "Angela Bassett", "Janet Jackson"],
			answer: 3,	
		},
	];

// Begins the game on Start Click
// $("#start").on("click", function() {
// 	$(this).hide();
// 	go();
// });


// Starts the Game
$("#start").on("click", go);


function go() {
	
	countDown();
	displayQs();
	$("fieldset").show();
	$("input").show();
	// location.reload();
	// submitAnswers();
}

// Begins Timer Function
function countDown() {
  intervalId = setInterval(decrement, 1000);
}

// Timer Counter and Display
function decrement() {

  timer--;

  $("#show-number").html("<h2>Seconds Left: " + timer + "</h2>");

  if (timer === 0) {

    alert("Times Up!");
	alert("Total Questions: " + total + "\n" + "\nNumber Correct: " + numCorrect + "\nNumber Incorrect: " + numIncorrect + "\nNumber Unanswered: " + numUnanswered);
	location.reload();

	// timer = 120;
	// $("#start").on("click", go);

	// $("#start").on("click", function() {
	// 	$(this).show();
		
	// });
  
  }
}

// Scoring variable setup
function submitAnswers() {

	var total = 10;
	var numCorrect = 0;
	var numIncorrect = 0;
	var numUnanswered = 0;

	// Retrieve Selected Choices
	var q1 = document.forms["triviaForm"]["q1"].value;
	var q2 = document.forms["triviaForm"]["q2"].value;
	var q3 = document.forms["triviaForm"]["q3"].value;
	var q4 = document.forms["triviaForm"]["q4"].value;
	var q5 = document.forms["triviaForm"]["q5"].value;
	var q6 = document.forms["triviaForm"]["q6"].value;
	var q7 = document.forms["triviaForm"]["q7"].value;
	var q8 = document.forms["triviaForm"]["q8"].value;
	var q9 = document.forms["triviaForm"]["q9"].value;
	var q10 = document.forms["triviaForm"]["q10"].value;

	// Answers
	var answers = ["b","a","d","a","d","c","c","a","d","d"];

	// Compare Selected Choices with Answers and tally scores
	for (i = 1; i <= total; i++) {


		// Tally Unanswered
		if (eval ("q" + i) == null || eval ("q" + i) == "") {
			numUnanswered++;
			console.log("Number Unanswered: " + numUnanswered);
		}


		// Tally Correct Answers
		if (eval("q" + i) === answers[i - 1]) {
			numCorrect++;
			console.log ("Number Correct: " + numCorrect);
		}


		// Tally Incorrect Answers
		numIncorrect = total - numCorrect - numUnanswered; 
		console.log ("Number Incorrect: " + numIncorrect);
	}

	alert("Total Questions: " + total + "\n" + "\nNumber Correct: " + numCorrect + "\nNumber Incorrect: " + numIncorrect + "\nNumber Unanswered: " + numUnanswered);
	location.reload();
	
	return false;
}



// displayQs();

// Displays Questions on the HTML DOM
function displayQs() {
	for (i = 1; i <=10; i++) {	
		$("#displayQ" + i).html("<h2>" + trivia[currentQuestion].question + "</h2>");
		currentQuestion++;
	}
}

