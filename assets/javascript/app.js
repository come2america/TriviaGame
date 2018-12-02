$(document).ready(function () {
  ///variable object for questions and answers
  var ques = [
    {
      question: "Which music video premiered in 27 countries in 1991",
      answers: ["Scream", "Hollywood Tonight", "We R The World","Black or White"],
      correctAnswer: 3
    },
    {
      question: "Which song's short film in 1988 earned the People's Choice Award",
      answers: ["Smooth Crimminal", "Beat It", "Remember The Time","Thriller"],
      correctAnswer:0
    },
    {
      question: "Which song has parts recorded with him lying in bed, under covers ",
      answers: ["Speechless", "Leave Me Alone", "Cry", "I Just Can't Stop Loving You"],
      correctAnswer: 3
    },
    {
      question: "What album debuted #1 on Billboard, 0ct 30 2001 ",
      answers: ["Bad","Invincible" , "Off the Wall","Thriller" ],
      correctAnswer: 1
    },

  {
      question: "Which movie did Michael gain a part in in 1977 ",
      answers: ["This Is It", "Free Willy", "The Wiz","Men in Black" ],
      correctAnswer: 2
    },
    {
      question: "Which album is said to invent modern pop as we know it",
      answers: ["Off the Wall", "Thriller", "Michael",  "Ben"],
      correctAnswer: 0
    },

    {
      question: "Which album made Michael the King of Pop",
      answers: ["Off the Wall", "Xscape", "Thriller", "Invincible"],
      correctAnswer: 2
    },

   {
      question: "Which album is said to make Michael's popularity on par with Apple Pie and Football",
      answers: ["Dangerous", "Michael", "Bad", "Xsacpe "],
      correctAnswer: 0
    },

    {
      question: "What song was the first single ever to debut atop on Billboard",
      answers: ["Off the Wall", "You Are Not Alone", "Thriller", "Bad"],
      correctAnswer: 1
    },

 

    {
      question: "What song in 1995 remained on Top 100 for 24 weeks",
      answers: ["Off the Wall", "Beat It", "Man in the Mirror", "Scream"],
      correctAnswer: 3
    },



  ];
  //get random  question and answer from object and putting them in one variable
  var questionanswer;
  var timer;
  var clockTimer
  function displayques() {
    console.log("----CHANGING QUESTION-----")
    questionanswer = ques[Math.floor((Math.random() * ques.length))];
    console.log(questionanswer)

    return questionanswer
  }
//posts questions on screen
  function appendque() { 
    $("#question-holder").html("<h1>" + questionanswer.question + "</h1>");
    for (var i = 0; i < questionanswer.answers.length; i++) {
      $("#question-holder").append("<button class='question-btn' data-index = '"+ i +"'>" + questionanswer.answers[i] + "</button>");
    }
  
  }
  //checks if answer ia correct answer

var rightanswers=0
var wronganswers=0




  $("#start").click(function () {
    ///start of questions

        displayques();
        appendque();
       changeque()
       stop();

    //count down  of clock         
    clockTimer = setInterval(
          function () {
            decrement();  
          }, 1000)


  });
//calls function to check correts answer on click




  $(document).on('click',".question-btn", function (event) {

    checker($(this).attr("data-index")); 
   changeque(); 
    number=15;
    endscore();
   
  });

    
  var number = 15;
  ///function that changes different questions  on the screen
  function changeque() {

    timer = setTimeout( 
          function () {
            console.log("timer running")
            displayques(); 
            appendque();
          },1000)

  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #timer tag.
    $("#timer").html(number)
    if (number === 0) {
      stop();
      number = 15;
      changeque();
      clockTimer = setInterval(
        function () {
          decrement();
        }, 1000)
    }
    



  }
  function checker(index) {
      console.log(index, questionanswer)
    if (index == questionanswer.correctAnswer){
      rightanswers++
      console.log(rightanswers)
      console.log(" rightguess")
      
    }
    else {
    
      wronganswers++    
    console.log(wronganswers)
    console.log( "wrong guess")
    }

  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearTimeout(timer);
    clearInterval(clockTimer);

  }

  function endscore(){
   if( rightanswers===6){
    $("#playarea").html("<h1> U Know Michael, Shemon In! </h1>")
    $("#playarea").append( "<h1> Correct Answers :"+ rightanswers +" </h1>")
    $("#playarea").append( "<h1> Wrong Answers :"+ wronganswers +" </h1>")
  }
   else if (wronganswers===6){
      $("#playarea").html("<h1> U Don't Know Michael, Beat It Pal!</h1> ")
      $("#playarea").append( "<h1> Correct Answers :"+ rightanswers +" </h1>")
      $("#playarea").append( "<h1> Wrong Answers :"+ wronganswers +" </h1>")
      
    
    };
      
  
      
   
  }
 

  $("#restart").click(function () {
    location.reload();
  })

})