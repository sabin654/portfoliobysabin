const btn1 = document.querySelector(".btn1");
btn1.addEventListener("mouseenter", () => {
  gsap.to(btn1, { duration: 0.5, scale: 1.1 });
});
btn1.addEventListener("mouseleave", () => {
  gsap.to(btn1, { duration: 0.5, scale: 1 });
});

// GSAP animation for button 2
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("mouseenter", () => {
  gsap.to(btn2, { duration: 0.5, scale: 1.1 });
});
btn2.addEventListener("mouseleave", () => {
  gsap.to(btn2, { duration: 0.5, scale: 1 });
});
document.addEventListener("DOMContentLoaded", () => {
  // GSAP animation for button 1
  gsap.from(".btn1", { duration: 1, x: -200, opacity: 0, ease: "power2.out" });

  // GSAP animation for button 2
  gsap.from(".btn2", { duration: 1, x: 200, opacity: 0, ease: "power2.out" });
});
document.addEventListener("DOMContentLoaded", () => {
  // GSAP animation for the image
  gsap.from(".fig img", {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    y: 50,
    ease: "power2.out",
  });
});
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    gsap.to(box, {
      duration: 0.3,
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(box, {
      duration: 0.3,
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    });
  });
});

// logic part is here :
function openLinkedIn() {
  window.location.href = "https://www.linkedin.com/in/sabin-bhandari11/";
}

function openMyWorks() {
  window.location.href = "https://github.com/sabin654";
}
