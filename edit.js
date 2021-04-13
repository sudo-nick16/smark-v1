var tusr = document.getElementById("uinp");
var usr_val = localStorage.getItem('username_smark')
if(usr_val)
{   tusr.placeholder = localStorage.getItem('username_smark');
}

var pfp = document.getElementById("upfp");
var next = document.getElementById("btnedit");
next.addEventListener("click", function(){
    console.log("yoyoyo")
    var username = document.getElementById("uinp").value;
    if(!username){
        username = document.getElementById("uinp").placeholder;
    }
    if (username){
        localStorage.setItem('username_smark',username);
    }

    var reader = new FileReader();
    reader.addEventListener("load", function(){
            localStorage.setItem('smark_pfp', this.result);
    })
    
    try { 
        reader.readAsDataURL(document.getElementById("upfp").files[0]);
        window.open('./main.html',"_self");
    }
    catch {
        if(confirm("Do you wanna use your previous profile pic?")){
            window.open('./main.html',"_self");
        }
        document.getElementById("mainlog").style.boxShadow =  "0px 0px 15px black";
        setTimeout(function(){
            document.getElementById("mainlog").style.boxShadow =  "0px 0px 15px red";
        },20)
        
    }
});