document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nickname = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const password = form.querySelector("input[type='password']").value;
    const gender = form.querySelector("select").value;
    const dob = form.querySelector("input[type='date']").value;

    const user = { nickname, email, password, gender, dob };
    localStorage.setItem(email, JSON.stringify(user));
    localStorage.setItem("activeUser", nickname);
    localStorage.setItem("userEmailByNickname_" + nickname, email);

    alert("Registration successful!");
    window.location.href = "profile.html";
  });
});
