$(document).ready(function() {
    $("#submit-btn").click(function(event) {
      event.preventDefault(); 
      
      var name = $("#name").val();
      var surname = $("#surname").val(); 

      if (name.trim() === "" && surname.trim() === "" ) {
        return; 
      }
      else if((name.trim() === "" || surname.trim() === "" ) ) {
        alert("Please enter name and surname!")
      }
      
      $("#game").show();
      $("#nametitle").text("Hey " + name + " " + surname);
    });
  
    $("#play-btn").click(function(event) {
      event.preventDefault();
      window.location.href = "game1.html";
    });
  });