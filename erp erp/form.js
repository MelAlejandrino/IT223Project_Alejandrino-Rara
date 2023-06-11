function closeForm() {
    document.getElementById("formContainer").style.display = "none";
  }
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var measurement = document.getElementById("measurement").value;
    var paymentMethod = document.getElementById("paymentMethod").value;
  
    // Display values
    alert("Name: " + name + "\nAge: " + age + "\nGender: " + gender + "\nMeasurement: " + measurement + "\nPayment Method: " + paymentMethod);
  });
  