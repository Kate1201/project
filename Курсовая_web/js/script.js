function ValidLogin() {
  var re = /^[a-z]+$/i;
  var myLogin = document.getElementByName("login").value;
  var valid = re.test(myLogin);
  if (valid) output = "Логин введен правильно!";
  else output = alert("Логин введен неправильно!");

  return valid;
}

function ValidPassword() {
  if (document.Sel3.password.value == document.Sel3.password.value)
    alert("Вас зарегистрировали!!! \n Password=" + document.Sel3.password.value);
  else alert("Ошибка при вводе пароля\nПопробуйте еще раз");
}
