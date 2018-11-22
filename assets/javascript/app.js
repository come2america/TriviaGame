$(document).ready(function () {
    var ques = [
        {
          question: "Which music video premiered in 27 countries in 1991",
          answers: ["Scream",
          ,"Hollywood Tonight","We R The World", "Black or White"],
          correctAnswer: "Black or White"
        },
        {
          question: "Which song's short film in 1988 earned the People's Choice Award",
         answers: ["Thriller","Beat It","Remember The Time","Smooth Crimminal"],
         correctAnswer: "Smooth Crimminal"
        },
        {
          question: "Which song has parts recorded with him lying in bed, under covers ",
          answers:  ["Speechless","Leave Me Alone","Cry","I Just Can't Stop Loving You"],
          correctAnswer:"I Just Can't Stop Loving You"
        },
        
      ];
      var questionanswer;
 function displayques () {
         questionanswer=ques[Math.floor((Math.random() * ques.length))];
          console.log(questionanswer)  
               // $("#question-holder").append("<div>" + question + "</div>");
            
   return questionanswer     
}
function appendque( ){
    $("#question-holder").html("<h1>" + questionanswer.question+ "</h1>");
    for (var i = 0; i < questionanswer.answers.length ; i++) {
    $("#question-holder").append( "<button class='btn'>" + questionanswer.answers[i]+ "</button>");
 }
}''

function checker(){
  if ($(".btn")== questionanswer.correctAnswer) {
   console.log("good job")
 }
 else {
  console.log("bad job")

 }
    
  }



    $("#start").click(function(){  
        displayques(   );
      appendque();
    }) 
   
    $("#question-holder").on('click',".btn", function(){

     checker();
  
  });


   

})