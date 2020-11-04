window.addEventListener("load",function(){
  GetBookings();

});

function GetBookings(){
    let url='https://api.sheety.co/300292224bcaf649e29ec0b698ae9321/newbooking/bookings';
      fetch(url)
        .then((response) => response.json())
        .then(json=> {
        //do something with the data
        //console.log(json.bookings);
        var bookings = document.getElementById("booking-list");
        var bookingIds=[];
      
        
       for(var i= 0;i<json.bookings.length;i++){
         var gName = json.bookings[i].name;
         var gEmail = json.bookings[i].email;
         var gPax = json.bookings[i].pax;
         var gId = json.bookings[i].id;
         var buttonId ="delete"+gId;
         
        let row=bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML =gId;
        row.insertCell(1).innerHTML =gName;
        row.insertCell(2).innerHTML=gEmail;
        row.insertCell(3).innerHTML=gPax;
        row.insertCell(4).innerHTML="";//remarks
        row.insertCel(5).innerHTML="<button id='"+ buttonId+"'class='btn btn-danger'>Delete</button><br/>";
         
         
         
         bookingIds.push(buttonId);
         
       }
        
        for(let j=0; j<bookingIds.length;j++){
           //console.log(bookingIds[j]);
            let el=document.getElementById(bookingIds[j]);
            el.addEventListener("click",function(){
              let theId =bookingIds[j].replace("delete","");
              //DeleteBooking(theId);
         
            } );
    
    
          }
         
      });
         
    }
    
