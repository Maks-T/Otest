function loadTest() {
  const loginInput = document.querySelector('.input-login');
  console.log(loginInput);
  document.location.href = `test/?login=${loginInput.value}`;
}
