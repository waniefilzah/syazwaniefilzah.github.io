function BookNow(guestName,guestEmail,guestPax){
    let url=
     'https://api.sheety.co/d3ae687f2d39df38048b413e482c249e/bookingApp/bookings';
      let body = {
        booking: {
          name:guestName,
          email:guestEmail,
          pax:guestPax
        }
      }
      
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
        "Content-Type":"application/json"
       
      }
      })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
        console.log(json.booking);
        //document.getElementById("bookMsg").innerHTML = json.booking.name + " successfully added";
       // GetBookings();
      });
    
    
    }

     window.addEventListener("load",function(){

      document.getElementById("bookNow").addEventListener

     ("click",function()

     {

      let name = document.getElementById("guestName").value;
      let email = document.getElementById("guestEmail").value;
      let pax=document.getElementById("guestPax").value;
      let pax=document.getElementById("guestPackages").value;
      let remarks= document.getElementById("guestRemarks").value;

      console.log(name+"," + email+","+pax+ ","+ packages+","+remarks)
      
    });


     });


     