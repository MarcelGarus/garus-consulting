function adjust() {
  // Adjust courses.
  const courses = document.getElementById('excel-courses');
  if (courses !== null) {
    courses.style.display = (window.innerWidth < 750) ? 'block' : 'flex';
  }

  // Adjust footer.
  document.getElementById('footer').style.display =
    (window.innerWidth < 550) ? 'block' : 'flex';
}

window.onload = function () {
  adjust();
  document.body.onresize = adjust;
}
