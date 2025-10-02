document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
  
    const studentNumber = document.getElementById("studentNumber").value;
    const password = document.getElementById("password").value;
  
    // Sample validation
    if(studentNumber === "20250001" && password === "12345"){
      alert("Login Successful! Welcome Student " + studentNumber);
      window.location.href = "student-profile.html"; // redirect to profile page
    } else {
      alert("Invalid Student Number or Password!");
    }
  });
  