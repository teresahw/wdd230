let dayTimeValue = document.getElementById("dayTime")
dayTimeValue.value = new Date();

function validate(){
    var exp = /^[A-Za-z\s\-]+$/;
    var position = document.myform.position.value;
    var result = exp.test(position);

    if(result){
        alert("validation successful");
    }else{
        alert("validation failed");
        document.getElementById("error").innerHTML= "Please enter letters, hyphens and spaces only";
        document.myform.position.focus();
        return false;
    }
}