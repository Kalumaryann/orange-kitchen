 


    //contactBtn navigation
 const contactButtons = document.querySelectorAll(".contactBtn");
      
      contactButtons.forEach(button => {
        button.addEventListener("click", function() {
          window.location.href = "Contact.html";
        });
      })
  

      const orderButton = document.getElementById ("orderBtn");
      orderButton.addEventListener ("click" , function (){
        window.location.href = "Gallery.html"
      });

      const exploreButton =document.getElementById("explore");
      exploreButton.addEventListener ("click" , function() {
        window.location.href = "Menu.html";
        
      });