let currentQuestion = 0;
let currenthint = 0;
let score = 0;
let questions = [
   {
	"question": "What was the first road going Ferrari?",
	"a": "Testarossa",
	"b": "125s",
	"c": "250 gto",
	"d": "Laferrari",
	"image":"quizimages/q3.jfif",
	"answer": "b",
	"hint":"It's one more than 124s."
   },
   {
	"question": "What was the quitessential 80's Ferrari?",
	"a": "550 Maranello",
	"b": "F355",
	"c": "328 GTS",
	"d": "308 GTS",
	"image":"quizimages/q4.jfif",
	"answer": "d",
	"hint":"it's c's predesscor"
   },
   {
	"question": "What was the last Ferrari Enzo Ferrari oversaw before his death?",
	"a": "F40",
	"b": "400i",
	"c": "Enzo",
	"d": "p4 330",
	"image":"quizimages/q5.jfif",
	"answer": "a",
	"hint":"its the 288 GTO's succesor"
   },
    {
	"question": "What Ferrari was made for Enzo Ferrari's son?",
	"a": "246 Dino",
	"b": "599 GTO",
	"c": "458 Italia",
	"d": "F12 Berlinetta",
	"image":"quizimages/q6.jfif",
	"answer": "a",
	"hint":"No hint available"
   },
    {
	"question": "What Ferrari was the last NA v8 ferrari made?",
	"a": "296 GTB",
	"b": "f430 scuderia",
	"c": "458 speciale",
	"d": "812 superfast",
	"image":"quizimages/q7.jfif",
	"answer": "c",
	"hint":"its the special version of the Ferrari 458"
   },
    {
	"question": "What was Ferrari's main design house?",
	"a": "Pininfarina",
	"b": "Zagato",
	"c": "Bertone",
	"d": "Ital design",
	"image":"quizimages/q8.jfif",
	"answer": "a",
	"hint":"the creator of the design firms first name is Battista"
   },
     {
	"question": "What is the most expensive Ferrari of all time?!",
	"a": "Sp3 Daytona",
	"b": "Mondial",
	"c": "288 GTO Evo",
	"d": "250 GTO",
	"image":"quizimages/q9.jpg",
	"answer": "d",
	"hint":"No hint available"
   },
     {
	"question": "Which Ferrari was featured in The Fast And The Furious?",
	"a": "348 GTS",
	"b": "F355 GTS",
	"c": "F355 GTB",
	"d": "328 GTS",
	"image":"quizimages/q10.jfif",
	"answer": "b",
	"hint":"No hint available"
   },
    {
	"question": "Which of the following is not a front engine V12 Ferrari limited variant?",
	"a": "812 Competzione",
	"b": "F12 TDF",
	"c": "599 GTO",
	"d": "550 Maranello",
	"image":"quizimages/q11.webp",
	"answer": "d",
	"hint":"iyts the succesor to the Testarossa"
   },
    {
	"question": "Which of the following is not apart of the Ferrari Big 5?",
	"a": "F40",
	"b": "F50",
	"c": "299 GTO",
	"d": "F60 America",
	"image":"quizimages/q12.webp",
	"answer": "d",
	"hint":"No hint available"
   },
     
    
 ];
 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
	
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	document.getElementById("message").innerHTML = " " + questions[currentQuestion].hint;
	
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "Good job if you got all 10/10 right!, if not you need to sharpen you Ferrari based knowledge.";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox

 
  
function markHint(ans) {
	 if (currenthint == 0) {
       closeLightBox();
    }
	
	   document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = " " + questions[currentQuestion].hint;
	
}
