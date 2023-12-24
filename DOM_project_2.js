// this project outlines a basic and small DOM project


document.getElementById("colorButton").addEventListener("click", function() {
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
   document.getElementById("colorDisplay").innerText = `The color is: ${randomColor}`;
});
