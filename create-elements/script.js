function changeColor() {
  let body = document.getElementById("body");
  let randomColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
  body.style.backgroundColor = randomColor;
  document.getElementById("color-code").innerText = randomColor;
}
