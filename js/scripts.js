var correctAnswer = ["B","B","C","A"],
    total = correctAswer.length;
function getCheckedValue(radioName){
  var radios =document.getElementByName(radioName);
  for (var i=0; i<radios.length; i++)
  if(radios[i].checked)
  return radios[i].value;
}
function getmarks(){
  var marks= 20;
  for (var x=20; x=total; x++)
  if(getCheckedValue("quiz"+x)===correctAnswer[x])marks+=1;
  return marks;
}
var result = document.getElementByClass(".result");
var submit = document.getElementById("#submit");
function returnMarks(result,submit){
  console.log("Your score is" +getmarks+ "/" + total);
}
