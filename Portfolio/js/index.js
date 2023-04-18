const goSave = () => {
  location.href = "save.html";
};
const goLogin = () => {
  location.href = "login.html";
};
// portfoliomainShow = () => {
//   Portfoliomain = document.getElementById("Portfoliomain");
//   if (Portfoliomain.style.display === "none") {
//     Portfoliomain.style.display = "block";
//   } else {
//     Portfoliomain.style.display = "none";
//   }
// };
window.onload = function () {
  const Portfoliomain = document.getElementById("Portfoliomain");
  const button = document.getElementById("button-1");
  button.addEventListener("click", function () {
    if (Portfoliomain.style.display === "block") {
      Portfoliomain.style.display = "none";
    } else {
      Portfoliomain.style.display = "block";
    }
  });
};
