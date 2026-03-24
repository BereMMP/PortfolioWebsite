document.getElementById("copyright").textContent = new Date().getFullYear();

const toggleButton = document.createElement("button");
toggleButton.id = "darkToggle";
toggleButton.textContent = "Toggle Theme";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const scrollBtn = document.createElement("button");
scrollBtn.textContent = "Top";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.left = "20px";
scrollBtn.style.bottom = "20px";
scrollBtn.style.padding = "0.7rem 1rem";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.display = "none";
scrollBtn.style.background = "#022e36";
scrollBtn.style.color = "white";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const greeting = document.createElement("p");
const hour = new Date().getHours();
let message = "";

if (hour < 12) {
  message = "Good morning!";
} else if (hour < 18) {
  message = "Good afternoon!";
} else {
  message = "Good evening!";
}

greeting.textContent = message;
greeting.style.textAlign = "center";
greeting.style.marginTop = "1rem";
document.querySelector("header").appendChild(greeting);