const examples = {
  "Newton's second law": "Newton's second law says that the force on an object depends on its mass and acceleration. In simple form: F = m × a. Step 1: find the mass. Step 2: find the acceleration. Step 3: multiply them. Source: Open educational physics material.",
  "photosynthesis": "Photosynthesis is how green plants make food. Step 1: the leaf captures sunlight. Step 2: roots provide water. Step 3: leaves take in carbon dioxide. Step 4: the plant uses light energy to make glucose and releases oxygen. Source: Open educational biology material.",
  "default": "Let's break this concept into smaller steps. First, identify the main idea. Next, connect it to a simple real-world example. Finally, check your understanding with a short practice question. Source: Open educational content."
};

function solveDoubt(){
  const input=document.getElementById("doubtInput").value.trim();
  const level=document.getElementById("level").value;
  const lang=document.getElementById("language").value;
  const box=document.getElementById("answer");
  if(!input){box.classList.remove("hidden");box.innerHTML="Please enter a doubt first.";return;}
  let key=Object.keys(examples).find(k=>input.toLowerCase().includes(k.toLowerCase().split(" ")[0]));
  let text=examples[key]||examples.default;
  if(lang==="Gujarati") text="સરળ રીતે સમજીએ: "+text+"<br><br><b>Level:</b> "+level;
  else if(lang==="Hindi") text="आसान भाषा में समझते हैं: "+text+"<br><br><b>Level:</b> "+level;
  else text+="<br><br><b>Level:</b> "+level;
  box.innerHTML="<b>EduBridge AI Explanation</b><br>"+text;
  box.classList.remove("hidden");
}

function generateQuestion(){
  const subject=document.getElementById("subject").value;
  const difficulty=document.getElementById("difficulty").value;
  const box=document.getElementById("questionBox");
  const questions={
    "Mathematics":"If a number is multiplied by 4 and then 6 is added, the result is 26. What is the number?",
    "Science":"Why do plants need sunlight for photosynthesis?",
    "Computer Science":"What is the difference between a variable and a constant in programming?",
    "English":"Rewrite this sentence in the past tense: “She studies every evening.”"
  };
  box.innerHTML="<b>"+subject+" · "+difficulty+" Practice</b><p>"+questions[subject]+"</p><button class='secondary-btn' onclick='showHint()'>Show Hint</button><span id='hint'></span>";
  box.classList.remove("hidden");
}
function showHint(){document.getElementById("hint").innerHTML="<br><br>💡 Hint: Break the problem into smaller steps and identify what information is already given."}
function toggleLanguage(){
  const title=document.querySelector(".hero h1");
  if(title.dataset.gujarati==="1"){title.innerHTML='Learn without <span>language, level,</span> or access barriers.';title.dataset.gujarati="0";}
  else{title.innerHTML='ભાષા, સ્તર અથવા ઍક્સેસની અડચણ વગર <span>શીખો.</span>';title.dataset.gujarati="1";}
}
