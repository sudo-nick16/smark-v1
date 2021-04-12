
var pfp = document.getElementById("upfp");
var next = document.getElementById("btnnext");
next.addEventListener("click", function(){
    var username = document.getElementById("uinp").value;
    localStorage.setItem('username_smark',username);
    window.open('./main.html',"_self");
    var reader = new FileReader();
    reader.addEventListener("load", function(){
            localStorage.setItem('smark_pfp', this.result);
    })
    reader.readAsDataURL(document.getElementById("upfp").files[0]);
    console.log(username + "is logged in. Enjoy my project : )");
});