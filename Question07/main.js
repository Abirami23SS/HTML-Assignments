
// document.getElementById('userInfoForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     ValidateName();

//     var $name = document.getElementById("name").value.trim();
//     // var age = document.getElementById('age').value.trim();
//     var email = document.getElementById('email').value.trim();
//     var phone = document.getElementById('phone').value.trim();
//     var pan = document.getElementById('pan').value.trim();

//     var userDataDisplay = document.getElementById('userDataDisplay');

//     var userDataBody = document.getElementById('userDataBody');

//     // Validate name (only alphabets and spaces)
//     function ValidateName()
//     {
//         if (!/^[a-zA-Z\s]+$/.test($name)) {
//             var regex = /^@[a-zA-Z\s]+$/;
//             if (regex.test($name.value)) {
//                 document.getElementById("firstname").innerHTML = "Valid";
//                 document.getElementById("firstname").style = "visible";
//                 $name.style.border = "3px solid green";
//                 document.getElementById("firstname").style.color = "green";
//             }
//             else {
//                 $name.style.border = "3px solid red";
//                 document.getElementById("firstname").innerHTML = "InValid";
//                 document.getElementById("firstname").style = "visible";
//                 document.getElementById("firstname").style.color = "red";
//             }
//             return;
//     }
// }
 
//     // Validate age (must be a number between 1 and 150)
//     if (!(/^\d+$/.test(age)) || age < 1 || age > 150) {
       
//         return;
//     }

//     // Validate address (should not be empty)
//     if (address === '') {
       
//     }

//     // Validate phone number (starting from 7-9 and exactly 10 digits long)
//     if (!/^[7-9][0-9]{9}$/.test(number)) {
//         var regex = /^[7-9][0-9]{9}$/;
//             if (regex.test(number.value)) {
//                 document.getElementById("phoneNumber").innerHTML = "Valid";
//                 document.getElementById("phoneNumber").style = "visible";
//                 number.style.border = "3px solid green";
//                 document.getElementById("phoneNumber").style.color = "green";
//             }
//             else {
//                 number.style.border = "3px solid red";
//                 document.getElementById("phoneNumber").innerHTML = "InValid";
//                 document.getElementById("phoneNumber").style = "visible";
//                 document.getElementById("phoneNumber").style.color = "red";
//             }
//         return;
//     }

//     // Validate PAN number (alphanumeric and exactly 10 characters long)
//     if (!/^[a-zA-Z0-9]{10}$/.test(pan)) {
//         alert('Please enter a valid PAN number which is exactly 10 characters long.');
//         return;
//     }

//     // If all inputs are valid, display the data in a table

//     var newRow = userDataBody.insertRow();
//     newRow.insertCell(0).textContent = name;
//     newRow.insertCell(1).textContent = age;
//     newRow.insertCell(2).textContent = address;
//     newRow.insertCell(3).textContent = phone;
//     newRow.insertCell(4).textContent = pan;

//     userDataDisplay.style.display = 'block';
// });
// // 

// // document.getElementById('userInfoForm').addEventListener('submit', function (event) {
// //         event.preventDefault();
    
// //         var $name = document.getElementById("name").value.trim();
// //         // var age = document.getElementById('age').value.trim();
// //         var email = document.getElementById('email').value.trim();
// //         var phone = document.getElementById('phone').value.trim();
// //         var pan = document.getElementById('pan').value.trim();
    
// //         var userDataDisplay = document.getElementById('userDataDisplay');
    
// //         var userDataBody = document.getElementById('userDataBody');

// // function ValidateName() {
// //     var $name = document.getElementById("name");
// //     var regex = /^@[a-zA-Z\s]+$/;
// //     if (regex.test($name.value)) {
// //         document.getElementById("firstname").innerHTML = "Valid";
// //         document.getElementById("firstname").style = "visible";
// //         $name.style.border = "3px solid green";
// //         document.getElementById("firstname").style.color = "green";
// //     }
// //     else {
// //         $name.style.border = "3px solid red";
// //         document.getElementById("firstname").innerHTML = "InValid";
// //         document.getElementById("firstname").style = "visible";
// //         document.getElementById("firstname").style.color = "red";
// //     }
// // }

// // function ValidateMail() {
// //     var email = document.getElementById("mail");
// //     var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// //     if (regex.test(email.value)) {
// //         document.getElementById("mailmessage").innerHTML = "Valid";
// //         document.getElementById("mailmessage").style = "visible";
// //         email.style.border = "3px solid green";
// //         document.getElementById("mailmessage").style.color = "green";
// //     }
// //     else {
// //         email.style.border = "3px solid red";
// //         document.getElementById("mailmessage").innerHTML = "InValid";
// //         document.getElementById("mailmessage").style = "visible";
// //         document.getElementById("mailmessage").style.color = "red";
// //     }
// // }

// // function ValidateNumber() {
// //     var number = document.getElementById("phone");
// //     var regex = /^[7-9][0-9]{9}$/;
// //     if (regex.test(number.value)) {
// //         document.getElementById("phoneNumber").innerHTML = "Valid";
// //         document.getElementById("phoneNumber").style = "visible";
// //         number.style.border = "3px solid green";
// //         document.getElementById("phoneNumber").style.color = "green";
// //     }
// //     else {
// //         number.style.border = "3px solid red";
// //         document.getElementById("phoneNumber").innerHTML = "InValid";
// //         document.getElementById("phoneNumber").style = "visible";
// //         document.getElementById("phoneNumber").style.color = "red";
// //     }
// // }

// // function ValidatePan() {
// //     var pan = document.getElementById("pan");
// //     var regex = /^[a-zA-Z0-9]{10}$/;
// //     if (regex.test(pan.value)) {
// //         document.getElementById("panmessage").innerHTML = "Valid";
// //         document.getElementById("panmessage").style = "visible";
// //         pan.style.border = "3px solid green";
// //         document.getElementById("panmessage").style.color = "green";
// //     }
// //     else {
// //         pan.style.border = "3px solid red";
// //         document.getElementById("panmessage").innerHTML = "InValid";
// //         document.getElementById("panmessage").style = "visible";
// //         document.getElementById("panmessage").style.color = "red";
// //     }
// // }

// // });







// // const date = new Date();
// //     //method1
// // 	const formattedDate3 = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
// //     (document.getElementById("myDate") as HTMLInputElement).value = formattedDate3;
// //method2
// // var date1=date.toLocaleDateString("es-CL").split("-");
// // const format =date1[2]+"-"+date1[1]+"-"+date1[0];
// // (document.getElementById("myDate1") as HTMLInputElement).value = format;



var footElement=document.getElementById("foot");
footElement.innerHTML="Copyright @"+new Date().getFullYear()+"-present syncfusion";

var category =document.getElementById("category");
var book =document.getElementById("book");
var email =document.getElementById("email");
var author =document.getElementById("author");
var published =document.getElementById("published");
var price =document.getElementById("price");

var value1=document.getElementById("value1");
var value2=document.getElementById("value2");
var value3=document.getElementById("value3");
var value4=document.getElementById("value4");
var value5=document.getElementById("value5");
var value6=document.getElementById("value6");
var validBook=false;
var validAuthor=false;
var validYear=false;
var validEmail=false;
var validPrice=false;
function focused(event){
    console.log(event)
    if(event.target.id=="book"){
        
        var regex=/^([^0-9]{1,50})$/;

        if(regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validBook=true;
        }else{
            event.target.style.border="5px solid red";
            validBook=false;
        }
    }
    if(event.target.id=="email"){
        
        var regex=/^([a-zA-Z0-9\.-]+)@gmail.com$/;

        if(regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validEmail=true;
        }else{
            event.target.style.border="5px solid red";
            validEmail=false;
            
        }
    }
    if(event.target.id=="author"){
        
        var regex=/^([^0-9]{1,50})$/;

        if(regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validAuthor=true;
        }else{
            event.target.style.border="5px solid red";
            validAuthor=false;
        }
    }
    if(event.target.id=="published"){
    

        if(Number(event.target.value)>=1000 && Number(event.target.value)<new Date().getFullYear()){
            event.target.style.border="5px solid green";
            validYear=true;
        }else{
            event.target.style.border="5px solid red";
            validYear=false;
        }
    }
    if(event.target.id=="price"){
        var regex=/^([0-9]+).([0-9]+)$/;
        if(Number(event.target.value)>0 && regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validPrice=true;
        }else{
            event.target.style.border="5px solid red";
            validPrice=false;
        }
    }
}


function save(){

    if(validBook && validAuthor && validEmail && validYear && validPrice){
    value1.innerHTML=category.options[category.selectedIndex].value;
    value2.innerHTML=book.value;
    value3.innerHTML=email.value;
    value4.innerHTML=author.value;
    value5.innerHTML=published.value;
    value6.innerHTML=price.value;}
    else{
        alert("Please enter valid details");
    }
    
}
function cancel(){
    category.value="";
    book.value="";
    email.value="";
    author.value="";
    published.value="";
    price.value="";
}

function show(){
    document.getElementById("form").style.display="none";
    document.getElementById("show").style.display="block";
}
function back(){
    document.getElementById("show").style.display="none";
    document.getElementById("form").style.display="block";
   
}