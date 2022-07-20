let dayTimeValue = document.getElementById("dayTime")
dayTimeValue.value = new Date();

function validate(){
    var exp = /^[0-9]+$/;
    var indate = document.myform.indate.value;
    var result = exp.test(indate);

    if(result){
        alert("validation successful");
    }else{
        alert("validation failed");
        document.getElementById("error").innerHTML= "Please enter numbers only. For example August 16th 2023, would be 08162023";
        document.myform.indate.focus();
        return false;
    }
}

function validate(){
    var exp = /^[0-9]+$/;
    var outdate = document.myform.outdate.value;
    var result = exp.test(outdate);

    if(result){
        alert("validation successful");
    }else{
        alert("validation failed");
        document.getElementById("error2").innerHTML= "Please enter numbers only. For example August 16th 2023, would be 08162023";
        document.myform.outdate.focus();
        return false;
    }
}