window.addEventListener("load",function(){
  GetBookings();

});

function GetBookings(){
    let url='https://api.sheety.co/d3ae687f2d39df38048b413e482c249e/bookingApp/bookings';
      fetch(url)
        .then((response) => response.json())
        .then(json=> {
        //do something with the data
        //console.log(json.bookings);
        var bookings = document.getElementById("booking-list");
        var bookingIds=[];
        
       for(var i= 0;i<json.bookings.length; i++){
         var gName = json.bookings[i].name;
         var gEmail = json.bookings[i].email;
         var gPax = json.bookings[i].pax;
         var gPackages =json.bookings[i].pax;
         var gRemarks =json.bookings[i].remarks;
         var gId = json.bookings[i].id;
         var buttonId ="delete"+gId;
         

        let row=bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML =gId;
        row.insertCell(1).innerHTML =gName;
        row.insertCell(2).innerHTML=gEmail;
        row.insertCell(3).innerHTML=gPax;
        row.insertCell(4).innerHTML=gPackages;
        row.insertCell(5).innerHTML=gRemarks;
        row.insertCell(6).innerHTML="<button id='"+ buttonId+"'class='btn btn-danger'>delete</button></br>";

   
         bookingIds.push(buttonId);
         
       }
        
        for(let j=0; j<bookingIds.length;j++){
           //console.log(bookingIds[j]);
            let el=document.getElementById(bookingIds[j]);
            el.addEventListener("click",function(){
              let theId =bookingIds[j].replace("delete","");
              DeleteBooking(theId);
         
            } );
    
    
          }
         


      });
         
    }
    
    function DeleteBooking(id){
  
     if(confirm("Are you sure you want to delete?"))
     {
      let url = 'https://api.sheety.co/d3ae687f2d39df38048b413e482c249e/bookingApp/bookings/'+ id;
      fetch(url, {
        method: 'DELETE',
      })
      .then((response) =>{ 
             location.reload();
           // let table = document.getElementaryById(" booking-list");
           // for(let i=1; i < table.rows.length;i++)
           // {
           //    table.deleteRow(i);


           // }
            //GetBookings();
            
      });


     }
     else {
        alert("Delete cancelled.");
    
    
    }

      
  }
