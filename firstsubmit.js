
// function validateform(){  
//   var name=document.myform.name.value;  
//   var email=document.myform.email.value;  
    
//   if (name==null || name==""){  
//     alert("Name can't be blank");  
//     return false;  
//   }
   
//   }  
//showquestions();
function paqbtn(){
  // let paqq=document.getElementById("paqq");
   showquestions();
 }
  function submitfunction(){
  let msg=confirm("do you want your question as publicly");
  if(msg==true)
  {
alert("thank You your question is public and saved successfully");

  
  
  
  let addquestions=document.getElementById("addquestions");
  questions=localStorage.getItem("questions");
if(questions==null)
{
  questionsObj=[];
}
else{
  questionsObj=JSON.parse(questions);
}
questionsObj.push(addquestions.value);
localStorage.setItem("questions",JSON.stringify(questionsObj));
addquestions.value="";
//showquestions();
}
else{
  alert("thank you your question visibility is private and saved successfully");
  
  let addquestions=document.getElementById("addquestions");
  addquestions.value="";
    }
  }
function showquestions(){
  let getquestions=localStorage.getItem("questions");
  if(getquestions==null)
{
  questionsObj=[];
}
else{
  questionsObj=JSON.parse(getquestions);
}
let html="";
questionsObj.forEach(function(element,index){
  html+=`<div class="card">
  <div class="container">

    <div id="questions">${index+1} - ${element}</div> 
  </div>
</div>`;
});
let elmhtml=document.getElementById("questions");
if(questionsObj.length!=0)
{
  elmhtml.innerHTML=html;
}
else{
  elmhtml.innerHTML=`No questions to display`;
}


}
