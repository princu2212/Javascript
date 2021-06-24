$(document).ready(function () {
  /* --------------Hide Function() Start------------------- */
  $("#fullnamecheck").hide();
  $("#unamecheck").hide();
  $("#emailcheck").hide();
  $("#phonecheck").hide();
  $("#passwordcheck").hide();
  $("#cpasswordcheck").hide();
  /* --------------Hide Function() End------------- */

  /* ---------------Variable Declaring Start------------------ */
  var name_error = true;
  var uname_error = true;
  var email_error = true;
  var phone_error = true;
  var pass_error = true;
  var cpass_error = true;
  /* ------------Variable Declaring End------------------ */

  /* ------------------Full Name Function Start------------------- */
  $(document).on("keyup", "#name", function () {
    nameFunc();
  });
  function nameFunc() {
    var name_value = $("#name").val();
    if (name_value.length == "") {
      $("#fullnamecheck").show();
      name_error = false;
      return false;
    } else {
      $("#fullnamecheck").hide();
    }
  }
  /* -----------------Full Name Function End-------------- */

  /* -------------------Username Function Start-------------------- */
  $(document).on("keyup", "#uname", function () {
    userNameFunc();
  });
  function userNameFunc() {
    var uname_value = $("#uname").val();
    if (uname_value.length <= 3 || uname_value.length > 15) {
      $("#unamecheck").show();
      uname_error = false;
      return false;
    } else {
      $("#unamecheck").hide();
    }
  }
  /* ------------------Username Function End------------------ */

  /* --------------Email Function Start------------------- */
  $(document).on("keyup", "#email", function () {
    emailFunc();
  });
  function emailFunc() {
    var email_value = $("#email").val();
    if (email_value == "") {
      $("#emailcheck").show();
      email_error = false;
      return false;
    } else {
      $("#emailcheck").hide();
    }
  }
  /* --------------Email Function End------------------- */

  /* -------------Phone Number Function Start----------------- */
  $(document).on("keyup", "#phone", function () {
    phoneFunc();
  });
  function phoneFunc() {
    var phone_value = $("#phone").val();
    if (phone_value.length < 0 || phone_value.length > 10) {
      $("#phonecheck").show();
      phone_error = false;
      return false;
    } else {
      $("#phonecheck").hide();
    }
  }
  /* ----------Phone Number Function End------------------ */

  /* ---------Password Function Start------------------ */
  $(document).on("keyup", "#password", function () {
    passFunc();
  });
  function passFunc() {
    var pass_value = $("#password").val();
    if (pass_value.length <= 3 || pass_value.length > 15) {
      $("#passwordcheck").show();
      pass_error = false;
      return false;
    } else {
      $("#passwordcheck").hide();
    }
  }
  /* ----------Password Function End--------------- */

  /* ---------Confirm Password Function Start--------------- */
  $(document).on("keyup", "#cpassword", function () {
    cpassFunc();
  });
  function cpassFunc() {
    var cpass_value = $("#cpassword").val();
    var pass_value = $("#password").val();
    if (pass_value != cpass_value) {
      $("#cpasswordcheck").show();
      cpass_error = false;
      return false;
    } else {
      $("#cpasswordcheck").hide();
    }
  }
  /* ------Confirm Password Function End---------- */

  /* --------Submit Button Start---------- */
  $(document).on("click", "#submit", function () {
    var name_error = true;
    var uname_error = true;
    var email_error = true;
    var phone_error = true;
    var pass_error = true;
    var cpass_error = true;

    nameFunc();
    userNameFunc();
    emailFunc();
    phoneFunc();
    passFunc();
    cpassFunc();

    if (
      name_error == true &&
      uname_error == true &&
      email_error == true &&
      phone_error == true &&
      pass_error == true &&
      cpass_error == true
    ) {
      return true;
    } else {
      return false;
    }
  });
  /* -----------------------------------Submit Button End------------------------------------ */
});
