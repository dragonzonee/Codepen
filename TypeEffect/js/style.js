
var num=2;
var tem_word;
var timer;
var sentence = document.getElementById("sentence");
var length=sentence.innerHTML.length;
function typeEffect(){
  tem_word = sentence.innerHTML.substring(0,num);
  sentence.innerHTML=tem_word;
  ifrepeat();
  timer=setInterval("typeEffect()",1200);
}

function ifrepeat(){
  if(num==length){
    clearInterval(timer);
  }else{
    num++;
  }
}
