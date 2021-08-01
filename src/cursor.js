const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(e) {
  cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
  cursor.style.opacity = 1;
}
