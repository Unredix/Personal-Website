const opScale = "scale(1.2)";
const opNoScale = "scale(1)";

function onHover(option) {
  if (option === "about") {
    document.querySelector("#about").style.transform = opScale;
    document.querySelector("#about").style.color = "rgba(30, 126, 129, 60%)";
  }
  if (option === "projects") {
    document.querySelector("#projects").style.transform = opScale;
    document.querySelector("#projects").style.color = "rgba(30, 126, 129, 60%)";
  }
  if (option === "contact") {
    document.querySelector("#contact").style.transform = opScale;
    document.querySelector("#contact").style.color = "rgba(30, 126, 129, 60%)";
  }
  if (option === "other") {
    document.querySelector("#other").style.transform = opScale;
    document.querySelector("#other").style.color = "rgba(30, 126, 129, 60%)";
  }
}

function offHover(option) {
  if (option === "about") {
    document.querySelector("#about").style.transform = opNoScale;
    document.querySelector("#about").style.color = "rgb(30, 126, 129)";
  }
  if (option === "projects") {
    document.querySelector("#projects").style.transform = opNoScale;
    document.querySelector("#projects").style.color = "rgb(30, 126, 129)";
  }
  if (option === "contact") {
    document.querySelector("#contact").style.transform = opNoScale;
    document.querySelector("#contact").style.color = "rgb(30, 126, 129)";
  }
  if (option === "other") {
    document.querySelector("#other").style.transform = opNoScale;
    document.querySelector("#other").style.color = "rgb(30, 126, 129)";
  }
}

window.onscroll = function () {
  onScroll();
};
function onScroll() {
  if (window.scrollY > 10) {
    onHover("about");
    offHover("other");
    offHover("projects");
    offHover("contact");
  }
  if (window.scrollY > 200) {
    onHover("projects");
    offHover("about");
    offHover("contact");
    offHover("other");
  }
  if (window.scrollY > 400) {
    onHover("contact");
    offHover("projects");
    offHover("about");
    offHover("other");
  }
  if (window.scrollY > 600) {
    onHover("other");
    offHover("contact");
    offHover("projects");
    offHover("about");
  }
}

onScroll();
