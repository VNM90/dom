let magic = document.querySelector("#magic");

magic.onclick = function() {
  document.body.style.background =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16);
};
