var modifiedHexValueAll1 = "000000";
var modifiedHexValueAll2 = "000000";
var modifiedHexValueAll3 = "000000";
var modifiedHexValueAll4 = "000000";
var modifiedHexValueAll5 = "000000";
var buttonhovers = "#000000";

function modifyDecimal(value, modifier) {
  var result = (value + modifier) % 256;
  if (result < 0) {
    result += 256;
  }
  return result;
}

function vividspectrumrandomize() {
  var inputHex = document.getElementById("input2").value;
  var modificationNumbers = [-150, -70, -30, -10, 30];
  if (/^[0-9A-Fa-f]{6}$/.test(inputHex)) {
    var originalFirst4Digits = inputHex.slice(0, 4);
    var last2Digits = inputHex.slice(4);
    var modifiedHexValue1, modifiedHexValue2, modifiedHexValue3, modifiedHexValue4, modifiedHexValue5;
    var decimalValue = parseInt(last2Digits, 16);
    modifiedHexValue1 = originalFirst4Digits + modifyDecimal(decimalValue, -150).toString(16).toUpperCase().padStart(2, '0');
    modifiedHexValue2 = originalFirst4Digits + modifyDecimal(decimalValue, -70).toString(16).toUpperCase().padStart(2, '0');
    modifiedHexValue3 = originalFirst4Digits + modifyDecimal(decimalValue, -30).toString(16).toUpperCase().padStart(2, '0');
    modifiedHexValue4 = originalFirst4Digits + modifyDecimal(decimalValue, -10).toString(16).toUpperCase().padStart(2, '0');
    modifiedHexValue5 = originalFirst4Digits + modifyDecimal(decimalValue, 30).toString(16).toUpperCase().padStart(2, '0');
    modifiedHexValueAll1 = "#" + modifiedHexValue1;
    modifiedHexValueAll2 = "#" + modifiedHexValue2;
    modifiedHexValueAll3 = "#" + modifiedHexValue3;
    modifiedHexValueAll4 = "#" + modifiedHexValue4;
    modifiedHexValueAll5 = "#" + modifiedHexValue5;
    create();
  } else {
    console.log("Invalid Hexadecimal Input entered: " + inputHex);
  }
}

function create() {
  var body = document.body;
  var divtop = document.getElementById("divtop");
  var sidemenu = document.getElementById("menuside");
  var optinbutton = document.getElementById("optin");
  var allbuttons = document.querySelectorAll("button");
  sidemenu.style.backgroundColor = modifiedHexValueAll1;
  divtop.style.backgroundColor = modifiedHexValueAll5;

  body.style.backgroundImage = "linear-gradient(to bottom right, " + modifiedHexValueAll1 + ", " + modifiedHexValueAll3 + ")";
  divtop.style.border = "1px solid " + modifiedHexValueAll5;
  divtop.style.backgroundImage = "none";
  buttonhovers = modifiedHexValueAll2;

  allbuttons.forEach(function (button) {
    button.style.backgroundColor = buttonhovers;
    button.addEventListener("mouseover", function () {
      button.style.backgroundColor = modifiedHexValueAll5;
    });
    button.addEventListener("mouseout", function () {
      button.style.backgroundColor = modifiedHexValueAll2;
    });
  });
}

function downloadtheme() {
  const htmlContent = document.getElementById('input2').value;
  const blob = new Blob([htmlContent], { type: 'plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "Downloaded theme" + '.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function importThemeFile() {
  const file = await new Promise((resolve, reject) => {
    const input = document.createElement('input');
    const inputfile = document.getElementById("input2").value;
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = () => resolve(input.files[0]);
    input.style.display = "none";
    document.body.appendChild(input);
    input.click();
  });

  const content = await file.text();
  document.getElementById('input2').value = content;
  console.log(content);
  vividspectrumrandomize();
}
