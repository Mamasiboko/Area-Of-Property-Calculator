function onWindowResize()
{
	
	var container = document.getElementById('home');
	var navbar = document.getElementById('navbar');
	var content = document.getElementById('thumbnails_container');
	// container.removeChild(navbar);
	// container.insertBefore(navbar, content);		
}

$(document).ready(function(){
	$(window).resize(onWindowResize);
});

document.getElementById("value2").addEventListener("change", functionUpdateOne);
document.getElementById("value3").addEventListener("change",  functionUpdateTwo);
document.getElementById("value4").addEventListener("change", functionUpdateThree);
document.getElementById("value5").addEventListener("change", functionUpdateFour);

function functionUpdateOne() {
 var onev = document.getElementById("value2").value;  
 var twov = document.getElementById("value3").value; 
 var threev = document.getElementById("value4").value; 
 var fourv = document.getElementById("value5").value; 
   if (onev == 100) {
     console.log(onev);
     document.getElementById("value3").value = "0";
     document.getElementById("value4").value = "0";
     document.getElementById("value5").value = "0";
	//  document.getElementById('error2').innerHTML = 'cant be greater than 100';

	 var multiply = (firstInput*num1);
	 document.getElementById("results").innerHTML=multiply;
	 var totalArea = multiply/100;
	 document.getElementById("totalArea1").innerHTML=totalArea;
 
	 var ROK1 = firstInput-totalArea;
	 document.getElementById("bal1").innerHTML=ROK1;
	 var secondArea = (ROK1*num2)/100;
	 document.getElementById("1ROK").innerHTML=secondArea;

   } else if (twov == 100) {
    
     document.getElementById("one").value = "0";
     document.getElementById("three").value = "0";
     document.getElementById("four").value = "0";
   } else if (threev == 100) {
    
     document.getElementById("one").value = "0";
     document.getElementById("two").value = "0";
     document.getElementById("four").value = "0";
   } else if (fourv == 100) {
     
     document.getElementById("one").value = "0";
     document.getElementById("three").value = "0";
     document.getElementById("two").value = "0";
   }

}
function functionUpdateTwo(){
	var onev = document.getElementById("value2").value;  
    var twov = document.getElementById("value3").value; 
    var threev = document.getElementById("value4").value; 
    var fourv = document.getElementById("value5").value; 

   if (twov == 100) {
     console.log(twov);
     document.getElementById("value2").value = "0";
     document.getElementById("value4").value = "0";
     document.getElementById("value5").value = "0";
}
}
function functionUpdateThree(){
	var onev = document.getElementById("value2").value;  
    var twov = document.getElementById("value3").value; 
    var threev = document.getElementById("value4").value; 
    var fourv = document.getElementById("value5").value; 

   if (threev == 100) {
     console.log(threev);
     document.getElementById("value2").value = "0";
     document.getElementById("value3").value = "0";
     document.getElementById("value5").value = "0";
}
}
function functionUpdateFour(){
	var onev = document.getElementById("value2").value;  
    var twov = document.getElementById("value3").value; 
    var threev = document.getElementById("value4").value; 
    var fourv = document.getElementById("value5").value; 

   if (fourv == 100) {
     console.log(fourv);
     document.getElementById("value2").value = "0";
     document.getElementById("value3").value = "0";
     document.getElementById("value4").value = "0";
}

}
document.getElementById("value3").addEventListener("change",  functionUpdateFirstTwoVlues);
document.getElementById("value5").addEventListener("change",  functionUpdateLastTwoVlues);

function functionUpdateFirstTwoVlues(){
	var onev = document.getElementById("value2").value;  
    var twov = document.getElementById("value3").value; 
    var threev = document.getElementById("value4").value; 
    var fourv = document.getElementById("value5").value; 
	var sum = 100;
	var difference = sum - 100;
	var sumOfTwo= document.getElementById("value2").value +  document.getElementById("value3").value;  
    // var sumOfTwo = onev + twov;

   if(onev + twov == 100) {
     console.log(onev);
	 console.log(twov);
     document.getElementById("value4").value = "0";
	 document.getElementById("value5").value = "0";
}

}

function functionUpdateLastTwoVlues(){
	var onev = document.getElementById("value2").value;  
    var twov = document.getElementById("value3").value; 
    var threev = document.getElementById("value4").value; 
    var fourv = document.getElementById("value5").value; 

   if (threev == 50 && fourv == 50) {
     console.log(threev);
	 console.log(fourv);
     document.getElementById("value2").value = "0";
	 document.getElementById("value3").value = "0";
}
}
document.getElementById("value4").addEventListener("change",  functionOneValue);
function functionOneValue(){

	var onev = document.getElementById("value2").value;  
    var twov = document.getElementById("value3").value; 
    var threev = document.getElementById("value4").value; 
    var fourv = document.getElementById("value5").value; 
	var sum = 100;
	var sumOfThree = onev + twov + threev;

   if ( sumOfThree == 100 ) {
     console.log(onev);
	 console.log(twov);
	 console.log(threev);
     document.getElementById("value5").value = "0";
	 
}

}

// document.getElementById("value2").addEventListener("change",  functionValidate);
// document.getElementById("value3").addEventListener("change",  functionValidate);
// document.getElementById("value4").addEventListener("change",  functionValidate);
// document.getElementById("value5").addEventListener("change",  functionValidate);

function functionValidate(){
	var onev = document.getElementById("value2").value;  
    var twov = document.getElementById("value3").value; 
    var threev = document.getElementById("value4").value; 
    var fourv = document.getElementById("value5").value; 
	var sum = 100;
	var sumOfAll = onev + twov + threev + fourv;

   if (sumOfAll > sum ) 
   { 
		document.getElementById('error5').innerHTML = 'cant be greater than 100';
   }

}
 function calculateBy()
	{
	//form input fields
	const btn1 = document.getElementById('btn');
	var firstInput = parseInt(document.getElementById('value1').value);
	var num1 = parseInt(document.getElementById('value2').value);
	var num2 = parseInt(document.getElementById('value3').value);
	var num3 = parseInt(document.getElementById('value4').value);
	var num4 = parseInt(document.getElementById('value5').value);
	

	var sumOfAll = 100;
	var sum = num1 + num2 + num3 + num4;
	var firstTwoNums =  num1 + num2;
	var secondTwoNums = num3 + num4;
	var twoLeftValues = 0;
	

if(sumOfAll = sum ){
	var multiply = (firstInput*num1);
	document.getElementById("results").innerHTML=multiply;
	var totalArea = multiply/100;
	document.getElementById("totalArea1").innerHTML=totalArea;

	var ROK1 = firstInput-totalArea;
	document.getElementById("bal1").innerHTML=ROK1;
	var secondArea = (ROK1*num2)/100;
	document.getElementById("1ROK").innerHTML=secondArea;


	var ROK2 = ROK1-secondArea;
	document.getElementById("bal2").innerHTML=ROK2;
	var thirdArea = (ROK2*num3)/100;
	document.getElementById("2ROK").innerHTML=thirdArea;


	var ROK3 = ROK2-thirdArea;
	document.getElementById("bal3").innerHTML=ROK3;
	var fouthArea = (ROK3*num4)/100;
	document.getElementById("3ROK").innerHTML=fouthArea;
}

else if(sumOfAll= firstTwoNums ){

	var multiply = (firstInput*num1);
	document.getElementById("results").innerHTML=multiply;
	var totalArea = multiply/100;
	document.getElementById("totalArea1").innerHTML=totalArea;

	var ROK1 = firstInput-totalArea;
	document.getElementById("bal1").innerHTML=ROK1;
	var secondArea = (ROK1*num2)/100;
	document.getElementById("1ROK").innerHTML=secondArea;

    document.getElementById("value2").innerHTML=num1;
	document.getElementById("value3").innerHTML=num2;
	document.getElementById("value4").addEventListener("change",twoLeftValues);
	document.getElementById("value5").addEventListener("change",twoLeftValues);
    

}
else if(sumOfAll = secondTwoNums){
	var ROK2 = ROK1-secondArea;
	document.getElementById("bal2").innerHTML=ROK2;
	var thirdArea = (ROK2*num3)/100;
	document.getElementById("2ROK").innerHTML=thirdArea;


	var ROK3 = ROK2-thirdArea;
	document.getElementById("bal3").innerHTML=ROK3;
	var fouthArea = (ROK3*num4)/100;
	document.getElementById("3ROK").innerHTML=fouthArea;

	document.getElementById("value2").addEventListener("change",twoLeftValues);
	document.getElementById("value3").addEventListener("change",twoLeftValues);
	document.getElementById("value4").innerHTML=num3;
	document.getElementById("value5").innerHTML=num4;
}	
}
btn.addEventListener('click',calculateBy);
function inputs()
{
	const input1 = document.getElementById('value1');
	const btn1 = document.getElementById('btn');
	const out1 = document.getElementById('firstInput');

	firstInput.innerHTML=input1.value;
}
btn.addEventListener('click',inputs);

function Clear() {
	document.getElementById("newForm").reset();
 }
