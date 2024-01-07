var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
//register page data

//////////////////////////////////////////
//login page data

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}
function save() {
    var userId = document.getElementById("UserIdr").value;
    var email = document.getElementById("emailr").value;
    var phoneNumber = document.getElementById("numberr").value;
    var password = document.getElementById("passwordr").value;

    var userData = {
        userId: userId,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("User data saved in local storage:", userData);
}

function getData() {
    var userDataString = localStorage.getItem("userData");
    var userData = JSON.parse(userDataString);

    var userIdlogin = document.getElementById("UserIdl").value;
    var passwordlogin = document.getElementById("passwordl").value;

    if (userIdlogin === userData.userId && passwordlogin === userData.password) {
        console.log("Login successful"); // Check if this log appears in the console
        window.location.assign("home.html");
        alert("login successfully")
    } else {
        alert("Login failed");
        return;
    }
}
const checkBox = document.getElementById('check');
const navLinks = document.querySelector('.nav-links');

checkBox.addEventListener('change', function() {
  if (this.checked) {
    navLinks.classList.add('active');
  } else {
    navLinks.classList.remove('active');
  }
});
const city=()=>{
  const stopInput = document.getElementById('stopInput');
  const stopsList = document.getElementById('stopsList');

  
      stopInput.addEventListener('keypress', function(event) {
          if (event.key === 'Enter') {
              event.preventDefault(); // Prevent form submission

              const stopText = stopInput.value.trim();
              if (stopText) {
                  const listItem = document.createElement('li');
                  listItem.textContent = stopText;
                  const deleteButton = document.createElement('button');
                  deleteButton.textContent = 'Delete';
                  deleteButton.className = 'delete-btn';
                  deleteButton.onclick = function() {
                      stopsList.removeChild(listItem);
                  };
                  listItem.appendChild(deleteButton);
                  stopsList.appendChild(listItem);
                  stopInput.value = ''; // Clear input for next entry
              }
          }
      });
  
};
(function(){
  $('#msbo').on('click', function(){
    $('body').toggleClass('msb-x');
  });
}());

//!publish page

function pbnext1() {
  let inputs = document.querySelectorAll('.form-control');
      let allFilled = true;

      inputs.forEach((input) => {
        if (input.value === '') {
          allFilled = false;
        }
      });

      if (allFilled) {
        window.location.href = "publishnext1.html";
      } else {
        alert('Please fill in all fields.');
      }// Make sure to include the file extension (.html)
};