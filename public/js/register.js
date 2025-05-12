const alertDOM = document.getElementById("error");
const formDOM = document.forms[0];
const emailDOM = document.getElementById("email");
const passwordDOM = document.getElementById("password");
const allowedSymbols =
  "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, V, Z, Q, W, X, Y, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, @, !, #, $, %, &, *, +, -, /, =, ?, ^, _, {, |, }, ~, .";

if (formDOM) {
  formDOM.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailDOM.value;

    const data = {
      email: emailDOM.value,
      password: passwordDOM.value,
    };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    console.assert(email.includes("@"), "email must contain @");
    console.assert(email.includes("."), "email must contain at least one dot");
    console.assert(email[0] !== ".", "email first character can't be dot");
    console.assert(
      email[email.length - 1] !== ".",
      "email last character can't be dot"
    );
    console.assert(
      !email.includes(".."),
      "email dots can't appear consecutively"
    );
    console.assert(!email.includes(" "), "email can't contain space");
    console.assert(
      checkSymbols(email),
      "characters that are allowed in email: uppercase and lowercase Latin letters A to Z and a to z. digits 0 to 9. printable characters !#$%&*+-/=?^_{|}~"
    );
    console.assert(etaCheck(email), "email must contain only one @ symbol");
    console.assert(lengthCheck(email), "The email address is too long");
  });
}

function checkSymbols(email) {
  email = email.toUpperCase();
  for (let i = 0; i < email.length; i++) {
    if (!allowedSymbols.includes(email[i])) {
      console.log(email[i]);
      return false;
    }
  }
  return true;
}

function etaCheck(email) {
  count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      count++;
    }
  }
  if (count > 1) {
    return false;
  }
  return true;
}

function lengthCheck(email) {
  const emailSplit = email.split("@");
  if (emailSplit[0].length > 64) {
    return false;
  }
  return true;
}
