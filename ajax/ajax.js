function getRandomUser(){
    console.log("lalal");
   var xhttp = new XMLHttpRequest();
    xhttp.onereadystatechange=function(){
   if(this.readyState ==4 && this.status==200)
     {
       var data= JSON.parse(this.response);
       var elFirstName=document.getElementById("firstname");
       var elLastName=document.getElementById("lastname");
       var eljsonResult=document.getElementById("jsonResult");
       elFirstName.innerHTML=data.results[0].name.first;
       elLastName.innerHTML=data.results[0].name.last;
        eljsonResult.innerHTML= this.response;
       
     }
    }
  
    xhttp.open("GET", "https://randomuser.me/api",true);
    xhttp.send();
  }
  
  var elGetRandomUser = document.getElementById("getRandomUserBtn");
  elGetRandomUser.addEventListener("click",function()
                                   
         {
  getRandomUser();
    
  });