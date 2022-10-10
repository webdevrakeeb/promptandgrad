
function myResult(){

var mark = document.getElementById("marks").value

var value = parseFloat(mark);

if( value >= 0 && value <= 32.9 ){
  document.getElementById("myMrk").innerHTML=("Apni <span style=\"color:red\" >Fail</span> korchen vai")
}else if( value >= 33 && value <= 39.9 ){
  document.getElementById("myMrk").innerHTML=("Apni <span style='color:#f7ce5e'> D </span> paichen vai")
}else if( value >= 40 && value <= 49.9 ){
  document.getElementById("myMrk").innerHTML=("Apni <span style='color:#66b9ba'> C </span> paichen vai")
}else if( value >= 50 && value <= 59.9 ){
  document.getElementById("myMrk").innerHTML=("Apni <span style='color:#9b6fbd'> B </span> paichen vai")
}else if( value >= 60 && value <= 69.9 ){
  document.getElementById("myMrk").innerHTML=("Apni <span style='color:#f280db'> A- </span> paichen vai")
}else if( value >= 70 && value <= 79.9 ){
  document.getElementById("myMrk").innerHTML=("Apni <span style='color:pink'> A </span> paichen vai")
}else if( value >= 80 && value <= 100 ){
  document.getElementById("myMrk").innerHTML=("Apni <span style='color:green'> A+ </span> paichen vai")
}else{
  document.getElementById("myMrk").innerHTML=("Invalid Number")
}

}