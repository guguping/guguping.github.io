const goSave = () => {
  location.href = "save.html";
};
const goLogin = () => {
  location.href = "login.html";
};

window.onload = function () {
  const Portfoliomain1 = document.getElementById("Portfoliomain1");
  const button1 = document.getElementById("button-1");
  button1.addEventListener("click", function () {
    if (Portfoliomain1.style.display === "block") {
      Portfoliomain1.style.display = "none";
    } else {
      Portfoliomain2.style.display = "none";
      Portfoliomain1.style.display = "block";
    }
  });

  const Portfoliomain2 = document.getElementById("Portfoliomain2");
  const button2 = document.getElementById("button-2");
  button2.addEventListener("click", function () {
    if (Portfoliomain2.style.display === "block") {
      Portfoliomain2.style.display = "none";
    } else {
      Portfoliomain1.style.display = "none";
      Portfoliomain2.style.display = "block";
    }
  });
};