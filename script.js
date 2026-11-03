const welcome = document.querySelector("#welcome");
const surprise = document.querySelector("#surprise");
const final = document.querySelector("#final");

document.querySelector("#openBtn").addEventListener("click", () => {
  welcome.classList.add("hidden");
  surprise.classList.remove("hidden");
  burstHearts();
});

document.querySelector("#moreBtn").addEventListener("click", () => {
  surprise.classList.add("hidden");
  final.classList.remove("hidden");
  burstHearts();
});

document.querySelector("#againBtn").addEventListener("click", () => {
  final.classList.add("hidden");
  welcome.classList.remove("hidden");
});

function burstHearts() {
  const symbols = ["♡", "♥", "✦", "✨"];
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2.2 + Math.random() * 2.2 + "s";
    heart.style.fontSize = 12 + Math.random() * 18 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4500);
  }
}
