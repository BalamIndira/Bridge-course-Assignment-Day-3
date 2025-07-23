let count = 0;

function addToCart() {
  count++;
  document.getElementById("cart-count").innerText = count;
}

const toggleBtn = document.getElementById("toggle-menu");
const menuList = document.getElementById("menu-list");

toggleBtn.addEventListener("click", () => {
  if (menuList.style.display === "none") {
    menuList.style.display = "flex";  
    toggleBtn.textContent = "Hide Menu";
  } else {
    menuList.style.display = "none";
    toggleBtn.textContent = "Show Menu";
  }
});

