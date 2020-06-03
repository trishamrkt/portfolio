// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)

function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight-50 || document.documentElement.scrollTop > window.innerHeight-50) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
}