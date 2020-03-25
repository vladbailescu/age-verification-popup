var ageCookie = Cookies.get('ageVerification');
if (ageCookie !== "verified") {
  var ageVerificationPanel = document.querySelector(".age-verification__panel");
  ageVerificationPanel.classList.add("age-verification__panel--show");
  ageVerificationPanel.classList.remove("age-verification__panel");
}
document.querySelector(".age-verification__button--close").addEventListener("click", function(e) {
  var ageVerificationPanel = e.target.closest(".age-verification__panel--show");
  ageVerificationPanel.classList.add("age-verification__panel");
  ageVerificationPanel.classList.remove("age-verification__panel--show");
  Cookies.set("ageVerification", "verified", {expires : 30});
});

// closest() polyfill
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
    function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
            i = matches.length;
            while (--i >= 0 && matches.item(i) !== el) {};
        } while ((i < 0) && (el = el.parentElement));
        return el;
    };
}
