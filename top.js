const toTop = document.querySelector(".to-top");

function updateToTop() {
  const doc = document.documentElement;
  const canScroll = doc.scrollHeight > window.innerHeight + 48;
  const distance = doc.scrollHeight - (window.scrollY + window.innerHeight);
  const atBottom = distance <= 72;
  toTop.hidden = !(canScroll && atBottom);
}

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateToTop, { passive: true });
window.addEventListener("resize", updateToTop);
updateToTop();
