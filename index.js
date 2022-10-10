var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Last Number");

 value1 = parseFloat(num1,10)
 value2 = parseFloat(num2,10)

square = (value1 * value2)
triangle = ((value1 * value2)/2)
result = (value1 + value2)
trapiziam = (((value1+value2)+value2)/2)

document.getElementById("sum").innerHTML=(value1 +" + "+value2+" = " +result+"</br>")
result = value1 - value2
document.getElementById("sub").innerHTML=(value1+" - "+value2+ " = " +result+"</br>")
result = value1 * value2
document.getElementById("multi").innerHTML=(value1+" * "+value2+ " = " +result+"</br>")
result = value1 / value2
document.getElementById("div").innerHTML=(value1+" / "+value2+ " = " +result+"</br>")
document.getElementById("square").innerHTML=("Square "+" = "+square+"</br>")
document.getElementById("triangle").innerHTML=("Triangle "+" = "+triangle+"</br>")
document.getElementById("rectangle").innerHTML=("Rectangle "+ " = " +square+"</br>")
document.getElementById("trapiziam").innerHTML=("Trapiziam "+" = "+trapiziam+"</br>")
document.getElementById("rombhos").innerHTML=("Rombhos "+" = "+triangle+"</br>")