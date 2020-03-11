var count = 0;
function postFunction(){
    if(count == 0){
        console.log(count);
        var post = document.getElementById("post1");
        var text1 = document.getElementById("text1").value;
        post.innerHTML = text1;
        count +=1;
} else if(count == 1){
    console.log(count);
    var post2 = document.getElementById("reply1");
    var text1 = document.getElementById("text1").value;
    post2.innerHTML = text1;
    count +=1;
}  else if(count == 2){
    console.log(count);
    var post3 = document.getElementById("reply2");
    var text1 = document.getElementById("text1").value;
    post3.innerHTML = text1;
    count =0;
}
}

function clearFunction(){
    var post = document.getElementById("post1");
    var post2 = document.getElementById("reply1");
    var post3 = document.getElementById("reply2");
    post.innerHTML = "";
    post2.innerHTML = "";
    post3.innerHTML = "";
    count = 0;
    text1.value = "";
}