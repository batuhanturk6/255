function redirect() {
        var gender = document.querySelector('input[name="gender"]:checked').value;
    
        if (gender === "male") {
            window.location.href = "sugestionMen.html"; 
        } else if (gender === "female") {
            window.location.href = "suggestionWomen.html"; 
        }
    }