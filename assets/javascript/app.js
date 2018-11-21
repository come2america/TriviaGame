$(document).ready(function () {
    var question = [
        {
          question1: "Which music video premiered in 27 countries in 1991",
          answers: ["Scream",
          ,"Hollywood Tonight","We R The World", "Black or White"],
          correctAnswer: "Black or White"
        },
        {
          question2: "Which song's short film in 1988 earned the People's Choice Award",
         answers: ["Thriller","Beat It","Remember The Time","Smooth Crimminal"],
         correctAnswer: "Smooth Crimminal"
        },
        {
          question3: "Which song has parts recorded with him lying in bed, under covers ",
          answers:  ["Speechless","Leave Me Alone","Cry","I Just Can't Stop Loving You"],
          correctAnswer:"I Just Can't Stop Loving You"
        },
        
      ];
      var questionanswer;
 function displayques () {
         questionanswer=question[Math.floor((Math.random() * question.length))];
          console.log(questionanswer)  
               // $("#question-holder").append("<div>" + question + "</div>");
            
   return questionanswer     
}
function appendque( ){
    $("#question-holder").html("<div>" + questionanswer  + "</div>");
}



    $("#start").click(function(){ 
        displayques(

        );
      appendque();  
    })



   

})