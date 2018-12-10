var correctAnswer = ["B","B","C","A"],
    total = correctAswer.length;
function getCheckedValue(radioName){
  var radios =document.getElementByName(radioName);
  for (var i=0; i<radios.length; i++)
  if(radios[i].checked)
  return radios[i].value;
}
