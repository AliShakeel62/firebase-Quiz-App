// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase,ref,set,child,push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_SBUwOMdfuqToZ0w8p-R4J8osjgOs3ms",
    authDomain: "final-last-assignment.firebaseapp.com",
    projectId: "final-last-assignment",
    storageBucket: "final-last-assignment.appspot.com",
    messagingSenderId: "38235925220",
    appId: "1:38235925220:web:576945daeb939951d9daf1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();

var questions = [
    {
        question:"Html Stands For _________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question:"Css Stands For _________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question:"Js Stands For _________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question:"Dom Stands For _________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question:"Ram Stands For _________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question:"Rom Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    }
];
var ShowQuestion = document.getElementById('Show-Question');
var mainoptions = document.getElementById('main-option');
var Questionnum = document.getElementById('Question-num');
var TotalQuestion = document.getElementById('Total-Question');
var main = document.getElementById('main');
var result1 = document.getElementById('result');

var index = 0
var result = 0;

window.showques = function() {
    ShowQuestion.innerHTML = questions[index].question;
    TotalQuestion.innerHTML = questions.length
    Questionnum.innerHTML = index + 1;
    for(var i = 0; i < questions[index].options.length; i++){
        var options = questions[index].options[i];
        var correctAns = questions[index].correctAns;
       mainoptions.innerHTML += `
       <div class="col-md-6">
       <button class="optionbtn" onclick="optionCheck('${options}' ,'${correctAns}')">${questions[index].options[i]}</button>
       </div>
    
       `
    }
}
showques();

var Total = document.getElementById('Total');
var CorrectAnswer = document.getElementById('Correct-Answer');
var Greate = document.getElementById('Greate');
var mainresult = document.getElementById('mainresult');
window.optionCheck= function(opt, correct) {
    mainoptions.innerHTML = "";
    if (opt === correct) {
        result++;
    }   
    index++;
    if(index === questions.length){
        main.style.display = "none";
        mainresult.style.display = "block";          
    }
   else{
    showques()
}  
var newid =  push(child(ref(database),`Answer`)).key
var refrence = ref(database,`Answer/${newid}`) 
set(refrence,correct)
};

window.Startagin=function () {
    mainoptions.innerHTML = "";
    index = 0;
    result = 0;
    showques();
    main.style.display = "block";
    mainresult.style.display = "none";
}

Startagin()

