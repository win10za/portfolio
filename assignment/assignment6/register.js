window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = myfunction;
}

function myfunction(){
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var repassword = document.forms["myForm"]["repassword"];
    
    return validateForm(password.value,repassword.value);
    }

function validateForm(password,repassword) {
 
    if(password != repassword){
        var tempspan = document.getElementById("errormsg");
        tempspan.innerHTML = "pls check your password";
        return false;
    }
    else{
        return true;      
    }
    
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}