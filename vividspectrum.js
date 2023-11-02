var vividout = "#3190FA";
var vividoutHover = "#FFAD85";
var vivids = "#3279EE";
var vividsHover = "#FFB1A8";
var optin = true;

function vividspectrumpeach() {
  var body = document.body;
  var divtop = document.getElementById("divtop");
  var sidemenu = document.getElementById("menuside");
  var optinbutton = document.getElementById("optin");
  var allbuttons = document.querySelectorAll("button");
    sidemenu.style.backgroundColor = "#FFB1A8";
    divtop.style.backgroundImage = "linear-gradient(to bottom right, #FF96A8, #FFAD85)";
    optin = true;
    body.style.backgroundImage = "linear-gradient(to bottom right, pink, #FFDCC0";
    divtop.style.border = "1px solid #FFAD85";
    vividout = "#FFAD85";
    vivids = "#FFB1A8";
    allbuttons.forEach(function (button) {
      button.style.backgroundColor = vividout;
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#FFB1A8"
      });
      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#FFAD85"
      });
    });
}

function vividspectrumblue() {
  var body = document.body;
  var divtop = document.getElementById("divtop");
  var sidemenu = document.getElementById("menuside");
  var optinbutton = document.getElementById("optin");
  var allbuttons = document.querySelectorAll("button"); 
   sidemenu.style.backgroundColor = "#49A3FF";
    divtop.style.backgroundColor = "#49A3FF";
    optin = false;
    body.style.backgroundImage = "linear-gradient(to bottom right, #0090FF, #00eeff)";
    divtop.style.border = "1px solid #49A3FF";
    divtop.style.backgroundImage = "none";
    vividout = "#3190FA";
    vivids = "#3279EE";

    allbuttons.forEach(function (button) {
      button.style.backgroundColor = vividout;
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#3279EE"
      });
      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#3190FA"
      });
    });
  }
function vividspectrumgreen() {
  var body = document.body;
  var divtop = document.getElementById("divtop");
  var sidemenu = document.getElementById("menuside");
  var optinbutton = document.getElementById("optin");
  var allbuttons = document.querySelectorAll("button"); 
   sidemenu.style.backgroundColor = "#00D036";
    divtop.style.backgroundColor = "#13CD00";
    optin = false;
    body.style.backgroundImage = "linear-gradient(to bottom right, #00D036, #0E7B05)";
    divtop.style.border = "1px solid #13CD00";
    divtop.style.backgroundImage = "none";
    vividout = "#01A424";
    vivids = "#00D036";

    allbuttons.forEach(function (button) {
      button.style.backgroundColor = vividout;
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#00D036"
      });
      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#01A424"
      });
    });
  }
function vividspectrumred() {
  var body = document.body;
  var divtop = document.getElementById("divtop");
  var sidemenu = document.getElementById("menuside");
  var optinbutton = document.getElementById("optin");
  var allbuttons = document.querySelectorAll("button"); 
   sidemenu.style.backgroundColor = "#F46868";
    divtop.style.backgroundColor = "#FF4D4D";
    optin = false;
    body.style.backgroundImage = "linear-gradient(to bottom right, #FF5555, #F46868)";
    divtop.style.border = "1px solid #FF4D4D";
    divtop.style.backgroundImage = "none";
    vividout = "#F46868";
    vivids = "#FF4D4D";

    allbuttons.forEach(function (button) {
      button.style.backgroundColor = vividout;
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#FF4D4D"
      });
      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#F46868"
      });
    });
  }
function vividspectrumyellow() {
  var body = document.body;
  var divtop = document.getElementById("divtop");
  var sidemenu = document.getElementById("menuside");
  var optinbutton = document.getElementById("optin");
  var allbuttons = document.querySelectorAll("button"); 
   sidemenu.style.backgroundColor = "#EFE327";
    divtop.style.backgroundColor = "#FFF600";
    optin = false;
    body.style.backgroundImage = "linear-gradient(to bottom right, #F7F079, #EFE327)";
    divtop.style.border = "1px solid #FFF600";
    divtop.style.backgroundImage = "none";
    vividout = "#F7F079";
    vivids = "#EFE327";

    allbuttons.forEach(function (button) {
      button.style.backgroundColor = vividout;
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#EFE327"
      });
      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#F7F079"
      });
    });
  }
function vividspectrummagenta() {
  var body = document.body;
  var divtop = document.getElementById("divtop");
  var sidemenu = document.getElementById("menuside");
  var optinbutton = document.getElementById("optin");
  var allbuttons = document.querySelectorAll("button"); 
   sidemenu.style.backgroundColor = "#C200BB";
    divtop.style.backgroundColor = "#FF70FA";
    optin = false;
    body.style.backgroundImage = "linear-gradient(to bottom right, #FF70FA, #FF00F6)";
    divtop.style.border = "1px solid #FF70FA";
    divtop.style.backgroundImage = "none";
    vividout = "#C200BB";
    vivids = "#FF00F6";

    allbuttons.forEach(function (button) {
      button.style.backgroundColor = vividout;
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#FF00F6"
      });
      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#C200BB"
      });
    });
  }

