var halfContent = document.querySelectorAll(".half-content");
var viewMore = document.querySelector(".view-more");
var viewLess = document.querySelector(".view-less");

function toggleContent(showMore) {
  for (var i = 0; i < halfContent.length; i++) {
    halfContent[i].classList.toggle("show", showMore);
  }

  viewMore.style.display = showMore ? "none" : "block";
  viewLess.style.display = showMore ? "block" : "none";
}

toggleContent(false);