function size() {
  var sizetext = document.getElementById("textarea");
  var sizeinput = document.getElementById("sizeinput").value;
  sizetext.style.fontSize = sizeinput + "px";
}

function name() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  output.textContent = input;
  var namefile = output.textContent;
}

function color() {
  var colortext = document.getElementById("textarea");
  var colorinput = document.getElementById("colorinput").value;
  colortext.style.color = colorinput;
}

function font() {
  var fonttext = document.getElementById("textarea");
  var fontinput = document.getElementById("fontinput").value;
  fonttext.style.fontFamily = fontinput;
}

document.getElementById("sizeinput").onchange = size;
document.getElementById("input").onchange = name;
document.getElementById("colorinput").onchange = color;
document.getElementById("fontinput").onchange = font;

const handleCtrl1 = (e) => {
  if (e.ctrlKey && e.keyCode === 49) { // The `Ctrl`+`1` key code is 49
    downloadtxt();
  }
};

document.addEventListener('keydown', handleCtrl1);

function bold() {
var textarea = document.getElementById("textarea")
textarea.style.fontWeight = "bold"
}

function normal() {
var textarea = document.getElementById("textarea")
var boldbutton = document.getElementById("boldbutton")
if (textarea.style.fontWeight === "bold") {
 
textarea.style.fontWeight = "400"
boldbutton.textContent = "Bold Font"
} else {
textarea.style.fontWeight = "bold"
boldbutton.textContent = "Normal Font"
}
}

function notunderline() {
var underlinebutton = document.getElementById("underline")  
var textarea = document.getElementById("textarea");
if (textarea.style.textDecoration === "underline") {
 
 textarea.style.textDecoration = "none";
underlinebutton.textContent = "Underline"
} else {
  textarea.style.textDecoration = "underline";
underlinebutton.textContent = "No Underline"
}
}

function alignleft() {
var textarea = document.getElementById("textarea");
if (textarea.style.textAlign === "left") {
textarea.style.textAlign = "right"
alignbutton.textContent = "Center Align"
} else if (textarea.style.textAlign === "right") {
textarea.style.textAlign = "center"
alignbutton.textContent = "Left Align"
} else {
textarea.style.textAlign = "left"
alignbutton.textContent = "Right Align"
}
}

function aligncenter() {
var textarea = document.getElementById("textarea")
textarea.style.textAlign = "center"
}

function alignright() {
var textarea = document.getElementById("textarea")
textarea.style.textAlign = "right"
}

function newpage()  {
page = page + 1
var ppage = document.getElementById("page")
ppage.textContent = "Pages: " + page
const newpage = document.createElement("div");
const center = document.createElement("center")
newpage.id = "textarea"
newpage.contentEditable = "true"
document.body.appendChild(center)
center.appendChild(newpage)
}


function downloadtxt() {
    const editableDivs = document.querySelectorAll('div[contentEditable="true"]');
    const textValues = [];
    editableDivs.forEach(div => {
        textValues.push(div.innerHTML);
    });
    const htmlContent = textValues.join('\n');
    const blob = new Blob([htmlContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = document.getElementById("input").value + '.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function tts() {
  const textareas = document.querySelectorAll("textarea");
  let textToSpeak = '';
  textareas.forEach((textarea) => {
    textToSpeak += textarea.innerHTML + '\n'; 
  });
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[3];
  utterance.rate = 0.7;
  speechSynthesis.speak(utterance);
}

async function importTxtFile() {
      const file = await new Promise((resolve, reject) => {
        const input = document.createElement('input');
        const textarea = document.getElementById("textarea")
        input.type = 'file';
        input.accept = '.txt';
        input.onchange = () => resolve(input.files[0]);
input.style.display = "none"        
document.body.appendChild(input);
        input.click();
      });

      const content = await file.text();
      textarea.textContent = content;
}
window.addEventListener('beforeunload', function() {
  var textarea = document.getElementById("textarea");
  if (textarea.value.trim() !== "") { 
    console.log("Downloading text...");
    downloadtxt();
  }
});

function cleartextarea() {
var textarea = document.getElementById("textarea")
textarea.innerHTML = ""
}

function lockpage() {
var textarea = document.querySelectorAll("textarea")
var addpage = document.getElementById("addpage")
alert("you can no longer use this unless you download and reimport the file to edit it here again")
addpage.disabled = "true"
    textarea.forEach(function(textarea) {
        textarea.readOnly = true; // Set the readOnly property to true
    });
}

function menu() {
  var menuside = document.getElementById("menuside");
  
  if (menuside.style.display === "block" || menuside.style.display === "") {
    menuside.style.display = "none";
  } else {
    menuside.style.display = "block";
  }
}