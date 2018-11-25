$(document).ready(function () {
  ///variable object for questions and answers
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

  //get random  question and answer from object and putting them in one variable
  var questionanswer;

  function displayques() {
    questionanswer = ques[Math.floor((Math.random() * ques.length))];
    console.log(questionanswer)

    return questionanswer
  }
//posts questions on screen
  function appendque() {
    $("#question-holder").html("<h1>" + questionanswer.question + "</h1>");
    for (var i = 0; i < questionanswer.answers.length; i++) {
      $("#question-holder").append("<button class='btn'>" + questionanswer.answers[i] + "</button>");
    }

  }
  //checks if answer ia correct answer
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
    ///start of questions

    setTimeout(
      function () {
        displayques();
        appendque();
        changeque();
      }, 2000)


    //count down  of clock         
    setTimeout(
      function () {
        ~
        setInterval(
          function () {
            decrement();
          }, 1500)
      }
      , 2000)


  })
//calls function to check correts answer on click

  $("#question-holder").on('click', ".btn", function () {

    checker();

  });


  var number = 10;
  ///function that changes different questions on the screen
  function changeque() {

    setInterval(
      function () {
        displayques();
        appendque();
      }, 11000)

  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #timer tag.
    $("#timer").html(number)
    if (number === 0) {

      //  ...run the stop function.
      stop();

    }


  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(number = 10);




  }




})