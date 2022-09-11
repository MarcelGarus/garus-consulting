function adjust() {
  // Adjust courses.
  const courses1 = document.getElementById('excel-courses-1');
  const courses2 = document.getElementById('excel-courses-2');
  if (courses1 !== null) {
    courses1.style.display = (window.innerWidth < 650) ? 'block' : 'flex';
  }

  if (courses2 !== null) {
    courses2.style.display = (window.innerWidth < 750) ? 'block' : 'flex';
  }
  // Adjust footer.
  document.getElementById('footer').style.display =
    (window.innerWidth < 550) ? 'block' : 'flex';
}

window.onload = function () {
  adjust();
  document.body.onresize = adjust;
}
