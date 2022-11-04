const loginFormRef = document.querySelector(".login-form");

const formValidationRef = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  }
  console.log({email: email.value, Password: password.value});
  loginFormRef.reset();
};

loginFormRef.addEventListener("submit", formValidationRef);
