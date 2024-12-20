//this code is for the hamburger menu
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".site-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  })
);

//this code is for the copy button
document.querySelectorAll(".copy-btn").forEach((copyButton) => {
  copyButton.addEventListener("click", () => {
    const targetEelement = document.querySelector(copyButton.dataset.copy);
    const textToCopy = targetEelement.textContent.replace(/\s+/g, "").trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      const label = copyButton.querySelector(".copy-label");
      const originalText = label.textContent;

      copyButton.disabled = true;
      label.textContent = "Copied!";

      setTimeout(() => {
        copyButton.disabled = false;
        label.textContent = originalText;
      }, 1000);
    });
  });
});

//this code is for the faq page
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
