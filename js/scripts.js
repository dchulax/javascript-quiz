var correctAnswers = ["B","B","C","A"],
    total = correctAnswers.length;
function getCheckedValue(radioName){
  var radios =document.getElementsByName(radioName);
  for (var i=0; i<radios.length; i++)
  if(radios[i].checked)
  return radios[i].value;
}
function getMarks(){
  var marks= 0;
  for (var x=0; x<total; x++)
  if(getCheckedValue("quiz"+x)===correctAnswers[x]) marks+=1;
  return marks;
}
function returnMarks(){

alert("Your score is " +getMarks()+ "/" + total);
}
