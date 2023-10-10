export const signInValidate = (email, password) => {
  if (password === "" || email === "") return true;

  return false;
};


export const signUpValidate = (firstName, email, password) => {
  if (firstName === "" || password === "" || email === "") {
    return "Please fill out all the fields.";
  }

  const isInvalid =
    password.length < 6 ||
    !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!~()]).*$/.test(password);

  if (isInvalid) {
    return "Password should be at least 6 characters and include a letter, number, and special character.";
  }
};
