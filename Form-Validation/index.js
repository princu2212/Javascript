var name = document.getElementById("name").value;
var uname = document.getElementById("uname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var password = document.getElementById("password").value;
var cpassword = document.getElementById("cpassword").value;
var submit = document.getElementById("submit").value;

var inputField = document.querySelectorAll("input");

const submitFunc = () => {
  if (name.length == "") {
    document.getElementById("fullnamecheck").innerHTML;
  } else {
    document.getElementById("name");
  }
};
