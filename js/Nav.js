function toggleMenu() {
  const menu = document.getElementById("res_menu")
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function toggleResMenu() {
  const resmenu = document.getElementById("res_dropdown")
  if (resmenu.style.display === "none") {
    resmenu.style.display = "block";
  } else {
    resmenu.style.display = "none";
  }
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}