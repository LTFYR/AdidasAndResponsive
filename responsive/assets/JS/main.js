const klik = document.getElementById("hamb")
const x = document.getElementById("btn")

  klik.addEventListener("click",openNav)
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  x.addEventListener("click",closeNav)
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }