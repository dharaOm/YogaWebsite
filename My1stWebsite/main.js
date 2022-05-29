// function seterror(id, error){

// }


function validate() {
    
    if(document.myForm.FName.value == "" ) {
             alert( "Please provide your First name!" );
             document.myForm.Name.focus() ;
             return false;
          }else{  var FName = document.getElementById("FNAME").value;}

        if(document.myForm.FName.value.length >0)  {     
            const FNAME = document.getElementById('FNAME');
            // FNAME.addEventListener('blur', ()=>{
            // console.log("name is blurred");
            let regex = /^([a-zA-Z])/;
            let str = FNAME.value;
            console.log(regex, str);
            if(regex.test(str)){
               console.log('it matched');
                }
            else{
               // console.log('no match')
              alert("First Name cannot start with numbers")
              return false;
                }
            }


   if(document.myForm.LName.value == "" ) {
            alert( "Please provide your Last name!" );
            document.myForm.Name.focus() ;
            return false;
         }else{  var LName = document.getElementById("LNAME").value;}


   if(document.myForm.Email.value.length >0)  {
         var email = document.getElementById("EMAIL").value;
         var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)/
         if (regex.test(email)){
            // alert("You have provided a valid email")
            //return true
         }else{
            alert("sorry Email is incorrect, Please provide valid email Id")
            return false;
         }
      }

   if(document.myForm.Street.value == "" ) {
            alert( "Please provide your Street address!" );
            document.myForm.Name.focus() ;
            return false;
         }else{  var Street = document.getElementById("STREET").value;}

   if(document.myForm.City.value == "" ) {
            alert( "Please provide your City name!" );
            document.myForm.Name.focus() ;
            return false;
         }else{  var City = document.getElementById("CITY").value;}

   if(document.myForm.State.value === "Choose State" ) {
            alert( "Please select your State!" );
            //document.myForm.Name.focus() ;
            return false;
         }//else{  var State = document.getElementById("STATE").value;}

   if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
         document.myForm.Zip.value.length != 5 ) {
         alert( "Please provide a 5 digit zip" );
         document.myForm.Zip.focus() ;
         return false;
         }
         else{ var zipid = document.getElementById("ZipID").value;
        alert("First Name: "+FNAME.value+", Last Name: "+ LNAME.value+", Email: "+EMAIL.value+ ", Street: "+ STREET.value+", City: "+ CITY.value+ ", State: "+STATE.value+ ", ZipCode: "+ZipID.value);
        return true
        }
        
}


// var emailArray=[];

// function forgot(){
//    event.preventDefault();

//    var email = document.getElementById("fe").value;

//    if(emailArray.indexOf(email) == -1){
//        if (email == ""){
//            alert("Email required.");
//            return ;
//        }
//        alert("Email does not exist.");
//        return ;
//    }

//    alert("email is send to your email check it in 24hr. \n Thanks");
//    document.getElementById("fe").value ="";
// }


// const FNAME = document.getElementById('FNAME');
// FNAME.addEventListener('blur', ()=>{
// console.log("name is blurred");
// let regex = /^([a-zA-Z])/;
// let str = FNAME.value;
// console.log(regex, str);
// if(regex.test(str)){
//     console.log('it matched');
// }
// else{
//     // console.log('no match')
//     alert("First Name cannot start with numbers")
// }
// })







// function allLetter(FNAME)
// {
// var letters = /^[A-Za-z]/;
// if(FNAME.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphabet characters only');
// FNAME.focus();
// return false;
// }
// }


// function check_firstname(FNAME){
//     var re = new RegExp([a-zA-Z]*$g);
//     var message ="";
//     var someWrong = false;
//     console.log(re.test(FNAME))
//     if(!re.test(FNAME)){
//         message += "First Name can only be letters [a-z], [A-Z]";
//         someWrong = true;
//     }
//     if(FNAME.length >10){
//         message += "\nFirst Name must be less than 10 characters";
//         someWrong = true;
// }

// function submit() {
//     var name = document.getElementById("FNAME").value;
//     var name = document.getElementById("LNAME").value;
//     var name = document.getElementById("ZipID").value;
//     var name = document.getElementById("STREET").value;
//     if (validate()) {
//      document.getElementById("form_id").submit();
//         alert("Form submitted successfully")
        
//     }

// }

// document.getElementById("formone").submit();