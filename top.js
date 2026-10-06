const toTop = document.querySelector(".to-top");

function updateToTop() {
  const doc = document.documentElement;
  const canScroll = doc.scrollHeight > window.innerHeight + 48;
  const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 28;
  toTop.hidden = !(canScroll && atBottom);
}

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateToTop, { passive: true });
window.addEventListener("resize", updateToTop);
updateToTop();
