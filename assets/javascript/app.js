$(document).ready(function () {
  var ques = [
    {
      question: "Which music video premiered in 27 countries in 1991",
      answers: ["Scream", "Hollywood Tonight", "We R The World", "Black or White"],
      correctAnswer: "Black or White"
    },
    {
      question: "Which song's short film in 1988 earned the People's Choice Award",
      answers: ["Thriller", "Beat It", "Remember The Time", "Smooth Crimminal"],
      correctAnswer: "Smooth Crimminal"
    },
    {
      question: "Which song has parts recorded with him lying in bed, under covers ",
      answers: ["Speechless", "Leave Me Alone", "Cry", "I Just Can't Stop Loving You"],
      correctAnswer: "I Just Can't Stop Loving You"
    },

  ];
  var questionanswer;

  function displayques() {
    questionanswer = ques[Math.floor((Math.random() * ques.length))];
    console.log(questionanswer)
    // $("#question-holder").append("<div>" + question + "</div>");

    return questionanswer
  }

  function appendque() {
    $("#question-holder").html("<h1>" + questionanswer.question + "</h1>");
    for (var i = 0; i < questionanswer.answers.length; i++) {
      $("#question-holder").append("<button class='btn'>" + questionanswer.answers[i] + "</button>");
    }

  }
  var canswer

  function checker() {
    canswer = ques.correctAnswer
    if ($(".btn") === canswer) {

      console.log("good job")
    }
    else {
      console.log("bad job")

    }

  }



  $("#start").click(function () {
       
    setTimeout(
      function () {
        setInterval(
          function () {
            displayques();
            appendque();

          },6000 )
    
        setInterval(
          function () {
            decrement();
          }, 1000)
      }
      , 4000)
  })


  $("#question-holder").on('click', ".btn", function () {

    checker();

  });


  var number =10;

  //  Variable that will hold our interval ID when we execute
  //  the "run" function
  var intervalId;







  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#timer").html(number)
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
     ;
    }



  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(number=10);
  }

  //  Execute the run function.







})