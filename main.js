function mySubmit() {
  
  username = document.getElementById("username").value;
  if (username.match(/^(?=.{3,20}$)(?![_.])(?![0-9])[a-zA-Z0-9._]+(?<![_.])$/)) {
    userText = "";
  } else {
    userText = "نام کاربری باید با حروف الفبا شروع و حداقل سه کاراکتر باشد"
  }
  document.getElementById("username_message").innerHTML = userText;

  nationalCode = document.getElementById("national_code").value;
  if (!/^\d{10}$/.test(nationalCode)) {
    nationalText = "کد ملی باید ۱۰ رقم و معتبر باشد" ;
  } else {
    var check = parseInt(nationalCode[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
      sum += parseInt(nationalCode[i]) * (10 - i);
    }
    sum %= 11;
    if ((sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)) {
      nationalText = "";
    } else {
      nationalText = "کد ملی نامعتبر است";
    }
  }
  document.getElementById("national_message").innerHTML = nationalText;

  telNo = document.getElementById("tel").value;
  if(telNo.match(/^\(?([0]{1})\)?([9]{1})?([0-9]{9})$/)) {
    telText= "";      
	} else {
    telText= "شماره نامعتبر است";
  }
  document.getElementById("tel_message").innerHTML = telText;

  password = document.getElementById("pass").value;
  if (password.match ( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
    textPass="";
  } else {
    textPass="رمز عبور باید حداقل ۸ کاراکتر و شامل حروف کوچک بزرگ و عدد باشد"
  }
  document.getElementById("pass_messsage").innerHTML = textPass;

  confirmPass = document.getElementById("confirm_pass").value;
  if (password === confirmPass) {
    textConfirmPass = "";
  } else {
    textConfirmPass = "رمز عبور صحیح را وارد نمایید" ;
  }
  document.getElementById("confirm_message").innerHTML = textConfirmPass;
  
}

function cleardata() {
  document.getElementById("username").value = null;
  document.getElementById("national_code").value = null;
  document.getElementById("tel").value = null;
  document.getElementById("pass").value = null;
  document.getElementById("confirm_pass").value = null;
}