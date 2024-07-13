document.getElementById("dark").addEventListener("click", function () {
    document.body.className = "dark";
    document
      .querySelector(".navbar-brand img")
      .setAttribute("src", "../theme/icon/calculate.svg");
    document
      .querySelector("#dropdownMenuButton img")
      .setAttribute("src", "../theme/icon/routine.svg");
    document.querySelector(".btn").classList.remove("btn-outline-light");
    document.querySelector(".btn").classList.add("btn-outline-dark");
  });
  
  document.getElementById("light").addEventListener("click", function () {
    document.body.className = "light";
    document
      .querySelector(".navbar-brand img")
      .setAttribute(
        "src",
        "../theme/icon/calculate_24dp_FILL0_wght400_GRAD0_opsz24 (2).svg"
      );
    document
      .querySelector("#dropdownMenuButton img")
      .setAttribute("src", "../theme/icon/routine_24dp_FILL0_wght400_GRAD0_opsz24.svg");
    document.querySelector(".btn").classList.remove("btn-outline-dark");
    document.querySelector(".btn").classList.add("btn-outline-light");
  });