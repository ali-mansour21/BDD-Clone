window.onscroll = function () {
  changeLogo();
};

function changeLogo() {
  let header = document.getElementById("header");
  let logo = document.getElementById("logo");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("scroll");
    logo.src = "./assets/logo-footer.png";
  } else {
    header.classList.remove("scroll");
    logo.src = "./assets/logo-light.png";
  }
}
