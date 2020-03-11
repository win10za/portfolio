function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }
var username;
var password;
window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin")
	form.onsubmit = myFunction;
	var parameter = getParams();
	username = parameter["username"];
	password = parameter["password"];
	console.log(parameter["username"]);
	console.log(parameter["password"]);
}
function myFunction(){
	var user = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];
	return checkLogin(user.value,pass.value);
}
function checkLogin(user,pass){
	if(user != username && pass != password){

	alert("incorrect");
	return false;
}
	else{

		alert("correct");
        return true;      
    }
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

}
			