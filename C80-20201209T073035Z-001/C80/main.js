nameofthestudentarray = [] ;
function submit(){
display_student_array = [];
for (var v = 1; v<=4;v++){
 var nameofthestudent = document.getElementById("nameofthestudent"+v).value;  
 console.log(nameofthestudentarray);
nameofthestudentarray.push(nameofthestudent);
}
console.log(nameofthestudentarray);
}
var lenghtofnameofthestudentsarray =nameofthestudentarray.lenght;
console.log(lenghtofnameofthestudentsarray);
for (var k=0;k<=lenghtofnameofthestudentsarray;k++){
 display_student_array.push("<h4>Name-"+nameofthestudentarray[k]+"</h4>");
 console.log(display_student_array);  
}