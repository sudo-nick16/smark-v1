var size = localStorage.length
console.log(size)

function del(){
    var key = this.id;
    console.log('deleted');
    localStorage.removeItem(key);
    location.reload();
    
}
//appending username and profile pic
 var usrnm = localStorage.getItem('username_smark');
 document.getElementById("un").innerHTML= usrnm;
 var res = localStorage.getItem('smark_pfp');
 var image = new Image();
 image = document.createElement("img");
 image.src =res;
 var pfpdiv = document.getElementById("pfpup");
image.setAttribute('id','pfp')
 pfpdiv.appendChild(image);
 if(usrnm)
 {console.log(usrnm + " is logged in. \n@sudo-nick");
}

 //creating edit profile
 const ediv = document.createElement("div");
 ediv.classList.add("ediv");
 ediv.innerHTML = '<button id="editbtn"><img src="edit.png" alt="yo" height="20px" width="20px"></button>';
 pfpdiv.appendChild(ediv);
 ediv.addEventListener('click', function(){
   window.open("edit.html","_self");
 })
 

for(i=0; i<size ; i++){
    var key= localStorage.key(i)
    if(key != 'smark_pfp' && key != 'username_smark')
  {  var t = localStorage.getItem(key);
    //creating big_div
    var tag = document.createElement("div");
    const maindiv = document.getElementById("rdiv");
    tag.classList.add('sright')
    maindiv.appendChild(tag);

    //creating divfor_atag
    var sdiv = document.createElement('div');
    sdiv.classList.add('sdiv');
    tag.appendChild(sdiv);


    //creating an anchor
    var atag = document.createElement("a");
    atag.target = '_blank';
    atag.href = t;
    
    
    if (key.slice(0,2) === "##"){
      console.log("failed request")
      atag.innerText = key.slice(2);
      atag.classList.add('atag','atag_api_rejects');
    }else{
      atag.innerText = key;
      atag.classList.add('atag');
    }
    sdiv.appendChild(atag);


    //creating div for del button
    var bdiv = document.createElement('div');
    bdiv.classList.add('bdiv');
    tag.appendChild(bdiv);

    //creating a button
    const btn = document.createElement("button");
    btn.classList.add('btn')
    btn.innerText = 'X';
    btn.id = key;
    btn.onclick = del;
    bdiv.appendChild(btn);}

}

async function geturl(){
  var url = document.getElementById("inp").value;
  if(url){
try
{  
    console.log(url);
    var key_t = 'https://opengraph.io/api/1.1/site/' + encodeURIComponent(url) +'?app_id=b227291b-c986-46ce-b319-cbf0990756c0'
    var req = await fetch(key_t);
    var data = await req.json();
    var tit = ((data['htmlInferred'])['title']);
    console.log(key_t);
  }
  catch{
    alert("The Api couldn't find the title of provided URL, the entered URL would be saved as it is");
    var tempurl = new URL(url);
    var tit = "##" + tempurl.hostname + tempurl.pathname;
    console.log(url.hostname);
    
  }  
}
  var title = tit.charAt(0).toUpperCase() + tit.slice(1);
  localStorage.setItem(title,url);
  location.reload();
}

//triggering button on pressing enter
var input = document.getElementById("inp");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});


