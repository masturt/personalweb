import Typed from "typed.js";
import confetti from "canvas-confetti";

new Typed(".heading", {
  strings: ["Hey there!", "now i am learning", "Fullstack Javascript"],
  typeSpeed: 78,
  backSpeed: 40,
  loop: true,
  cursorChar: "_",
});

const form = document.getElementById("form");
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const myCanvas = document.createElement("canvas");
    document.body.appendChild(myCanvas);
    confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });
    confetti({
      particleCount: 300,
      spread: 360,
    });
    myCanvas.remove();
  }
});
